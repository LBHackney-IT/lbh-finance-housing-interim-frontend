import { format } from 'date-fns';
import React, { memo, useEffect, useMemo, useState } from 'react';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';
import { getBatchLog } from '../../api/Api';
import PageContainer from '../common/components/PageContainer';
import PageHeader from '../common/components/PageHeader';
import Table from '../common/components/Table';
import { Layout } from '../common/Layout';
import './BatchLog.scss';

const DateCell = ({ value }) => value ? format(new Date(value), 'dd/MM/yyyy hh:mm') : '-';

const BatchLog = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const getData = async () => {
      setIsLoading(true);
      const result = await getBatchLog();
      setIsLoading(false);
      if (result) setData(result);
    };
    getData();
  }, []);

  const columns = useMemo(() => [
    { Header: 'Batch Id', accessor: 'batchId' },
    { Header: 'Process Name', accessor: 'processName' },
    { Header: 'Start Time', accessor: 'startTime', Cell: DateCell },
    { Header: 'End Time', accessor: 'endTime', Cell: DateCell },
    {
      Header: () => null,
      id: 'expander',
      Cell: ({ row }) => (
        <span {...row.getToggleRowExpandedProps()}>
          {row.isExpanded ? <IoIosArrowUp /> : <IoIosArrowDown />}
        </span>
      ),
    },
  ], []);

  const subColumns = useMemo(() => [
    { Header: 'Type', accessor: 'type' },
    { Header: 'Message', accessor: 'message' },
  ], []);

  const renderRowSubComponent = ({ row }) => (
    <Table data={row.original.errors} columns={subColumns} />
  );

  return (
    <Layout>
      <PageHeader className="batch-log__header">Batch log (Last 30 days)</PageHeader>

      <div className="has-background-white pb-5">
        <PageContainer>
          {isLoading && <div className='loader is-loading batch-log__loader' />}
          {!data.length && !isLoading && 'No records'}
          {data.length > 0 && <Table data={data} columns={columns} renderRowSubComponent={renderRowSubComponent} />}
        </PageContainer>
      </div>
    </Layout>
  );
};

BatchLog.propTypes = {};

export default memo(BatchLog);

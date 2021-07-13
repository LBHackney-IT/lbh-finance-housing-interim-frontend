import React, { useEffect, useState } from 'react';
import NumberFormat from 'react-number-format';
import { getOperatingBalances } from '../../api/Api';
import LoaderContainer from '../common/components/LoaderContainer';
import PageContainer from '../common/components/PageContainer';
import PageHeader from '../common/components/PageHeader';
import { Layout } from '../common/Layout';
import './operatingbalances.scss';
import DateRangeSearchBar from '../common/components/DateRangeSearchBar';

const OperatingBalances = () => {
  const [startDate, setStartDate] = useState(new Date(2020, 3, 12));
  const [endDate, setEndDate] = useState(new Date());
  const [startWeekNo, setStartWeekNo] = useState(1);
  const [endWeekNo, setEndWeekNo] = useState(2);
  const [startYearNo, setStartYearNo] = useState(2020);
  const [endYearNo, setEndYearNo] = useState(2021);
  const [filterMode, setFilterMode] = useState(1);
  const [opBalanceValues, setOperatingBalances] = useState(undefined);

  useEffect(() => {
    async function getOpBalances() {
      const opBalances = await getOperatingBalances({
        startDate: filterMode === 1 ? startDate : null,
        endDate: filterMode === 1 ? endDate : null,
        startYearNo,
        endYearNo,
        startWeekNo,
        endWeekNo,
      });
      setOperatingBalances(opBalances);
    }

    getOpBalances();
  }, [
    startDate,
    endDate,
    filterMode,
    startWeekNo,
    endWeekNo,
    startYearNo,
    endYearNo,
  ]);

  return (
    <Layout>
      <PageHeader>Operating Balance</PageHeader>

      <div className="has-background-white pb-5">
        <PageContainer>
          <DateRangeSearchBar
            startDate={startDate}
            setStartDate={setStartDate}
            endDate={endDate}
            setEndDate={setEndDate}
            startWeekNo={startWeekNo}
            endWeekNo={endWeekNo}
            startYearNo={startYearNo}
            endYearNo={endYearNo}
            setStartWeekNo={setStartWeekNo}
            setEndWeekNo={setEndWeekNo}
            setStartYearNo={setStartYearNo}
            setEndYearNo={setEndYearNo}
            mode={filterMode}
            setMode={setFilterMode}
          />

          <LoaderContainer valueChecks={[opBalanceValues]} minHeight="150px">
            <table
              className="table mb-5 operating-balances-table"
              style={{ width: '100%', marginTop: '25px' }}
            >
              <thead>
              <tr>
                <th className="has-text-left">
                  <strong>Service</strong>
                </th>
                <th className="has-text-right">
                  <strong>Total Charged</strong>
                </th>
                <th className="has-text-right">
                  <strong>Total Paid</strong>
                </th>
                <th className="has-text-right">
                  <strong>Total Balance</strong>
                </th>
                {/* <th className="has-text-right">
                    <strong>Charged YTD</strong>
                  </th>
                  <th className="has-text-right">
                    <strong>Paid YTD</strong>
                  </th>
                  <th className="has-text-right">
                    <strong>Arrears YTD</strong>
                  </th> */}
              </tr>
              </thead>
              <tbody>
              {opBalanceValues !== undefined ? (
                opBalanceValues.map((operatingBalanceItem) => {
                  return (
                    <tr key={operatingBalanceItem.rentGroup}>
                      <td className="has-text-left">
                        <strong>{operatingBalanceItem.rentGroup}</strong>
                      </td>
                      <td className="has-text-right">
                        <NumberFormat
                          value={operatingBalanceItem.totalCharged}
                          displayType={'text'}
                          thousandSeparator={true}
                          prefix={'£'}
                        />
                      </td>
                      <td className="has-text-right">
                        <NumberFormat
                          value={operatingBalanceItem.totalPaid}
                          displayType={'text'}
                          thousandSeparator={true}
                          prefix={'£'}
                        />
                      </td>
                      <td className="has-text-right">
                        <NumberFormat
                          value={operatingBalanceItem.totalBalance}
                          displayType={'text'}
                          thousandSeparator={true}
                          prefix={'£'}
                        />
                      </td>
                      {/* <td className="has-text-right">
                          <NumberFormat
                            value={operatingBalanceItem.chargedYTD}
                            displayType={"text"}
                            thousandSeparator={true}
                            prefix={"£"}
                          />
                        </td>
                        <td className="has-text-right">
                          <NumberFormat
                            value={operatingBalanceItem.paidYTD}
                            displayType={"text"}
                            thousandSeparator={true}
                            prefix={"£"}
                          />
                        </td>
                        <td className="has-text-right">
                          <NumberFormat
                            value={operatingBalanceItem.arrearsYTD}
                            displayType={"text"}
                            thousandSeparator={true}
                            prefix={"£"}
                          />
                        </td> */}
                    </tr>
                  );
                })
              ) : (
                <></>
              )}
              </tbody>
            </table>
          </LoaderContainer>
        </PageContainer>
      </div>
      {/* <OperatingBalancesSummary balanceSummary={balanceSummary} />
      <OperatingBalanceCardList operatingBalanceCards={operatingBalanceCards} /> */}
    </Layout>
  );
};

export default OperatingBalances;

import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { NavLinkButton } from '../common/components/Button';
import DateRangeSearchBar from '../common/components/DateRangeSearchBar';
import { BackIcon } from '../common/components/Icons';
import PageContainer from '../common/components/PageContainer';
import PageHeader from '../common/components/PageHeader';
import { Layout } from '../common/Layout';
import { INDIVIDUAL_LOOKUP } from '../RouteConstants';
import './assets/individualLookupPayments.scss';
import { getTenancy, getTenancyTransactions } from '../../api/Api';
import LoaderContainer from '../common/components/LoaderContainer';
import TransactionsTable from './components/TransactionsTable';

const IndividualLookupPayments = () => {
  const params = useParams();
  const tagRef = params.tenancyAgreementRef
    ? decodeURIComponent(params.tenancyAgreementRef)
    : params.tenancyAgreementRef;

  // State
  const [searchResult, setSearchResult] = useState(undefined);
  const [isSearching, setIsSearching] = useState(false);
  const [startDate, setStartDate] = useState(new Date(2020, 3, 12));
  const [endDate, setEndDate] = useState(new Date());

  // Load data
  useEffect(() => {
    if (tagRef) {
      // Async search function
      async function PerformSearch() {
        setIsSearching(true);
        const tenantResult = await getTenancy({ tenancyAgreementRef: tagRef });
        const transactionsResult = await getTenancyTransactions({
          tenancyAgreementRef: tagRef,
          count: 100,
        });

        setSearchResult({
          tenant: tenantResult,
          transactions: transactionsResult,
        });

        setIsSearching(false);
      }

      PerformSearch();
    }
  }, [tagRef]);

  // The back button control
  const BackBtn = () => {
    return (
      <NavLinkButton
        Icon={BackIcon}
        toRoute={`${INDIVIDUAL_LOOKUP}/2/${encodeURIComponent(tagRef)}`}
        className="ml-4 mr-5"
      >
        BACK
      </NavLinkButton>
    );
  };

  return (
    <Layout>
      <PageHeader noBg={true} Icon={BackBtn}>
        Arrears view
        {searchResult
          ? ` - ${searchResult.tenant.forename} ${searchResult.tenant.surname}`
          : null}
      </PageHeader>

      <div className="has-background-white" style={{ minHeight: '70vh' }}>
        <PageContainer>
          <DateRangeSearchBar
            startDate={startDate}
            setStartDate={setStartDate}
            endDate={endDate}
            setEndDate={setEndDate}
          />
          <LoaderContainer isLoading={isSearching} minHeight="120px">
            <div className="has-background-white">
              {searchResult !== undefined ? (
                <TransactionsTable data={searchResult.transactions} />
              ) : null}
            </div>
          </LoaderContainer>
        </PageContainer>
      </div>
    </Layout>
  );
};

export default IndividualLookupPayments;

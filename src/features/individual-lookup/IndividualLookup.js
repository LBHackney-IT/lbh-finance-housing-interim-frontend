import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getTenancy, getTenancyTransactions } from "../../api/Api";
import LoaderContainer from "../common/components/LoaderContainer";
import PageContainer from "../common/components/PageContainer";
import PageHeader from "../common/components/PageHeader";
import { Layout } from "../common/Layout";
import {
  INDIVIDUAL_LOOKUP,
  INDIVIDUAL_LOOKUP_PAYMENTS,
} from "../RouteConstants";
import FindPropertySearchBar from "./components/FindPropertySearchBar";
import PropertySearchResult from "./components/PropertySearchResult";
import "./assets/individuallookup.scss";

const searchOptions = [
  { value: 1, text: "by Rent Account Number" },
  { value: 2, text: "by Tenancy Agreement Reference" },
  { value: 3, text: "by Household Reference" },
];

const IndividualLookup = ({ history }) => {
  // Check for params
  const params = useParams();
  const search = params.search
    ? decodeURIComponent(params.search)
    : params.search;
  const searchId = params.searchId ? parseInt(params.searchId) : 1;

  // State
  const [searchResult, setSearchResult] = useState(undefined);
  const [searchType, setSearchType] = useState(searchId);
  const [isSearching, setIsSearching] = useState(false);

  // Perform search
  useEffect(() => {
    if (search && searchId) {
      // Async search function
      async function PerformSearch(
        tenancyAgreementRef,
        rentAccount,
        householdRef
      ) {
        setIsSearching(true);

        const tenantResult = await getTenancy({
          tenancyAgreementRef,
          rentAccount,
          householdRef,
        });

        const transactionsResult = await getTenancyTransactions({
          tenancyAgreementRef,
          rentAccount,
          householdRef,
        });

        setSearchResult({
          tenant: tenantResult,
          transactions: transactionsResult,
        });

        setIsSearching(false);
      }

      switch (searchId) {
        // Rent account
        case 1: {
          PerformSearch(null, search, null);
          break;
        }
        // Tenancy agreement ref
        case 2: {
          PerformSearch(search, null, null);
          break;
        }
        // Household ref
        case 3: {
          PerformSearch(null, null, search);
          break;
        }
        default: {
          return;
        }
      }
    }
  }, [search, searchId]);

  // Handle property search
  const onPropertySearch = (searchValue) => {
    history.push(
      `${INDIVIDUAL_LOOKUP}/${searchType}/${encodeURIComponent(searchValue)}`
    );
  };

  // On see all payments
  const onSeeAllPayments = () => {
    if (searchResult && searchResult.tenant) {
      history.push(
        `${INDIVIDUAL_LOOKUP_PAYMENTS}/${encodeURIComponent(
          searchResult.tenant.tenancyAgreementRef
        )}`
      );
    }
  };

  return (
    <Layout>
      <PageHeader>Find a property...</PageHeader>
      <PageContainer
        style={isSearching ? { paddingBottom: "50px" } : undefined}
      >
        <div className="find-property-search-cont">
          <FindPropertySearchBar
            searchOptions={searchOptions}
            onClick={onPropertySearch}
            onSearchChange={(option) => {
              setSearchType(option.value);
            }}
            searchType={searchId}
            search={search}
          />
        </div>
      </PageContainer>
      <div>
        <LoaderContainer isLoading={isSearching} minHeight="30vh">
          {searchResult !== undefined ? (
            <>
              <PropertySearchResult
                result={searchResult}
                onSeeAllPayments={onSeeAllPayments}
              />
            </>
          ) : null}
        </LoaderContainer>
      </div>
    </Layout>
  );
};

export default IndividualLookup;

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import PageContainer from "../common/components/PageContainer";
import { Layout } from "../common/Layout";
import { INDIVIDUAL_LOOKUP } from "../RouteConstants";
import FindPropertySearchBar from "./components/FindPropertySearchBar";
import PropertySearchResult from "./components/PropertySearchResult";
import "./individuallookup.scss";

// TODO implement API
const performSearch = (searchType, search) => {
  let result = {
    noResult: false,
    tenant: {
      name: "Kian Hayward",
      address: {
        line1: "15 Marcon Court",
        line2: "Amhurst Rd",
        town: "Hackney",
        city: "London",
        postcode: "E8 1ND",
      },
      contact: {
        phone: "01234 567 890",
        email: "kian.h@temp.com",
      },
    },
    tenancy: {
      tenancyId: "123456789",
      tenancyType: "HRA SEC",
      currentBalance: "1234.56",
    },
    lastTenPayments: [],
    properties: [
      {
        id: 1,
        line1: "15 Marcon Court",
        line2: "Amhurst Rd",
        postcode: "E8 1ND",
        town: "Hackney",
        tenancyType: "HRA SEC",
        currentBalance: "1234.56",
      },
      {
        id: 2,
        line1: "10 Amhurst Rd",
        line2: "",
        postcode: "E8 1ND",
        town: "Hackney",
        tenancyType: "Garage",
        currentBalance: "1234.56",
      },
    ],
  };

  for (let index = 0; index < 10; index++) {
    result.lastTenPayments.push({
      id: index,
      amount: "56.78",
      date: "01/03/2021",
    });
  }

  return searchType && search && search.length > 0 ? result : undefined;
};

const IndividualLookup = ({ history }) => {
  // Check for params
  const params = useParams();
  const search = params.search;
  const searchId = params.searchId ? parseInt(params.searchId) : 1;

  // State
  const [searchResult, setSearchResult] = useState(undefined);
  const [searchType, setSearchType] = useState(searchId);

  useEffect(() => {
    setSearchResult(performSearch(searchId, search));
  }, [search, searchId]);

  // Handle property search
  const onPropertySearch = (searchValue) => {
    history.push(`${INDIVIDUAL_LOOKUP}/${searchType}/${searchValue}`);
  };

  return (
    <Layout>
      <div className="find-a-property-header">
        <PageContainer>
          <h1 className="find-prop-title">Find a property...</h1>
        </PageContainer>
      </div>
      <PageContainer>
        <div className="find-property-search-cont">
          <FindPropertySearchBar
            onClick={onPropertySearch}
            onSearchChange={(option) => {
              setSearchType(option.value);
            }}
            searchType={searchId}
            search={search}
          />
        </div>
      </PageContainer>
      {searchResult !== undefined ? (
        <PageContainer>
          <PropertySearchResult result={searchResult} />
        </PageContainer>
      ) : null}
    </Layout>
  );
};

export default IndividualLookup;

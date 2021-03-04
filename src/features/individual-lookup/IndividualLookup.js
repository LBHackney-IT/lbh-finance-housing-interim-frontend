import { Layout } from "../common/Layout";
import { useState } from "react";
import "./individuallookup.scss";
import PageContainer from "../common/components/PageContainer";
import FindPropertySearchBar from "./components/FindPropertySearchBar";
import PropertySearchResult from "./components/PropertySearchResult";

// TODO implement API
const performSearch = (search) => {
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
        line1: "15 Marcon Court",
        line2: "Amhurst Rd",
        postcode: "E8 1ND",
        town: "Hackney",
        tenancyType: "HRA SEC",
        currentBalance: "1234.56",
      },
      {
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

  return search && search.length > 0 ? result : undefined;
};

const IndividualLookup = () => {
  // State
  const [searchResult, setSearchResult] = useState(undefined);

  // Handle property search
  const onPropertySearch = (searchValue) => {
    setSearchResult(performSearch(searchValue));
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
          <FindPropertySearchBar onClick={onPropertySearch} />
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

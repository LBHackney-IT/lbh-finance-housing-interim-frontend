import React from "react";
import { Layout } from "../common/Layout";
import OperatingBalanceCardList from "./components/OperatingBalanceCardList";
import OperatingBalancesSummary from "./components/OperatingBalancesSummary";
import "./operatingbalances.scss";

// TODO remove
const balanceSummary = {
  grandTotalBalance: 123456000,
  grandTotalBalanceDate: "01/01/2021",
  totalBalance: 12345600,
  totalBalanceDate: "01/01/2021",
  totalArrears: -102240,
  totalArrearsDate: "01/01/2021",
};

// TODO remove
const operatingBalanceNames = [
  "Housing Revenue Account",
  "Leaseholder Service Charges",
  "Housing General Fund",
  "Leaseholder Major Works",
  "Garages And Parking Spaces",
  "Temporary Accomodation General fund",
  "Temporary Accommodation HRA Properties",
  "Travellers Rent Account",
];

// TODO remove
const operatingBalanceCardData = {
  balance: "123,456.00",
  balanceDate: "31/01/2021",
  arrears: "12,345.00",
  csvLink: "www.google.com",
};

const operatingBalanceCards = operatingBalanceNames.map((title, index) => {
  return { ...operatingBalanceCardData, id: index, title };
});

const OperatingBalances = () => {
  return (
    <Layout>
      <OperatingBalancesSummary balanceSummary={balanceSummary} />
      <OperatingBalanceCardList operatingBalanceCards={operatingBalanceCards} />
    </Layout>
  );
};

export default OperatingBalances;

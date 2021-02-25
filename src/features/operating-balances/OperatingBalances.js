import React from "react";
import "./operatingbalances.scss";
import OperatingBalancesSummary from "./components/OperatingBalancesSummary";
import OperatingBalanceCardList from "./components/OperatingBalanceCardList";
import { Layout } from "../common/Layout";

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
const operatingBalanceCards = [
  {
    id: 1,
    title: "Leaseholders",
    balance: "123,456.00",
    balanceDate: "31/01/2021",
    arrears: "12,345.00",
    csvLink: "www.google.com",
  },
  {
    id: 2,
    title: "Rents",
    balance: "123,456.00",
    balanceDate: "31/01/2021",
    arrears: "12,345.00",
    csvLink: "www.google.com",
  },
  {
    id: 3,
    title: "Garages",
    balance: "123,456.00",
    balanceDate: "31/01/2021",
    arrears: "12,345.00",
    csvLink: "www.google.com",
  },
  {
    id: 4,
    title: "Temp Acc",
    balance: "123,456.00",
    balanceDate: "31/01/2021",
    arrears: "12,345.00",
    csvLink: "www.google.com",
  },
  {
    id: 5,
    title: "Repairs",
    balance: "123,456.00",
    balanceDate: "31/01/2021",
    arrears: "12,345.00",
    csvLink: "www.google.com",
  },
  {
    id: 6,
    title: "Major Works",
    balance: "123,456.00",
    balanceDate: "31/01/2021",
    arrears: "12,345.00",
    csvLink: "www.google.com",
  },
];

const OperatingBalances = () => {
  return (
    <Layout>
      <OperatingBalancesSummary balanceSummary={balanceSummary} />
      <OperatingBalanceCardList operatingBalanceCards={operatingBalanceCards} />
    </Layout>
  );
};

export default OperatingBalances;

import React, { useEffect, useState } from "react";
import { getOperatingBalances } from "../../api/Api";
import PageContainer from "../common/components/PageContainer";
import { Layout } from "../common/Layout";
import NumberFormat from "react-number-format";
import "./operatingbalances.scss";
import PageHeader from "../common/components/PageHeader";
import OperatingBalanceSearchBar from "./components/OperatingBalanceSearchBar";
import LoaderContainer from "../common/components/LoaderContainer";

const OperatingBalances = () => {
  const [startDate, setStartDate] = useState(new Date(2020, 3, 12));
  const [endDate, setEndDate] = useState(new Date());
  const [opBalanceValues, setOperatingBalances] = useState(undefined);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function getOpBalances() {
      setIsLoading(true);
      var opBalances = await getOperatingBalances(startDate, endDate);
      setOperatingBalances(opBalances);
      setIsLoading(false);
    }
    getOpBalances();
  }, [startDate, endDate]);

  return (
    <Layout>
      <PageHeader>Operating Balance</PageHeader>
      <PageContainer>
        <div className="operating-balance-search-cont">
          <OperatingBalanceSearchBar
            startDate={startDate}
            setStartDate={setStartDate}
            endDate={endDate}
            setEndDate={setEndDate}
          />
        </div>
        <LoaderContainer isLoading={isLoading} minHeight="150px">
          <table
            className="table mb-5 operating-balances-table"
            style={{ width: "100%", marginTop: "25px" }}
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
                  <strong>Balance</strong>
                </th>
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
                          value={operatingBalanceItem.totalRentDue}
                          displayType={"text"}
                          thousandSeparator={true}
                          prefix={"£"}
                        />
                      </td>
                      <td className="has-text-right">
                        <NumberFormat
                          value={operatingBalanceItem.totalRentPaid}
                          displayType={"text"}
                          thousandSeparator={true}
                          prefix={"£"}
                        />
                      </td>
                      <td className="has-text-right">
                        <NumberFormat
                          value={operatingBalanceItem.balance}
                          displayType={"text"}
                          thousandSeparator={true}
                          prefix={"£"}
                        />
                      </td>
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
      {/* <OperatingBalancesSummary balanceSummary={balanceSummary} />
      <OperatingBalanceCardList operatingBalanceCards={operatingBalanceCards} /> */}
    </Layout>
  );
};

export default OperatingBalances;

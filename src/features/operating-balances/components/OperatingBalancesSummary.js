import PageContainer from "../../common/components/PageContainer";
import PriceSummary from "./PriceSummary";

const OperatingBalancesSummary = ({ balanceSummary }) => {
  return (
    <div className="operating-balances-summary">
      <PageContainer>
        <div className="columns">
          <div className="column is-8">
            <PriceSummary price="1,111,111.00" subtitle="Total Charges YTD" />
            <PriceSummary price="1,111,111.00" subtitle="Total Payments YTD" />
            <PriceSummary
              price="123,456.00"
              subtitle="Total Arrears YTD"
              colour="#d9533c"
            />
          </div>
          <div className="column is-4">
            <PriceSummary
              price="123,456.00"
              subtitle="Grand Total Arrears"
              colour="#d9533c"
            />
          </div>
        </div>
      </PageContainer>
    </div>
  );
};

export default OperatingBalancesSummary;

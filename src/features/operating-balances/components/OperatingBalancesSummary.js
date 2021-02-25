import PageContainer from "../../common/components/PageContainer";
import PriceSummary from "./PriceSummary";

const OperatingBalancesSummary = ({ balanceSummary }) => {
  return (
    <div className="operating-balances-summary">
      <PageContainer>
        <PriceSummary
          price="1,234,567.00"
          subtitle="Grand Total Balance 31/01/2021"
          size="1"
        />
        <PriceSummary
          price="1,111,111.00"
          subtitle="Total Balance 31/01/2021"
        />
        <PriceSummary
          price="123,456.00"
          subtitle="Total Arrears 31/01/2021"
          colour="#d9533c"
        />
      </PageContainer>
    </div>
  );
};

export default OperatingBalancesSummary;

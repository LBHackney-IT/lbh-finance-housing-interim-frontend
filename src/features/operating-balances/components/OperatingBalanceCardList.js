import PageContainer from "../../common/components/PageContainer";
import OperatingBalanceCard from "./OperatingBalanceCard";

const OperatingBalanceCardList = ({ operatingBalanceCards }) => {
  // Handle CSV download click
  const onCsvClick = (link) => {
    alert("OperatingBalanceCard clicked " + link);
  };

  return (
    <PageContainer style={{ paddingTop: 0, marginTop: "-45px" }}>
      <div className="operating-balance-card-list">
        <div className="columns is-vcentered is-multiline">
          {operatingBalanceCards.map((card) => {
            return (
              <div key={card.id} className="column is-4">
                <OperatingBalanceCard
                  cardData={card}
                  handleCsvLink={onCsvClick}
                />
              </div>
            );
          })}
        </div>
      </div>
    </PageContainer>
  );
};

export default OperatingBalanceCardList;

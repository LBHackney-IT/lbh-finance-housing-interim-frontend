import { Button } from "../../common/components/Button";
import Card from "../../common/components/Card";
import { DownloadIcon } from "../../common/components/Icons";

const OperatingBalanceCard = ({ cardData, handleCsvLink }) => {
  const { title, balance, balanceDate, arrears, csvLink } = cardData;

  // Process the CSV link click
  const csvLinkClick = () => {
    handleCsvLink(csvLink);
  };

  return (
    <Card className="has-text-centered tile is-child">
      <header>
        <h5 className="is-size-5 mb-3">
          <strong>{title}</strong>
        </h5>
      </header>
      <section>
        <p>£{balance}</p>
        <p className="pending-item mb-3">Balance&nbsp;{balanceDate}</p>
        <p className="error-item">-£{arrears}</p>
        <p className="pending-item mb-3">Arrears</p>
      </section>
      <footer>
        <Button
          Icon={DownloadIcon}
          onClick={csvLinkClick}
          data-csvLink={csvLink}
        >
          CSV
        </Button>
      </footer>
    </Card>
  );
};

export default OperatingBalanceCard;

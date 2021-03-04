import Card from "../../common/components/Card";
import {
  BalanceIcon,
  LocationIcon,
  TenantHomeIcon,
} from "../../common/components/Icons";

const PropertyDetailRowEntry = ({ Icon, header, subtext }) => {
  return (
    <>
      <div className="property-icon-cont">
        <Icon />
      </div>
      <div>
        <div className="detail-text">{header}</div>
        <div className="detail-text">{subtext}</div>
      </div>
    </>
  );
};

const PropertyDetailRow = ({ property }) => {
  const { postcode, town, tenancyType, currentBalance } = property;
  return (
    <div className="columns is-vcentered">
      <div className="column property-detail-column">
        <PropertyDetailRowEntry
          Icon={LocationIcon}
          header={postcode}
          subtext={town}
        />
      </div>
      <div className="column property-detail-column">
        <PropertyDetailRowEntry
          Icon={TenantHomeIcon}
          header={tenancyType}
          subtext="Tenancy Type"
        />
      </div>
      <div className="column property-detail-column">
        <PropertyDetailRowEntry
          Icon={BalanceIcon}
          header={<span className="pending-item">£{currentBalance}</span>}
          subtext={<strong className="pending-item">Current Balance</strong>}
        />
      </div>
      <div className="column is-2"></div>
    </div>
  );
};

const SearchResultPropertyCard = ({ property }) => {
  return (
    <Card className="property-card">
      <h1 className="property-title">
        <span className="address-part">{property.line1}</span>
        <span>{property.line2}</span>
      </h1>
      <PropertyDetailRow property={property} />
    </Card>
  );
};

export default SearchResultPropertyCard;

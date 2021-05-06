import {
  LocationIcon,
  ContactDetailsIcon,
  TenantIcon,
  TenantHomeIcon,
  BalanceIcon,
} from "../../common/components/Icons";

const TenantDetailEntry = ({ Icon, text, className = "is-3" }) => {
  return (
    <div className={className + " tenant-detail-entry"}>
      <div className="icon-cont">
        <Icon />
      </div>
      <div className="tenant-detail-text">{text}</div>
    </div>
  );
};

const TenantDetailList = ({ address, contact, tenancy }) => {
  return (
    <div className="columns entry-list">
      <div className="column is-3">
        <TenantDetailEntry
          Icon={LocationIcon}
          text={
            <>
              <div className="address-part">{address.line1}</div>
              <div className="address-part">{address.line2}</div>
              <div className="address-part">{address.town}</div>
              <div>{`${address.city} ${address.postcode}`}</div>
            </>
          }
        />
      </div>
      <div className="column is-3">
        <TenantDetailEntry
          Icon={ContactDetailsIcon}
          text={
            <>
              <div>{contact.phone}</div>
              <div>{contact.email}</div>
            </>
          }
        />
        <TenantDetailEntry
          Icon={TenantIcon}
          text={
            <>
              <div>{tenancy.tenancyId}</div>
              <div>
                <strong>Tenancy ID</strong>
              </div>
            </>
          }
        />
      </div>
      <div className="column is-3">
        <TenantDetailEntry
          Icon={TenantHomeIcon}
          text={
            <>
              <div>{tenancy.tenancyType}</div>
              <div>
                <strong>Tenancy Type</strong>
              </div>
            </>
          }
        />
        <TenantDetailEntry
          Icon={BalanceIcon}
          text={
            <span className="pending-item">
              <div>£{tenancy.currentBalance}</div>
              <div>
                <strong className="pending-item">Current Balance</strong>
              </div>
            </span>
          }
        />
      </div>
    </div>
  );
};

export default TenantDetailList;

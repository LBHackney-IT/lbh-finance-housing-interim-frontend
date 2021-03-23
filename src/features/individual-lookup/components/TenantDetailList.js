import {
  LocationIcon,
  ContactDetailsIcon,
  TenantIcon,
  TenantHomeIcon,
  BalanceIcon,
} from "../../common/components/Icons";

const TenantDetailEntry = ({ Icon, text, columnSize = "is-3" }) => {
  return (
    <div className={columnSize + " column tenant-detail-entry"}>
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
      <div className="column is-3">
        <TenantDetailEntry
          columnSize="is-12"
          Icon={ContactDetailsIcon}
          text={
            <>
              <div>{contact.phone}</div>
              <div>{contact.email}</div>
            </>
          }
        />
        <TenantDetailEntry
          columnSize="is-12"
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
          columnSize="is-12"
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
          columnSize="is-12"
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

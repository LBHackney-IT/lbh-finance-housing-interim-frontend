import {
  LocationIcon,
  ContactDetailsIcon,
  TenantIcon,
  TenantHomeIcon,
  BalanceIcon,
} from "../../common/components/Icons";

const TenantDetailEntry = ({ Icon, text }) => {
  return (
    <div className="tenant-detail-entry">
      <div className="icon-cont">
        <Icon />
      </div>
      <div className="tenant-detail-text">{text}</div>
    </div>
  );
};

const TenantDetailList = ({ address, contact, tenancy }) => {
  return (
    <div className="entry-list">
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
  );
};

export default TenantDetailList;

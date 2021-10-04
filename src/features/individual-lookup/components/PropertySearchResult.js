import PageContainer from "../../common/components/PageContainer";
import TenantDetailList from "./TenantDetailList";
import TransactionsTable from "./TransactionsTable";

const PropertySearchResult = ({ result, onSeeAllPayments = () => {} }) => {
  const { tenant = {}, transactions } = result;
  const address = {
    line1: tenant.address1,
    line2: tenant.address2,
    town: "TODO API",
    postcode: tenant.postCode,
    city: "TODO API",
  };
  const contact = { phone: tenant.telephone, email: tenant.email };
  const tenancy = {
    tenancyId: tenant.tenancyAgreementRef,
    tenancyType: "TODO API",
    currentBalance: tenant.currentBalance,
  };

  const tenantDetails = { name: `${tenant.forename} ${tenant.surname}` };

  return (
    <>
      <PageContainer>
        <h1 className="mb-5 lookup-result-header">{tenantDetails.name}</h1>
        <div className="tenant-details">
          <TenantDetailList
            address={address}
            contact={contact}
            tenancy={tenancy}
          />
        </div>
      </PageContainer>
      <TransactionsTable
        data={transactions}
        onSeeAllPayments={onSeeAllPayments}
      />
      {/* <PageContainer>
        <div className="result-property-cards">
          <h1 className="lookup-result-header mb-5">Properties</h1>
          {properties.map((property) => {
            return (
              <SearchResultPropertyCard key={property.id} property={property} />
            );
          })}
        </div>
      </PageContainer> */}
    </>
  );
};

export default PropertySearchResult;

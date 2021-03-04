import Card from "../../common/components/Card";
import { HorizontalDivider } from "../../common/components/Divider";
import SearchResultPropertyCard from "./SearchResultPropertyCard";
import TenantDetailList from "./TenantDetailList";

// let result = {
//     noResult: false,
//     tenant: {
//       name: "Kian Hayward",
//       address: {
//         line1: "15 Marcon Court",
//         line2: "Amhurst Rd",
//         town: "Hackney",
//         city: "London",
//         postcode: "E8 1ND",
//       },
//       contact: {
//         phone: "01234 567 890",
//         email: "kian.h@temp.com",
//       },
//     },
//     tenancy: {
//       tenancyId: "123456789",
//       tenancyType: "HRA SEC",
//       currentBalance: "1234.56",
//     },
//     lastTenPayments: [],
//     properties: [
//       {
//         address: {
//           line1: "15 Marcon Court",
//           line2: "Amhurst Rd",
//           postcode: "E8 1ND",
//           tenancyType: "HRA SEC",
//           currentBalance: "1234.56",
//         },
//       },
//       {
//         address: {
//           line1: "10 Amhurst Rd",
//           line2: "",
//           postcode: "E8 1ND",
//           tenancyType: "Garage",
//           currentBalance: "1234.56",
//         },
//       },
//     ],
//   };

const PropertySearchResult = ({ result }) => {
  const { tenant, tenancy, lastTenPayments, properties } = result;
  const { address, contact } = tenant;
  return (
    <div>
      <div className="columns">
        <div className="column is-5">
          <h1 className="mb-3 lookup-result-header">{tenant.name}</h1>
          <Card className="tenant-details">
            <TenantDetailList
              address={address}
              contact={contact}
              tenancy={tenancy}
            />
          </Card>
        </div>
        <div className="column is-7">
          <h1 className="lookup-result-header mb-3">{tenant.name}</h1>
          <div className="last-10-payments-list">
            {lastTenPayments.map((payment) => {
              return (
                <>
                  <div key={payment.id} className="level">
                    <div className="level-item level-left">
                      £{payment.amount}
                    </div>
                    <div className="level-item level-right">
                      <strong>{payment.date}</strong>
                    </div>
                  </div>
                  <HorizontalDivider />
                </>
              );
            })}
          </div>
        </div>
      </div>
      <div className="result-property-cards">
        <h1 className="lookup-result-header mb-5">Properties</h1>
        {properties.map((property) => {
          return <SearchResultPropertyCard property={property} />;
        })}
      </div>
    </div>
  );
};

export default PropertySearchResult;

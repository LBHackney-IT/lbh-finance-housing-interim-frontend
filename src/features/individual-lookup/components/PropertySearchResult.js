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
  const { tenant, tenancy, lastTenPayments } = result;
  const { address, contact } = tenant;
  return (
    <div>
      <div className="columns">
        <div className="column is-5">
          <h1 className="is-size-5 mb-3">{tenant.name}</h1>
          <div className="tenant-details card box">
            <TenantDetailList
              address={address}
              contact={contact}
              tenancy={tenancy}
            />
          </div>
        </div>
        <div className="column is-7">
          <h1 className="is-size-5 mb-3">{tenant.name}</h1>
          <div className="last-10-payments-list">
            {lastTenPayments.map((payment) => {
              return (
                <div key={payment.id} className="level">
                  <div className="level-item level-left">£{payment.amount}</div>
                  <div className="level-item level-right">{payment.date}</div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertySearchResult;

import axios from "axios";
import { format } from "date-fns";

//const baseUrl = "https://5nyly4gqb3.execute-api.eu-west-2.amazonaws.com/api/v1";
const baseUrl = "https://localhost:44341/api/v1";

async function getOperatingBalances(startDate, endDate) {
  const config = {
    params: {
      startDate: format(startDate, "yyyy/MM/dd"),
      endDate: format(endDate, "yyyy/MM/dd"),
    },
  };
  var result = await axios
    .get(`${baseUrl}/OperatingBalance/`, config)
    .then((res) => {
      return res.data;
    })
    .catch((error) => {
      alert(error);
      console.log(error);
    });

  return result;
}

async function getTenancy(tenancyAgreementRef, rentAccount, householdRef) {
  const config = {
    params: {
      tenancyAgreementRef,
      rentAccount,
      householdRef,
    },
  };

  var result = await axios
    .get(`${baseUrl}/Tenancy/`, config)
    .then((res) => {
      return res.data;
    })
    .catch((error) => {
      alert(error);
      console.log(error);
    });

  return result;
}

async function getTenancyTransactions(
  tenancyAgreementRef,
  rentAccount,
  householdRef,
  count = 5
) {
  const config = {
    params: {
      tenancyAgreementRef,
      rentAccount,
      householdRef,
      count,
    },
  };

  var result = await axios
    .get(`${baseUrl}/Tenancy/transaction`, config)
    .then((res) => {
      return res.data;
    })
    .catch((error) => {
      alert(error);
      console.log(error);
    });

  return result;
}

export { getOperatingBalances, getTenancy, getTenancyTransactions };

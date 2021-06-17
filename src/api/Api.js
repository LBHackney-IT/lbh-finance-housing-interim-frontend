import axios from "axios";
import { format } from "date-fns";

//const baseUrl = "https://5nyly4gqb3.execute-api.eu-west-2.amazonaws.com/api/v1";
//const baseUrl = "https://localhost:44341/api/v1";
const baseUrl = "https://localhost:44341/api/v1";
const API_KEY = "Jne1LB5BWE3Lnlh4EHLM7xGANmM8jvq7QBxACiX1";

async function getOperatingBalances(
  startDate,
  endDate,
  startYearNo,
  endYearNo,
  startWeekNo,
  endWeekNo
) {
  const config = {
    params: {
      startDate: startDate ? format(startDate, "yyyy/MM/dd") : null,
      endDate: endDate ? format(endDate, "yyyy/MM/dd") : null,
      startWeek: startWeekNo,
      startYear: startYearNo,
      endWeek: endWeekNo,
      endYear: endYearNo,
    },
    headers: {
      "x-api-key": API_KEY,
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
    headers: {
      "x-api-key": API_KEY,
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
    headers: {
      "x-api-key": API_KEY,
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

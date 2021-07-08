import axios from 'axios';
import { format } from 'date-fns';

//const baseURL = "https://5nyly4gqb3.execute-api.eu-west-2.amazonaws.com/api/v1";
//const baseURL = "https://localhost:44341/api/v1";
const baseURL = 'https://localhost:44341/api/v1';
const API_KEY = 'Jne1LB5BWE3Lnlh4EHLM7xGANmM8jvq7QBxACiX1';

const instance = axios.create({
  baseURL,
  headers: {
    'x-api-key': API_KEY,
    Authorization: localStorage.getItem('token'),
  },
});

const handleError = (error) => {
  alert(error);
  console.log(error);
};

const getToken = async (googleToken) => {
  const config = { params: { token: googleToken } };

  try {
    const { data } = await instance.get('endpoint', config);

    localStorage.setItem('token', data);
    instance.defaults.headers.common['Authorization'] = data;
  } catch (error) {
    handleError(error);
  }
};

const getOperatingBalances = async (params) => {
  const {
    startDate,
    endDate,
    startYearNo,
    endYearNo,
    startWeekNo,
    endWeekNo,
  } = params;

  const config = {
    params: {
      startDate: startDate ? format(startDate, 'yyyy/MM/dd') : null,
      endDate: endDate ? format(endDate, 'yyyy/MM/dd') : null,
      startWeek: startWeekNo,
      startYear: startYearNo,
      endWeek: endWeekNo,
      endYear: endYearNo,
    },
  };

  try {
    const { data } = await instance.get('/OperatingBalance/', config);
    return data;
  } catch (error) {
    handleError(error);
  }
};

const getTenancy = async (params) => {
  const {
    tenancyAgreementRef,
    rentAccount = null,
    householdRef = null,
  } = params;

  const config = {
    params: {
      tenancyAgreementRef,
      rentAccount,
      householdRef,
    },
  };

  try {
    const { data } = await instance.get('/Tenancy/', config);
    return data;
  } catch (error) {
    handleError(error);
  }
};

const getTenancyTransactions = async (params) => {
  const {
    tenancyAgreementRef,
    rentAccount = null,
    householdRef = null,
    count = 5,
  } = params;

  const config = {
    params: {
      tenancyAgreementRef,
      rentAccount,
      householdRef,
      count,
    },
  };

  try {
    const { data } = instance.get('/Tenancy/transaction', config);
    return data;
  } catch (error) {
    handleError(error);
  }
};

export { getToken, getOperatingBalances, getTenancy, getTenancyTransactions };

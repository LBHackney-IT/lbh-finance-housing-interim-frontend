import axios from 'axios'
import Cookies from 'js-cookie'
import { format } from 'date-fns'
import * as API_URLS from '../references/ApiConstants'

const date_format = 'yyyy-MM-dd'

const instance = axios.create({
  baseURL: API_URLS.API_URL,
  headers: {
    'x-api-key': API_URLS.API_KEY,
    Authorization: `Bearer ${Cookies.get('hackneyToken')}`,
  },
}) // CONST

const requestCall = async (url, config) => {
  try {
    const { data } = await instance.get(url, config)
    return data
  } catch (error) {
    console.log(error)
    // return {
    //   code: error.code,
    //   message: error.message,
    //   url: url,
    //   config: config,
    // }
  }
} // CONST FUNC

const getOperatingBalances = async params => {
  const { startDate, endDate, startYearNo, endYearNo, startWeekNo, endWeekNo } = params
  return requestCall(API_URLS.OPERATING_BALANCE, {
    params: {
      startDate: startDate ? format(startDate, date_format) : null,
      endDate: endDate ? format(endDate, date_format) : null,
      startWeek: startWeekNo,
      startYear: startYearNo,
      endWeek: endWeekNo,
      endYear: endYearNo,
    },
  })
} // CONST FUNC

const getBatchLog = async () => {
  return requestCall(API_URLS.BATCH__ERRORS)
} // CONST FUNC

const getTenancySummary = async ({ startDate, endDate }) => {
  return requestCall(API_URLS.TENANCY__SUMMARY, {
    params: {
      startDate: startDate && format(startDate, date_format),
      endDate: endDate && format(endDate, date_format),
    }
  })
} // CONST FUNC

const getTenancy = async params => {
  const { tenancyAgreementRef, rentAccount = null, householdRef = null } = params
  return requestCall(API_URLS.TENANCY, {
    params: {
      tenancyAgreementRef,
      rentAccount,
      householdRef
    },
  })
} // CONST FUNC

const getTenancyTransactions = async params => {
  const { tenancyAgreementRef, rentAccount = null, householdRef = null, count = 5 } = params
  return requestCall(API_URLS.TENANCY__TRANSACTION, {
    params: {
      tenancyAgreementRef,
      rentAccount,
      householdRef,
      count
    }
  })
} // CONST FUNC

const getReportCharges = async params => {
  const { year = 2022, rentGroup, group } = params
  return requestCall(API_URLS.REPORT__CHARGES, {
    params: {
      year: Number(year),
      rentGroup, // rentgroup / All Rentgroups / LH / Rent
      group,
    }
  })
}

const getReportCashImport = async params => {
  const { startDate, endDate } = params
  return requestCall(API_URLS.REPORT__CASH_IMPORT, {
    params: {
      startDate: startDate ? format(startDate, date_format) : null,
      endDate: endDate ? format(endDate, date_format) : null,
    }
  })
}

const getReportCashSuspense = async params => {
  const { year = 2022, suspenseAccountType } = params
  return requestCall(API_URLS.REPORT__CASH__SUSPENSE, {
    params: {
      year: Number(year), // 2020 / 2021 / 2022
      suspenseAccountType, // Rent / Leasehold / Housing Benefit
    }
  })
}

const getReportBalance = async params => {
  const { rentGroup, reportDate } = params
  return requestCall(API_URLS.REPORT__BALANCE, {
    params: {
      rentGroup: rentGroup,
      reportDate: reportDate ? format(reportDate, date_format) : null,
    }
  })
}

export {
  getOperatingBalances,
  getBatchLog,
  getTenancySummary,
  getTenancy,
  getTenancyTransactions,
  getReportCharges,
  getReportCashImport,
  getReportCashSuspense,
  getReportBalance,
}
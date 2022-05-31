const URLS = {
  development: 'https://prmbiqp252.execute-api.eu-west-2.amazonaws.com/development/api/v1',
  staging: 'https://wk623vt63g.execute-api.eu-west-2.amazonaws.com/staging/api/v1',
  production: 'https://ebedbh115d.execute-api.eu-west-2.amazonaws.com/production/api/v1',
}
const API_KEY = 'Jne1LB5BWE3Lnlh4EHLM7xGANmM8jvq7QBxACiX1'
const API_URL = URLS.development

const OPERATING_BALANCE = '/operatingbalance'
const TENANCY = '/tenancy'
const TENANCY__TRANSACTION = '/tenancy/transaction'
const TENANCY__SUMMARY = '/transaction/summary'
const BATCH__ERRORS = '/batch/errors'
const REPORT__CHARGES = '/report/charges'
const REPORT__CASH__SUSPENSE = '/report/cash/suspense'
const REPORT__CASH_IMPORT = '/report/cash/import'
const REPORT__BALANCE = '/report/balance'

export {
  API_KEY,
  API_URL,
  OPERATING_BALANCE,
  TENANCY,
  TENANCY__TRANSACTION,
  TENANCY__SUMMARY,
  BATCH__ERRORS,
  REPORT__CHARGES,
  REPORT__CASH_IMPORT,
  REPORT__CASH__SUSPENSE,
  REPORT__BALANCE,
}
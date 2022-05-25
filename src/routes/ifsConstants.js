const Titles = {
  Reports: 'Reports',
  ReportsAccountBalance: 'Report - Account Balance',
  ReportsCash: 'Report - Cash',
  ReportsSuspenseAccounts: 'Report - Suspense Accounts',
  ReportCharges: 'Report - Charges',
  OperatingBalances: 'Operating Balances',
  Login: 'Sign in',
  Homepage: 'Hackney Housing Finance',

}

const TextRef = {
  Search: 'Search',
  Searching: 'Searching...',
  NothingFound: 'No data was found.',
  StartLabel: 'Start:',
  EndLabel: 'End:',
  SignInButton: 'Sign in with Google',
  Login: 'Sign in',
  Logout: 'Sign out',
}

const rentGroupOptions = [
  { value: '', text: 'Select Account Type' },
  { value: 'Rent', text: 'Rent' },
  { value: 'Leasehold', text: 'Leasehold' },
  { value: 'Housing Benefit', text: 'Housing Benefit' },
]

const ReportAccountBalance_rentGroupOptions = [
  { value: '', text: 'Select Rent Group' },
  { value: 'GPS', text: 'Gar & Park HRA' },
  { value: 'HGF', text: 'Housing Gen Fund' },
  { value: 'HRA', text: 'Housing Revenue' },
  { value: 'LMW', text: 'LH Major Works ' },
  { value: 'LSC', text: 'LH Serv Charges' },
  { value: 'TAG', text: 'Temp Acc Gen Fun' },
  { value: 'TAH', text: 'Temp Accom HRA' },
  { value: 'TRA', text: 'Travel Gen Fund' },
]

const ReportAccountBalance_groupOptions = [
  { value: '', text: 'Select Group' },
  { value: 'LH', text: 'Leasehold' },
  { value: 'RENT', text: 'Rent' },
]

const IndividualLookupSearchOptions = [
  { value: 'rentAccount', text: 'by Rent Account Number' },
  { value: 'tenancyAgreementRef', text: 'by Tenancy Agreement Reference' },
  { value: 'householdRef', text: 'by Household Reference' },
]

export {
  Titles,
  TextRef,
  rentGroupOptions,
  ReportAccountBalance_rentGroupOptions,
  ReportAccountBalance_groupOptions,
  IndividualLookupSearchOptions,
}
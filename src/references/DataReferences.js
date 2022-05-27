const DataReferences = {
  ReportSuspenseAccounts: [
    // { title: 'Rent Account', sort: 'originalRentAccount', classes: '' },
    // { title: 'Account Type', sort: 'suspenseAccountType', classes: '' },
    // { title: 'Amount', sort: 'transactionAmount', classes: ' govuk-table__cell--numeric'},
    // { title: 'Date', sort: 'transactionDate', classes: ' govuk-table__cell--numeric'},
    // { title: 'Type', sort: 'transactionType', classes: '' },
    { title: 'Reference', sort: 'rentReference', classes: '', format: '' },
    { title: 'Date', sort: 'transactionDate', classes: ' govuk-table__header--numeric', format: 'date' },
    { title: 'Amount', sort: 'transactionAmount', classes: ' govuk-table__header--numeric', format: 'currency' },
    { title: 'Account', sort: 'originalRentAccount', classes: '', format: '' },
    { title: 'Group', sort: 'rentGroup', classes: '', format: '' },
    { title: 'Type', sort: 'transactionType', classes: '', format: '' },
    // { title: 'Description', sort: 'description', classes: '' },
    // { title: 'ID', sort: 'originId', classes: '' },
  ],
  OperatingBalances: [
    { title: 'Service', sort: 'rentGroup', classes: '', format: '' },
    { title: 'Total Charged', sort: 'totalCharged', classes: ' govuk-table__header--numeric', format: 'currency'  },
    { title: 'Total Paid', sort: 'totalPaid', classes: ' govuk-table__cell--numeric', format: 'currency' },
    { title: 'Total Balance', sort: 'totalBalance', classes: ' govuk-table__cell--numeric', format: 'currency' },
  ],
  BatchLog: [
    { title: 'Batch Id', sort: 'batchId', classes: '', format: '' },
    { title: 'Process Name', sort: 'processName', classes: '', format: '' },
    { title: 'Start Time', sort: 'startTime', classes: '', format: 'date' },
    { title: 'End Time', sort: 'endTime', classes: '', format: 'date' },
    { title: '', sort: 'toggle', classes: '', format: '' }
  ],
  ReportCash: [
    { title: 'Rent Group', sort: 'rentGroup', classes: '' },
    { title: 'Total Charged', sort: 'totalCharged', classes: ' govuk-table__header--numeric' },
    { title: 'Total Paid', sort: 'totalPaid', classes: ' govuk-table__cell--numeric'},
    { title: 'Total Balance', sort: 'totalBalance', classes: ' govuk-table__header--numeric' },
    { title: 'Charged YTD', sort: 'chargedYTD', classes: ' govuk-table__cell--numeric'},
    { title: 'Paid YTD', sort: 'paidYTD', classes: ' govuk-table__cell--numeric'},
    { title: 'Arrears YTD', sort: 'arrearsYTD', classes: ' govuk-table__cell--numeric'},
  ],
  IndividualLookup: [
    { title: 'Week Beginning', sort: 'weekBeginning', classes: '' },
    { title: 'Charge', sort: 'totalCharged', classes: ' govuk-table__header--numeric' },
    { title: 'Paid', sort: 'totalPaid', classes: ' govuk-table__header--numeric' },
    { title: 'HB Cont.', sort: 'totalHB', classes: ' govuk-table__header--numeric' },
    { title: 'Balance', sort: 'weekBalance', classes: ' govuk-table__header--numeric' },
  ],
  ReportCharges: [
    { title: 'Months', sort: '', classes: '' },
    { title: 'Rent Account', sort: 'RentAccount', classes: '' },
    { title: 'End of Tenancy', sort: 'EndOfTenancy', classes: '' },
    { title: 'Type', sort: 'RentGroup', classes: '' },
  ],
  ReportAccountBalance: [
    { title: 'Weeks / Months', sort: '', classes: '' },
    { title: 'Rent Account', sort: 'RentAccount', classes: '' },
    { title: 'End of Tenancy', sort: 'EndOfTenancy', classes: '' },
    { title: 'Type', sort: 'RentGroup', classes: '' },
  ],
  ReportCashImport: [
    { title: 'Date', sort: 'date', classes: '', format: 'date' },
    { title: 'Total Import file (civicapay)', sort: 'totalImport', classes: '', format: 'currency' },
    { title: 'GPS', sort: 'gps', classes: '', format: 'currency' },
    { title: 'HGF', sort: 'hgf', classes: '', format: 'currency' },
    { title: 'HRA', sort: 'hra', classes: '', format: 'currency' },
    { title: 'LMW', sort: 'lmw', classes: '', format: 'currency' },
    { title: 'LSC', sort: 'lsc', classes: '', format: 'currency' },
    { title: 'TAG', sort: 'tag', classes: '', format: 'currency' },
    { title: 'TAH', sort: 'tah', classes: '', format: 'currency' },
    { title: 'TRA', sort: 'tra', classes: '', format: 'currency' },
    { title: 'Suspense (ZZZZZZ)', sort: 'zzzzzz', classes: '', format: 'currency' },
    { title: 'Suspense (SSSSSS)', sort: 'ssssss', classes: '', format: 'currency' },
  ]
}
export {
  DataReferences
}
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
  ReportChargesWeeks: [
    { title: 'Rent Account', sort: 'RentAccount', classes: '' },
    { title: 'End of Tenancy', sort: 'EndOfTenancy', classes: '' },
    { title: 'Type', sort: 'RentGroup', classes: '' },
    { title: 'Week 1',  sort: 1, classes: '' },
    { title: 'Week 2',  sort: 2, classes: '' },
    { title: 'Week 3',  sort: 3, classes: '' },
    { title: 'Week 4',  sort: 4, classes: '' },
    { title: 'Week 5',  sort: 5, classes: '' },
    { title: 'Week 6',  sort: 6, classes: '' },
    { title: 'Week 7',  sort: 7, classes: '' },
    { title: 'Week 8',  sort: 8, classes: '' },
    { title: 'Week 9',  sort: 9, classes: '' },
    { title: 'Week 10',  sort: 10, classes: '' },
    { title: 'Week 11',  sort: 11, classes: '' },
    { title: 'Week 12',  sort: 12, classes: '' },
    { title: 'Week 13',  sort: 13, classes: '' },
    { title: 'Week 14',  sort: 14, classes: '' },
    { title: 'Week 15',  sort: 15, classes: '' },
    { title: 'Week 16',  sort: 16, classes: '' },
    { title: 'Week 17',  sort: 17, classes: '' },
    { title: 'Week 18',  sort: 18, classes: '' },
    { title: 'Week 19',  sort: 19, classes: '' },
    { title: 'Week 20',  sort: 20, classes: '' },
    { title: 'Week 21',  sort: 21, classes: '' },
    { title: 'Week 22',  sort: 22, classes: '' },
    { title: 'Week 23',  sort: 23, classes: '' },
    { title: 'Week 24',  sort: 24, classes: '' },
    { title: 'Week 25',  sort: 25, classes: '' },
    { title: 'Week 26',  sort: 26, classes: '' },
    { title: 'Week 27',  sort: 27, classes: '' },
    { title: 'Week 28',  sort: 28, classes: '' },
    { title: 'Week 29',  sort: 29, classes: '' },
    { title: 'Week 30',  sort: 30, classes: '' },
    { title: 'Week 31',  sort: 31, classes: '' },
    { title: 'Week 32',  sort: 32, classes: '' },
    { title: 'Week 33',  sort: 33, classes: '' },
    { title: 'Week 34',  sort: 34, classes: '' },
    { title: 'Week 35',  sort: 35, classes: '' },
    { title: 'Week 36',  sort: 36, classes: '' },
    { title: 'Week 37',  sort: 37, classes: '' },
    { title: 'Week 38',  sort: 38, classes: '' },
    { title: 'Week 39',  sort: 39, classes: '' },
    { title: 'Week 40',  sort: 40, classes: '' },
    { title: 'Week 41',  sort: 41, classes: '' },
    { title: 'Week 42',  sort: 42, classes: '' },
    { title: 'Week 43',  sort: 43, classes: '' },
    { title: 'Week 44',  sort: 44, classes: '' },
    { title: 'Week 45',  sort: 45, classes: '' },
    { title: 'Week 46',  sort: 46, classes: '' },
    { title: 'Week 47',  sort: 47, classes: '' },
    { title: 'Week 48',  sort: 48, classes: '' },
    { title: 'Week 49',  sort: 49, classes: '' },
    { title: 'Week 50',  sort: 50, classes: '' },
    { title: 'Week 51',  sort: 51, classes: '' },
    { title: 'Week 52',  sort: 52, classes: '' },
  ],
  ReportChargesMonths: [
    { title: 'Rent Account', sort: 'RentAccount', classes: '' },
    { title: 'End of Tenancy', sort: 'EndOfTenancy', classes: '' },
    { title: 'Type', sort: 'RentGroup', classes: '' },
    { title: 'Jan',  sort: 1, classes: '' },
    { title: 'Feb',  sort: 2, classes: '' },
    { title: 'Mar',  sort: 3, classes: '' },
    { title: 'Apr',  sort: 4, classes: '' },
    { title: 'May',  sort: 5, classes: '' },
    { title: 'Jun',  sort: 6, classes: '' },
    { title: 'Jul',  sort: 7, classes: '' },
    { title: 'Aug',  sort: 8, classes: '' },
    { title: 'Sept',  sort: 9, classes: '' },
    { title: 'Oct',  sort: 10, classes: '' },
    { title: 'Nov',  sort: 11, classes: '' },
    { title: 'Dec', sort: 12, classes: '' },
  ],
  ReportAccountBalance: [
    { title: 'ID', sort: 'id', classes: '', format: '' },
    { title: 'Rent Group', sort: 'rentGroup', classes: '', format: '' },
    { title: 'Report Date', sort: 'reportDate', classes: '', format: 'date' },
    { title: 'Link', sort: 'link', classes: '', format: 'link' },
    { title: 'Start Time', sort: 'startTime', classes: '', format: 'time' },
    { title: 'End Time', sort: 'endTime', classes: '', format: '' },
    { title: 'Status', sort: 'isSuccess', classes: '', format: 'boolean' },
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
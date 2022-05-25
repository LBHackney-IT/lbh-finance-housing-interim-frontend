import React from 'react'

// const arrow = <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M256 294.1L383 167c9.4-9.4 24.6-9.4 33.9 0s9.3 24.6 0 34L273 345c-9.1 9.1-23.7 9.3-33.1.7L95 201.1c-4.7-4.7-7-10.9-7-17s2.3-12.3 7-17c9.4-9.4 24.6-9.4 33.9 0l127.1 127z"></path></svg>

const TableHeads = {
  ReportSuspenseAccounts: [
    // { title: 'Rent Account', sort: 'originalRentAccount', classes: '' },
    // { title: 'Account Type', sort: 'suspenseAccountType', classes: '' },
    // { title: 'Amount', sort: 'transactionAmount', classes: ' govuk-table__cell--numeric'},
    // { title: 'Date', sort: 'transactionDate', classes: ' govuk-table__cell--numeric'},
    // { title: 'Type', sort: 'transactionType', classes: '' },
    { title: 'Description', sort: 'description', classes: '' },
    { title: 'ID', sort: 'originId', classes: '' },
    { title: 'Account', sort: 'originalRentAccount', classes: '' },
    { title: 'Group', sort: 'rentGroup', classes: '' },
    { title: 'Reference', sort: 'rentReference', classes: '' },
    { title: 'Amount', sort: 'transactionAmount', classes: '' },
    { title: 'Date', sort: 'transactionDate', classes: '' },
    { title: 'Type', sort: 'transactionType', classes: '' },
  ],
  OperatingBalances: [
    { title: 'Service', sort: 'rentGroup', classes: '' },
    { title: 'Total Charged', sort: 'totalCharged', classes: ' govuk-table__header--numeric' },
    { title: 'Total Paid', sort: 'totalPaid', classes: ' govuk-table__cell--numeric'},
    { title: 'Total Balance', sort: 'totalBalance', classes: ' govuk-table__cell--numeric'},
  ],
  BatchLog: [
    { title: 'Batch Id', sort: 'batchId', classes: '' },
    { title: 'Process Name', sort: 'processName', classes: '' },
    { title: 'Start Time', sort: 'startTime', classes: '' },
    { title: 'End Time', sort: 'endTime', classes: '' },
    { title: '', sort: 'toggle', classes: '' }
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
    { title: 'Months', sort: '', classes: '' },
    { title: 'Rent Account', sort: 'RentAccount', classes: '' },
    { title: 'End of Tenancy', sort: 'EndOfTenancy', classes: '' },
    { title: 'Type', sort: 'RentGroup', classes: '' },
  ]
}

const TableSort = (sort, data) => {

  if( data === undefined || !data.length ) return false

  const sorted = data.sort((a, b) => {
    if( a[sort.value] < b[sort.value] ) return sort.direction ? -1 : 1
    if( a[sort.value] > b[sort.value] ) return sort.direction ? 1 : -1
    return 0
  })

  return sorted

} // TableSort

const TableHeadHTML = ({ tableHead, sort, onSort }) => {

  const tableHeaders = TableHeads[tableHead] || []

  return <thead className='govuk-table__head'>
    <tr className='govuk-table__row'>
      {tableHeaders.map((val, key) => {
        return <th 
          key={key}
          onClick={e => {
            onSort({ 
              value: e.target.getAttribute('data-sort'), 
              direction: !sort.direction 
            })
          }}
          data-sort={val.sort} 
          scope="col" 
          className={`govuk-table__header${val.classes}`}
        >{val.title} {/* sortConfig.value === val.sort && arrow */}</th>
      })}
    </tr>
  </thead>

} // TableHeadHTML

export {
  TableHeads,
  TableHeadHTML,
  TableSort,
}
import React, { useState } from 'react'
import { getReportCharges } from '../routes/Api'
import { CSVLink } from 'react-csv'
// import { TableSort, TableHeadHTML } from '../templates/Table'
// import { CurrencyFormat, DateFormat } from '../references/Functions'
import * as IFSConstants from '../references/ifsConstants'

const ReportAccountBalance = () => {

  const rentGroupOptions = IFSConstants.ReportAccountBalance_rentGroupOptions
  const groupOptions = IFSConstants.ReportAccountBalance_groupOptions
  const currentYear = new Date().getFullYear()
  const yearOptions = Array(currentYear - (currentYear - 10)).fill('').map((v, k) => currentYear - k)
  
  const [year, setYear] = useState(Number(currentYear))
  const [rentGroup, setRentGroup] = useState('')
  const [group, setGroup] = useState('')
  const [data, setData] = useState(undefined)
  const [searching, setSearching] = useState(false)
  
  const onSearch = async () => {
    setSearching(true)
    const call = await getReportCharges({ year, rentGroup, group })
    setData(call)
    setSearching(false)
  }

  const searchBar = () => {  
    return <>
      <p>
        <select 
          disabled={searching}
          value={year}
          onChange={e => setYear(e.target.value)}
          className="govuk-select lbh-select"
        >{ yearOptions.map(opt => <option key={opt} value={opt}>{opt}</option>) }</select>
      </p>
      
      <p>
        <select 
          disabled={searching}
          value={rentGroup} 
          onChange={e => setRentGroup(e.target.value)}
          className="govuk-select lbh-select"
        >{ rentGroupOptions.map(opt => <option key={opt.value} value={opt.value}>{opt.text}</option>) }</select>
      </p>
      
      <p>
        <select 
          disabled={searching}
          value={group} 
          onChange={e => setGroup(e.target.value)}
          className="govuk-select lbh-select"
        >{ groupOptions.map(opt => <option key={opt.value} value={opt.value}>{opt.text}</option>) }</select>
      </p>
      
      <button onClick={() => onSearch()} className="govuk-button govuk-secondary lbh-button lbh-button--secondary">Search</button>

      { !searching && data !== undefined && data.length && <CSVLink 
        data={data}
        // headers={CSVHeaders}
        className="govuk-button govuk-secondary lbh-button lbh-button--secondary mt-0 ml-auto"
        filename={`report-cash-${new Date().toLocaleString()}.csv`}
      >{IFSConstants.TextRef.ExportCSV}</CSVLink> }


      { data !== undefined && data.length && <CSVLink
        data={data}
        filename={`report-account-balance-${new Date().toLocaleString()}.csv`}
      /> }
    </>
  }

  return <>
    <h1>{IFSConstants.Titles.ReportsAccountBalance}</h1>
    {searchBar()}
  </>

}

export default ReportAccountBalance
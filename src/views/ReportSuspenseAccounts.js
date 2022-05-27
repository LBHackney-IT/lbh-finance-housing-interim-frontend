import React, { useState, useCallback } from 'react'
import { getReportCashSuspense } from '../routes/Api'
import { TableSort, TableHTML } from '../templates/Table'
import { DataReferences } from '../references/DataReferences'
import * as IFSConstants from '../references/ifsConstants'
import { CSVLink } from 'react-csv'

const ReportSuspenseAccounts = () => {

  const Ref = 'ReportSuspenseAccounts'
  const DataRows = DataReferences[Ref]

  const currentYear = new Date().getFullYear()
  const yearOptions = Array(currentYear - 2019).fill('').map((v, k) => currentYear - k)
  const [searching, setSearching] = useState(false)
  const [year, setYear] = useState(currentYear)
  const [rentGroup, setRentGroup] = useState('')
  const [data, setData] = useState(undefined)

  // TABLE HEAD
  const [sort, setSort] = useState({ value: DataRows[0].sort, direction: true })
  const onSort = useCallback(val => { 
    setSort(val)
    const dataSort = TableSort(sort, data)
    if( dataSort !== false ) setData(dataSort)
  }, [sort])
  
  // SEARCH
  const onSearch = async () => {
    setSearching(true)
    const response = await getReportCashSuspense({ year, rentGroup })
    const filtered = response !== undefined && response.length ? response.map(item => {
      let itemOutput = {}
      DataRows.forEach(row => { itemOutput[row.sort] = item[row.sort] })
      return itemOutput
    }) : []
    setData(filtered)
    setSearching(false)
  }

  // Search Bar
  const SearchBar = () => {
    return <div className="find-property-search-bar">
      <div className="govuk-form-group lbh-form-group lbh-search-box">

        <select
          disabled={searching}
          value={year}
          onChange={e => setYear(Number(e.target.value))}
          className="govuk-select lbh-select"
        >{ yearOptions.map(opt => <option key={opt} value={opt}>{opt}</option>) }</select>

        <select 
          disabled={searching}
          value={rentGroup} 
          onChange={e => setRentGroup(e.target.value)}
          className="govuk-select lbh-select"
        >{ IFSConstants.ReportSuspenseAccounts_rentGroupOptions.map(opt => <option key={opt.value} value={opt.value}>{opt.text}</option>) }</select>
      
        <button 
          onClick={() => onSearch()} 
          disabled={searching}
          className="govuk-button govuk-secondary lbh-button lbh-button--secondary"
        >{IFSConstants.TextRef.Search}</button>

        { !searching && data !== undefined && data.length > 0 && <CSVLink 
          data={data}
          // headers={}
          className="govuk-button govuk-secondary lbh-button lbh-button--secondary ml-auto"
          filename={`suspense-account-report-${new Date().toLocaleString()}.csv`}
        >{IFSConstants.TextRef.ExportCSV}</CSVLink> }
      </div>
    </div>
  }

  // Search Results
  const SearchResults = () => {

    if( data === undefined ) return
    if( searching ) return <h4>{IFSConstants.TextRef.Searching}</h4>
    if( !data.length ) return <h4>{IFSConstants.TextRef.NothingFound}</h4>

    return <TableHTML 
      tableHead={Ref}
      sort={sort} 
      onSort={onSort}
      data={data} 
    />

  } //searchResults

  return <>
    <h1>{IFSConstants.Titles.ReportsSuspenseAccounts}</h1>
    <SearchBar />
    <SearchResults />
  </>

}

export default ReportSuspenseAccounts
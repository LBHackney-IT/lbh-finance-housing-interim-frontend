import React, { useState, useCallback } from 'react'
import { getReportBalance } from '../routes/Api'
import { CSVLink } from 'react-csv'
import { TableSort, TableHTML } from '../templates/Table'
import { DataReferences } from '../references/DataReferences'
import * as IFSConstants from '../references/ifsConstants'
import DatePicker from 'react-date-picker'

const ReportAccountBalance = () => {

  const Ref = 'ReportAccountBalance'
  const DataRows = DataReferences[Ref]
  const rentGroupOptions = IFSConstants.ReportAccountBalance_rentGroupOptions
  
  const [date, setDate] = useState(new Date())
  const [rentGroup, setRentGroup] = useState('')
  const [data, setData] = useState(undefined)
  const [searching, setSearching] = useState(false)
  
  // TABLE HEAD
  const [sort, setSort] = useState({ value: DataRows[0].sort, direction: true })
  const onSort = useCallback(val => { 
    setSort(val)
    const dataSort = TableSort(sort, data)
    if( dataSort !== false ) setData(dataSort)
  }, [sort])

  // API CALL
  const onSearch = async () => {
    setSearching(true)
    const call = await getReportBalance({ 
      rentGroup: rentGroup, 
      reportDate: date
    })
    setData(call)
    setSearching(false)
  }

  // if( data ) console.log(data)

  const SearchBar = () => {  

    return <div className="date-range-search-bar">
      <div className="bar-component-cont">
        
        <DatePicker
          disabled={searching}
          clearIcon={null}
          onChange={setDate}
          value={date}
          format="dd-MM-y"
        />

        <select 
          disabled={searching}
          value={rentGroup} 
          onChange={e => setRentGroup(e.target.value)}
          className="govuk-select lbh-select"
        >{ rentGroupOptions.map(opt => <option key={opt.value} value={opt.value}>{opt.text}</option>) }</select>
        
        <button 
          onClick={() => onSearch()} 
          className="govuk-button govuk-secondary lbh-button lbh-button--secondary mt-0"
        >Search</button>

      </div>

      {/* { !searching && data !== undefined && data.length && <CSVLink 
        data={data}
        // headers={CSVHeaders}
        className="govuk-button govuk-secondary lbh-button lbh-button--secondary mt-0 ml-auto"
        filename={`report-account-balance-${new Date().toLocaleString()}.csv`}
      >{IFSConstants.TextRef.ExportCSV}</CSVLink> } */}

    </div>
  }

  const SearchResults = () => {
    
    if( searching ) return <h4>{IFSConstants.TextRef.Searching}</h4>
    if( data === undefined ) return
    if( !data.length ) return <p>{IFSConstants.TextRef.NothingFound}</p>

    return <TableHTML 
      tableHead={Ref}
      sort={sort} 
      onSort={onSort}
      data={data} 
    />

  } // SearchResults

  return <>
    <h1>{IFSConstants.Titles.ReportsAccountBalance}</h1>
    <SearchBar />
    <SearchResults />
  </>

}

export default ReportAccountBalance
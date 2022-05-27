import React, { useState, useCallback } from 'react'
import { getReportCashImport } from '../routes/Api'
import DatePicker from 'react-date-picker'
import { CSVLink } from 'react-csv'
import { MinusYear } from '../references/Functions'
import { TableSort, TableHTML } from '../templates/Table'
import { DataReferences } from '../references/DataReferences'
import * as IFSConstants from '../references/ifsConstants'

const ReportCash = () => {

  const Ref = 'ReportCashImport'
  const DataRows = DataReferences[Ref]
  const CSVHeaders = DataRows.map(row => { return { key: row.sort, label: row.title } })
  const [startDate, setStartDate] = useState(MinusYear)
  const [endDate, setEndDate] = useState(new Date())
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
    const getData = await getReportCashImport({ 
      startDate: startDate,
      endDate: endDate,
    })
    setData(getData)
    setSearching(false)
  }

  if( data !== undefined && data.length ) console.log(data)

  const SearchBar = () => {
    return <div className="date-range-search-bar">
      <div className="bar-component-cont">
        <label className="govuk-label govuk-date-input__label">{IFSConstants.TextRef.StartLabel}</label>
        <DatePicker
          disabled={searching}
          clearIcon={null}
          onChange={setStartDate}
          value={startDate}
          format="dd-MM-y"
        />
        <label className="govuk-label govuk-date-input__label">{IFSConstants.TextRef.EndLabel}</label>
        <DatePicker
          disabled={searching}
          clearIcon={null}
          onChange={setEndDate}
          value={endDate}
          format="dd-MM-y"
        />
        <button 
          onClick={() => onSearch()} 
          disabled={searching}
          className="govuk-button govuk-secondary lbh-button lbh-button--secondary mt-0"
        >{IFSConstants.TextRef.Search}</button>

      </div>

      { !searching && data !== undefined && data.length && <CSVLink 
        data={data}
        headers={CSVHeaders}
        className="govuk-button govuk-secondary lbh-button lbh-button--secondary mt-0 ml-auto"
        filename={`report-cash-${new Date().toLocaleString()}.csv`}
      >{IFSConstants.TextRef.ExportCSV}</CSVLink> }

    </div>
  }

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

  } // searchResults

  return <>
    <h1>Report - Cash</h1>
    <SearchBar />
    <SearchResults />
  </>

}

export default ReportCash
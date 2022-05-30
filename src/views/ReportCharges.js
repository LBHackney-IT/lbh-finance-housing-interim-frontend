import React, { useState, useCallback } from 'react'
import { getReportCharges } from '../routes/Api'
import { TableSort, TableHeadHTML } from '../templates/Table'
import * as IFSConstants from '../references/ifsConstants'
import { CurrencyFormat, DateFormat } from '../references/Functions'
// import { DataReferences } from '../references/DataReferences'
import { CSVLink } from 'react-csv'

const ReportCharges = () => {

  const rentGroupOptions = IFSConstants.ReportCharges_RentGroupOptions
  const groupOptions = IFSConstants.ReportCharges_GroupOptions
  const currentYear = new Date().getFullYear()
  const yearOptions = Array(currentYear - (currentYear - 10)).fill('').map((v, k) => currentYear - k)
  
  const [year, setYear] = useState(Number(currentYear))
  const [rentGroup, setRentGroup] = useState(rentGroupOptions[1].value)
  const [group, setGroup] = useState('')
  const [data, setData] = useState(undefined)
  const [searching, setSearching] = useState(false)

  const Ref = rentGroup !== '' ? 'ReportChargesWeeks' : 'ReportChargesMonths'
  // const DataRows = DataReferences[Ref]
  // const CSVHeaders = DataRows.map(row => { return { key: row.sort, label: row.title } })
  // console.log(CSVHeaders)

  const onSearch = async () => {
    setSearching(true)
    const response = await getReportCharges({ year, rentGroup, group })
    setData(response)
    setSearching(false)
  }

  // TABLE HEAD
  const [sort, setSort] = useState({ value: 'rentGroup', direction: true })
  const onSort = useCallback(val => { 
    setSort(val)
    const dataSort = TableSort(sort, data)
    if( dataSort !== false ) setData(dataSort)
  }, [sort])
  
  const SearchBar = () => {
    return <div className="date-range-search-bar">
      <div className="bar-component-cont">
        <select 
          disabled={searching}
          value={year}
          onChange={e => setYear(e.target.value)}
          className="govuk-select lbh-select"
        >{ yearOptions.map(opt => <option key={opt} value={opt}>{opt}</option>) }</select>

        <select 
          disabled={searching}
          value={rentGroup} 
          onChange={e => {
            setGroup('')
            setRentGroup(e.target.value)
            setData(undefined)
          }}
          className="govuk-select lbh-select"
        >{ rentGroupOptions.map(opt => <option key={opt.value} value={opt.value}>{opt.text}</option>) }</select>

        <select 
          disabled={searching}
          value={group} 
          onChange={e => {
            setRentGroup('')
            setGroup(e.target.value)
            setData(undefined)
          }}
          className="govuk-select lbh-select"
        >{ groupOptions.map(opt => <option key={opt.value} value={opt.value}>{opt.text}</option>) }</select>

        <button 
          onClick={() => onSearch()} 
          disabled={searching}
          className="govuk-button govuk-secondary lbh-button lbh-button--secondary mt-0"
        >{IFSConstants.TextRef.Search}</button>

      </div>

      { !searching && data !== undefined && data.length ? <CSVLink 
        data={data}
        // headers={CSVHeaders}
        className="govuk-button govuk-secondary lbh-button lbh-button--secondary mt-0 ml-auto"
        filename={`report-charges-${new Date().toLocaleString()}.csv`}
      >{IFSConstants.TextRef.ExportCSV}</CSVLink> : '' }

    </div>
  } //searchBar

  const SearchResults = () => {

    if( searching ) return <h4>{IFSConstants.TextRef.Searching}</h4>
    if( data === undefined ) return
    if( !data.length ) return <p>{IFSConstants.TextRef.NothingFound}</p>
    // console.log(data)

    return <div className='table-wrap'>
      <table className='govuk-table lbh-table'>
        <TableHeadHTML
          tableHead={Ref}
          sort={sort} 
          onSort={onSort}
        />
        <tbody className='govuk-table__body'>
        { data.map((data, key) => { 
          return <tr className='govuk-table__row' key={key}>
            <td className='govuk-table__cell'>{data.RentAccount}</td>
            <td className='govuk-table__cell'>{DateFormat(data.EndOfTenancy)}</td>
            <td className='govuk-table__cell'>{data.RentGroup}</td>
            { rentGroup !== '' ? Array.from({ length: 52 }, (_, i) => {
              return <td key={`rentGroup_${i}`} className='govuk-table__cell'>{CurrencyFormat(data[i + 1])}</td>
            } ) : '' }
            { group !== '' ? Array.from({ length: 12 }, (_, i) => {
              return <td key={`group_${i}`} className='govuk-table__cell'>{CurrencyFormat(data[i + 1])}</td>
            }) : '' }
          </tr>
        }) }
        </tbody>
      </table>
    </div>

  } // searchResults

  return <>
    <h1>{IFSConstants.Titles.ReportCharges}</h1>
    <SearchBar />
    <SearchResults />
  </>

}

export default ReportCharges
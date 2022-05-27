import React, { useState, useCallback } from 'react'
import { getReportCharges } from '../routes/Api'
import { TableSort, TableHeadHTML } from '../templates/Table'
import * as IFSConstants from '../references/ifsConstants'
import { DateFormat } from '../references/Functions'

const ReportCharges = () => {

  const rentGroupOptions = IFSConstants.ReportCharges_RentGroupOptions
  const groupOptions = IFSConstants.ReportCharges_GroupOptions
  const currentYear = new Date().getFullYear()
  const yearOptions = Array(currentYear - (currentYear - 10)).fill('').map((v, k) => currentYear - k)
  
  const [year, setYear] = useState(Number(currentYear))
  const [rentGroup, setRentGroup] = useState('')
  const [group, setGroup] = useState('')
  const [data, setData] = useState(undefined)
  const [searching, setSearching] = useState(false)

  const onSearch = async () => {
    setSearching(true)
    const response = await getReportCharges({ year, rentGroup, group })
    setData(response)
    setSearching(false)
  }

  if( data !== undefined && data.length ) console.log(data)

  // TABLE HEAD
  const [sort, setSort] = useState({ value: 'rentGroup', direction: true })
  const onSort = useCallback(val => { 
    setSort(val)
    const dataSort = TableSort(sort, data)
    if( dataSort !== false ) setData(dataSort)
  }, [sort])
  
  const SearchBar = () => {
    return <div className="date-range-search-bar find-property-search-bar">
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
          onChange={e => setRentGroup(e.target.value)}
          className="govuk-select lbh-select"
        >{ rentGroupOptions.map(opt => <option key={opt.value} value={opt.value}>{opt.text}</option>) }</select>

        <select 
          disabled={searching}
          value={group} 
          onChange={e => setGroup(e.target.value)}
          className="govuk-select lbh-select"
        >{ groupOptions.map(opt => <option key={opt.value} value={opt.value}>{opt.text}</option>) }</select>

        <button 
          onClick={() => onSearch()} 
          disabled={searching}
          className="govuk-button govuk-secondary lbh-button lbh-button--secondary"
        >{IFSConstants.TextRef.Search}</button>
      </div>
    </div>
  }

  const SearchResults = () => {

    if( data === undefined ) return
    if( searching ) return <h4>{IFSConstants.TextRef.Searching}</h4>
    if( !data.length ) return <p>{IFSConstants.TextRef.NothingFound}</p>
    
    return <table className='govuk-table lbh-table'>
      <TableHeadHTML
        tableHead={'ReportCharges'}
        sort={sort} 
        onSort={onSort}
      />
      <tbody className='govuk-table__body'>
      { data.map((data, key) => { 
        return <tr className='govuk-table__row' key={key}>
          <td className='govuk-table__cell'>
            Jan: {data[1]}<br />
            Feb: {data[2]}<br />
            Mar: {data[3]}<br />
            Apr: {data[4]}<br />
            May: {data[5]}<br />
            Jun: {data[6]}<br />
            Jul: {data[7]}<br />
            Aug: {data[8]}<br />
            Sept: {data[9]}<br />
            Oct: {data[10]}<br />
            Nov: {data[11]}<br />
            Dec: {data[12]}
          </td>
          <td className='govuk-table__cell'>{data.RentAccount}</td>
          <td className='govuk-table__cell'>{DateFormat(data.EndOfTenancy)}</td>
          <td className='govuk-table__cell'>{data.RentGroup}</td>
        </tr>
      }) }
      </tbody>
    </table>

  } // searchResults

  return <>
    <h1>{IFSConstants.Titles.ReportCharges}</h1>
    <SearchBar />
    <SearchResults />
  </>

}

export default ReportCharges
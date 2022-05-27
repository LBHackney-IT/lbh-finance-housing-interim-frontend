import React, { useState, useCallback, useRef } from 'react'
import { getReportCharges } from '../routes/Api'
import { CSVLink } from 'react-csv'
import { TableSort, TableHeadHTML } from '../templates/Table'
import { CurrencyFormat, DateFormat } from '../references/Functions'
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
  const [csvData, setCSVData] = useState(undefined)
  const csvLinkRef = useRef()

  // TABLE HEAD
  const [sort, setSort] = useState({ value: 'rentGroup', direction: true })
  const onSort = useCallback(val => { 
    setSort(val)
    const dataSort = TableSort(sort, data)
    if( dataSort !== false ) setData(dataSort)
  }, [sort])
  
  const onSearch = async () => {
    setSearching(true)
    const call = await getReportCharges({ year, rentGroup, group })
    setData(call)
    setSearching(false)
  }

  const getData = useCallback(async () => {
    const data = await getReportCharges({ year, rentGroup, group })
    setCSVData(data)
  }, [year, rentGroup, group])

  const searchBar = () => {  
    return <div className="find-property-search-bar">
      <div className="govuk-form-group lbh-form-group lbh-search-box">
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

        <button onClick={() => onSearch()} className="govuk-button govuk-secondary lbh-button lbh-button--secondary">Search</button>

        <button 
          onClick={getData}
          className="govuk-button govuk-secondary lbh-button lbh-button--secondary ml-auto"
        >Export CSV</button>

        { csvData !== undefined && <CSVLink
          data={csvData}
          ref={csvLinkRef}
          filename={`report-account-balance-${new Date().toLocaleString()}.csv`}
        /> }
      </div>
    </div>
  }

  const searchResults = () => {

    if( !data.length ) return <h4>{IFSConstants.TextRef.NothingFound}</h4>

    console.log(data)
    
    return <table className='govuk-table lbh-table'>
      <TableHeadHTML
        tableHead={'ReportAccountBalance'}
        sort={sort}
        onSort={onSort}
      />
      <tbody className='govuk-table__body'>
      { data.map((data, key) => { 
        return <tr className='govuk-table__row' key={key}>
          { rentGroup &&
            <td className='govuk-table__cell'>
              { data[1] && <span>1: {CurrencyFormat(data[1])}<br /></span>}
              { data[2] && <span>2: {CurrencyFormat(data[2])}<br /></span>}
              { data[3] && <span>3: {CurrencyFormat(data[3])}<br /></span>}
              { data[4] && <span>4: {CurrencyFormat(data[4])}<br /></span>}
              { data[5] && <span>5: {CurrencyFormat(data[5])}<br /></span>}
              { data[6] && <span>6: {CurrencyFormat(data[6])}<br /></span>}
              { data[7] && <span>7: {CurrencyFormat(data[7])}<br /></span>}
              { data[8] && <span>8: {CurrencyFormat(data[8])}<br /></span>}
              { data[9] && <span>9: {CurrencyFormat(data[9])}<br /></span>}
              { data[10] && <span>10: {CurrencyFormat(data[10])}<br /></span>}
              { data[11] && <span>11: {CurrencyFormat(data[11])}<br /></span>}
              { data[12] && <span>12: {CurrencyFormat(data[12])}</span>}
              { data[13] && <span>13: {CurrencyFormat(data[13])}</span>}
              { data[14] && <span>14: {CurrencyFormat(data[14])}</span>}
              { data[15] && <span>15: {CurrencyFormat(data[15])}</span>}
              { data[16] && <span>16: {CurrencyFormat(data[16])}</span>}
              { data[17] && <span>17: {CurrencyFormat(data[17])}</span>}
              { data[18] && <span>18: {CurrencyFormat(data[18])}</span>}
            </td>
          }
          { group &&
            <td className='govuk-table__cell'>
              { data[1] && <span>Jan: {CurrencyFormat(data[1])}<br /></span>}
              { data[2] && <span>Feb: {CurrencyFormat(data[2])}<br /></span>}
              { data[3] && <span>Mar: {CurrencyFormat(data[3])}<br /></span>}
              { data[4] && <span>Apr: {CurrencyFormat(data[4])}<br /></span>}
              { data[5] && <span>May: {CurrencyFormat(data[5])}<br /></span>}
              { data[6] && <span>Jun: {CurrencyFormat(data[6])}<br /></span>}
              { data[7] && <span>Jul: {CurrencyFormat(data[7])}<br /></span>}
              { data[8] && <span>Aug: {CurrencyFormat(data[8])}<br /></span>}
              { data[9] && <span>Sept: {CurrencyFormat(data[9])}<br /></span>}
              { data[10] && <span>Oct: {CurrencyFormat(data[10])}<br /></span>}
              { data[11] && <span>Nov: {CurrencyFormat(data[11])}<br /></span>}
              { data[12] && <span>Dec: {CurrencyFormat(data[12])}</span>}
            </td>
          }
          <td className='govuk-table__cell'>{data.RentAccount}</td>
          <td className='govuk-table__cell'>{DateFormat(data.EndOfTenancy)}</td>
          <td className='govuk-table__cell'>{data.RentGroup}</td>
        </tr>
      }) }
      </tbody>
    </table>

  } // searchResults

  return <>
    <h1>{IFSConstants.Titles.ReportsAccountBalance}</h1>
    {searchBar()}
    { searching ? <h4>{IFSConstants.TextRef.Searching}</h4> : data !== undefined && searchResults() }
  </>

}

export default ReportAccountBalance
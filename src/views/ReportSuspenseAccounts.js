import React, { useState, useCallback } from 'react'
import { getReportCashSuspense } from '../routes/Api'
import NumberFormat from 'react-number-format'
import { format } from 'date-fns'
import { TableSort, TableHeadHTML } from '../templates/TableHead'
import * as IFSConstants from '../routes/ifsConstants'

const DateFormat = value => value ? format(new Date(value), 'dd/MM/yyyy') : '--/--/----'

const ReportSuspenseAccounts = () => {

  const currentYear = new Date().getFullYear()
  const yearOptions = Array(currentYear - 2019).fill('').map((v, k) => currentYear - k)
  const [isSearching, setIsSearching] = useState(false)
  const [year, setYear] = useState(currentYear)
  const [rentGroup, setRentGroup] = useState('')
  const [data, setData] = useState(undefined)

  // TABLE HEAD
  const [sort, setSort] = useState({ value: 'rentGroup', direction: true })
  const onSort = useCallback(val => { 
    setSort(val)
    const dataSort = TableSort(sort, data)
    if( dataSort !== false ) setData(dataSort)
  }, [sort])
  
  const onSearch = async () => {
    setIsSearching(true)
    const response = await getReportCashSuspense({ year, rentGroup })
    setIsSearching(false)
    setData(response)
  }

  const searchBar = () => {
    return <div className="find-property-search-bar">
      <div className="govuk-form-group lbh-form-group lbh-search-box">

        <select
          disabled={isSearching}
          value={year}
          onChange={e => setYear(Number(e.target.value))}
          className="govuk-select lbh-select"
        >{ yearOptions.map(opt => <option key={opt} value={opt}>{opt}</option>) }</select>

        <select 
          disabled={isSearching}
          value={rentGroup} 
          onChange={e => setRentGroup(e.target.value)}
          className="govuk-select lbh-select"
        >{ IFSConstants.rentGroupOptions.map(opt => <option key={opt.value} value={opt.value}>{opt.text}</option>) }</select>
      
        <button 
          onClick={() => onSearch()} 
          disabled={isSearching}
          className="govuk-button govuk-secondary lbh-button lbh-button--secondary"
        >{IFSConstants.TextRef.Search}</button>

      </div>
    </div>
  }

  const searchResults = () => {

    if( !data.length ) return <h4>{IFSConstants.TextRef.NothingFound}</h4>
    if( !data.length ) console.log(data)

    return <table className='govuk-table lbh-table'>
      <TableHeadHTML
        tableHead={'ReportSuspenseAccounts'}
        sort={sort} 
        onSort={onSort}
      />
      <tbody className='govuk-table__body'>
        { data.map((data, key) => { 
          return <tr className='govuk-table__row' key={key}>
            <td className='govuk-table__cell'>{data.description}</td>
            <td className='govuk-table__cell'>{data.originId}</td>
            <td className='govuk-table__cell'>{data.originalRentAccount}</td>
            <td className='govuk-table__cell'>{data.rentGroup}</td>
            <td className='govuk-table__cell'>{data.rentReference}</td>
            <td className='govuk-table__cell'>
              <NumberFormat
                // style={{color:'#e03c31'}}
                value={data.transactionAmount}
                displayType={'text'}
                thousandSeparator={true}
                prefix={'£'}
                decimalScale={2}
                fixedDecimalScale={true}
              />
            </td>
            <td className='govuk-table__cell'>{DateFormat(data.transactionDate)}</td>
            <td className='govuk-table__cell'>{data.transactionType}</td>
          </tr>
        }) }
      </tbody>
    </table>

  } //searchResults

  return <>
    <h1>{IFSConstants.Titles.ReportsSuspenseAccounts}</h1>
    {searchBar()}
    { isSearching ? <h4>{IFSConstants.TextRef.Searching}</h4> : data !== undefined && searchResults() }
  </>

}

export default ReportSuspenseAccounts
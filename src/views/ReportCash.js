import React, { useState, useCallback } from 'react'
import { getReportCash } from '../routes/Api'
import DatePicker from 'react-date-picker'
// import { format } from 'date-fns'
import NumberFormat from 'react-number-format'
import { TableSort, TableHeadHTML } from '../templates/TableHead'
import * as IFSConstants from '../routes/ifsConstants'

// const DateFormat = value => value ? format(new Date(value), 'dd/MM/yyyy') : '--/--/----'

const ReportCash = () => {
  
  const [startDate, setStartDate] = useState(new Date(2020, 3, 12))
  const [endDate, setEndDate] = useState(new Date())
  const [data, setData] = useState(undefined)
  const [isSearching, setIsSearching] = useState(false)

  // TABLE HEAD
  const [sort, setSort] = useState({ value: 'rentGroup', direction: true })
  const onSort = useCallback(val => { 
    setSort(val)
    const dataSort = TableSort(sort, data)
    if( dataSort !== false ) setData(dataSort)
  }, [sort])
  
  // API CALL
  const onSearch = async () => {
    setIsSearching(true)
    const getData = await getReportCash({ 
      startDate: startDate,
      endDate: endDate,
    })
    setData(getData)
    setIsSearching(false)
  }

  const searchBar = () => {
    return <div className="date-range-search-bar find-property-search-bar">
      <div className="bar-component-cont">
        <label className="govuk-label govuk-date-input__label">{IFSConstants.TextRef.StartLabel}</label>
        <DatePicker
          disabled={isSearching}
          clearIcon={null}
          onChange={setStartDate}
          value={startDate}
          format="dd-MM-y"
        />
        <label className="govuk-label govuk-date-input__label">{IFSConstants.TextRef.EndLabel}</label>
        <DatePicker
          disabled={isSearching}
          clearIcon={null}
          onChange={setEndDate}
          value={endDate}
          format="dd-MM-y"
        />
        <button 
          onClick={() => onSearch()} 
          disabled={isSearching}
          className="govuk-button govuk-secondary lbh-button lbh-button--secondary"
        >{IFSConstants.TextRef.Search}</button>
      </div>

    </div>
  }

  const searchResults = () => {

    if( !data.length ) return <p>{IFSConstants.TextRef.NothingFound}</p>

    return <table className='govuk-table lbh-table'>
      <TableHeadHTML
        tableHead={'ReportCash'}
        sort={sort}
        onSort={onSort}
      />
      <tbody className='govuk-table__body'>
        { data.map((data, key) => { 
          return <tr className='govuk-table__row' key={key}>
            <td className='govuk-table__cell'>
              {data.rentGroup}
            </td>
            <td className='govuk-table__cell govuk-table__cell--numeric'>
              <NumberFormat
                value={data.totalCharged}
                displayType={'text'}
                thousandSeparator={true}
                prefix={'£'}
                decimalScale={2}
                fixedDecimalScale={true}
              />
            </td>
            <td className='govuk-table__cell govuk-table__cell--numeric'>
              <NumberFormat
                value={data.totalPaid}
                displayType={'text'}
                thousandSeparator={true}
                prefix={'£'}
                decimalScale={2}
                fixedDecimalScale={true}
              />
            </td>
            <td className='govuk-table__cell govuk-table__cell--numeric'>
              <NumberFormat
                value={data.totalBalance}
                displayType={'text'}
                thousandSeparator={true}
                prefix={'£'}
                decimalScale={2}
                fixedDecimalScale={true}
              />
            </td>
            <td className='govuk-table__cell govuk-table__cell--numeric'>
              <NumberFormat
                value={data.chargedYTD}
                displayType={'text'}
                thousandSeparator={true}
                prefix={'£'}
                decimalScale={2}
                fixedDecimalScale={true}
              />
            </td>
            <td className='govuk-table__cell govuk-table__cell--numeric'>
              <NumberFormat
                value={data.paidYTD}
                displayType={'text'}
                thousandSeparator={true}
                prefix={'£'}
                decimalScale={2}
                fixedDecimalScale={true}
              />
            </td>
            <td className='govuk-table__cell govuk-table__cell--numeric'>
              <NumberFormat
                value={data.arrearsYTD}
                displayType={'text'}
                thousandSeparator={true}
                prefix={'£'}
                decimalScale={2}
                fixedDecimalScale={true}
              />
            </td>
          </tr>
        }) }
      </tbody>
    </table>

  } // searchResults

  return <>
    <h1>Report - Cash</h1>
    {searchBar()}
    { isSearching ? <h4>{IFSConstants.TextRef.Searching}</h4> : data !== undefined && searchResults() }
  </>

}

export default ReportCash
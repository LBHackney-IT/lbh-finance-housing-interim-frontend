import React, { useEffect, useState, useCallback } from 'react'
import { getOperatingBalances } from '../routes/Api'
import NumberFormat from 'react-number-format'
import OperatingBalancesBar from '../templates/OperatingBalancesBar'
import { TableSort, TableHeadHTML } from '../templates/TableHead'
import * as IFSConstants from '../routes/ifsConstants'

const OperatingBalances = () => {
  
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

  const getData = async () => {
    setIsSearching(true)
    const opBalances = await getOperatingBalances({
      startDate: startDate,
      endDate: endDate,
    })
    setData(opBalances)
    setIsSearching(false)
  }

  useEffect(() => { getData() }, [startDate, endDate])
  
  const searchResults = () => {

    if( data === undefined || !data.length ) return <h4>{IFSConstants.TextRef.NothingFound}</h4>

    return <table className='govuk-table lbh-table'>
      <TableHeadHTML
        tableHead={'OperatingBalances'}
        sort={sort}
        onSort={onSort}
      />
      <tbody className='govuk-table__body'>
      {data.map((item) => {
          return <tr className='govuk-table__row' key={item.rentGroup}>
            <td className='govuk-table__header'>
              {item.rentGroup}
            </td>
            <td className='govuk-table__cell govuk-table__cell--numeric'>
              <NumberFormat
                value={item.totalCharged}
                displayType={'text'}
                thousandSeparator={true}
                prefix={'£'}
                decimalScale={2}
                fixedDecimalScale={true}
              />
            </td>
            <td className='govuk-table__cell govuk-table__cell--numeric'>
              <NumberFormat
                value={item.totalPaid}
                displayType={'text'}
                thousandSeparator={true}
                prefix={'£'}
                decimalScale={2}
                fixedDecimalScale={true}
              />
            </td>
            <td className='govuk-table__cell govuk-table__cell--numeric'>
              <NumberFormat
                value={item.totalBalance}
                displayType={'text'}
                thousandSeparator={true}
                prefix={'£'}
                decimalScale={2}
                fixedDecimalScale={true}
              />
            </td>
          </tr>
        })}
      </tbody>
    </table>
  
  } // searchResults

  return <div>
    <h1>{IFSConstants.Titles.OperatingBalances}</h1>
    <OperatingBalancesBar
      searching={isSearching}
      startDate={startDate}
      setStartDate={setStartDate}
      endDate={endDate}
      setEndDate={setEndDate}
    />
    { isSearching ? <h4>{IFSConstants.TextRef.Searching}</h4> : data !== undefined && searchResults() }
  </div>
}

export default OperatingBalances
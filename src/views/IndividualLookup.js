import React, { useState, useCallback } from 'react'
import { useParams, Link, useNavigate } from "react-router-dom"
import { getTenancy, getTenancyTransactions } from '../routes/Api'
import IndividualLookupBar from '../templates/IndividualLookupBar'
import { format } from 'date-fns'
import NumberFormat from 'react-number-format'
import * as RouteConstants from '../routes/RouteConstants'
import { TableSort, TableHeadHTML } from '../templates/TableHead'
import * as IFSConstants from '../routes/ifsConstants'

const DateFormat = value => value ? format(new Date(value), 'dd/MM/yyyy') : '--/--/----'

const IndividualLookup = () => {
  
  let navigate = useNavigate()
  const params = useParams()
  const search = params.search ? decodeURIComponent(params.search) : params.search
  const searchOptions = IFSConstants.IndividualLookupSearchOptions
  const searchId = params.searchId ? params.searchId : searchOptions[0].value
  
  const [isSearching, setIsSearching] = useState(false)  
  const [tenant, setTenant] = useState(undefined)
  const [transactions, setTransactions] = useState(undefined)
  const [searchType, setSearchType] = useState(searchId)
  const [searchTerm, setSearchTerm] = useState(search)

  // TABLE HEAD
  const [sort, setSort] = useState({ value: 'rentGroup', direction: true })
  const onSort = useCallback(val => { 
    setSort(val)
    const dataSort = TableSort(sort, transactions)
    if( dataSort !== false ) setTransactions(dataSort)
  }, [sort])
  
  // API CALL
  const searchCall = async () => {    
    let args = { 
      tenancyAgreementRef: null, 
      rentAccount: null, 
      householdRef: null 
    }
    args[searchType] = searchTerm
    setIsSearching(true)
    const getTenants = await getTenancy(args)
    const getTransactions = await getTenancyTransactions(args)
    setTenant(getTenants)
    setTransactions(getTransactions)
    setIsSearching(false)
  } // searchCall

  const runSearch = () => {
    if( !searchTerm ) return
    navigate(`${RouteConstants.INDIVIDUAL_LOOKUP}/${searchType}/${encodeURIComponent(searchTerm)}`, { replace: false })
    if( searchTerm && searchType ) searchCall()  
  } // runSearch

  const onSearchType = useCallback(val => { 
    setSearchType(val) 
  }, [setSearchType])
  
  const onSearchTerm = useCallback(val => { 
    if( !val ) return
    setSearchTerm(val) 
  }, [setSearchTerm])

  const rentAccountView = () => {
    
    if( tenant === null ) {
      let searchTypeName = searchOptions.filter(opt => searchType === opt.value)
      console.log(tenant)
      return <h4>No tenant record found for "{searchTerm}" in "{searchTypeName[0].text}".</h4>
    }

    const dlFragment = ( key, val ) => {
      return <div className="govuk-summary-list__row">
        <dt className="govuk-summary-list__key">{key}</dt>
        <dd className="govuk-summary-list__value">{val}</dd>
      </div>
    }

    const contactInfo = <p className="govuk-body">
      {tenant.address1}<br />
      {tenant.address2}<br />
      {tenant.address3}<br />
      {tenant.address4}<br />
      {tenant.postCode}<br />
    </p>

    return <>
      <hr />
      <h3>Tenant</h3>
      <dl className="govuk-summary-list lbh-summary-list">
        {dlFragment('Tenant', `${tenant.title} ${tenant.forename} ${tenant.surname}`)}
        {dlFragment('Tenancy ID', `${tenant.tenancyAgreementRef}`)}
        {dlFragment('Current Balance', <NumberFormat
          value={tenant.currentBalance}
          displayType={'text'}
          thousandSeparator={true}
          prefix={'£'}
          decimalScale={2}
          fixedDecimalScale={true}
        />)}
        {dlFragment('Contact information', contactInfo)}
      </dl>
      <h3>Last Transactions</h3>
      { transactions.length ? <>
        <table className='govuk-table lbh-table'>
          <TableHeadHTML
            tableHead={'IndividualLookup'}
            sort={sort}
            onSort={onSort}
          />
          <tbody className='govuk-table__body'>
            {transactions.map((transaction, key) => {
              return <tr className='govuk-table__row' key={key}>
                <td className='govuk-table__cell'>
                  {DateFormat(transaction.weekBeginning)}
                </td>
                <td className='govuk-table__cell govuk-table__cell--numeric'>
                  <NumberFormat
                    value={transaction.totalCharged}
                    displayType={'text'}
                    thousandSeparator={true}
                    prefix={'£'}
                    decimalScale={2}
                    fixedDecimalScale={true}
                  />
                </td>
                <td className='govuk-table__cell govuk-table__cell--numeric'>
                  <NumberFormat
                    value={transaction.totalPaid}
                    displayType={'text'}
                    thousandSeparator={true}
                    prefix={'£'}
                    decimalScale={2}
                    fixedDecimalScale={true}
                  />
                </td>
                <td className='govuk-table__cell govuk-table__cell--numeric'>
                  <NumberFormat
                    value={transaction.totalHB}
                    displayType={'text'}
                    thousandSeparator={true}
                    prefix={'£'}
                    decimalScale={2}
                    fixedDecimalScale={true}
                  />
                </td>
                <td className='govuk-table__cell govuk-table__cell--numeric'>
                  <NumberFormat
                    value={transaction.weekBalance}
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
        <p>
          <Link 
            to={`${RouteConstants.INDIVIDUAL_LOOKUP_PAYMENTS}/${encodeURIComponent(tenant.tenancyAgreementRef)}`} 
            className="govuk-button lbh-button"
          >See all payments and arrers</Link>
        </p>
      </> : <p>No transactions to show.</p> }
    </>
  
  } // rentAccountView

  return <>
    <h1>Individual Lookup</h1>
    <IndividualLookupBar
      searching={isSearching}
      searchOptions={searchOptions}
      searchType={searchType}
      search={searchTerm}
      onSearch={runSearch}
      onSearchType={onSearchType}
      onSearchTerm={onSearchTerm}
    />
    { isSearching ? <h4>Searching...</h4> : tenant !== undefined && rentAccountView() }
  </>
}

export default IndividualLookup
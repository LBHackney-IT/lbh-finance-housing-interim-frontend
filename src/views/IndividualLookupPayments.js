import React from 'react'
import { useEffect, useState } from 'react'
import { useParams } from "react-router-dom"
import { getTenancy, getTenancyTransactions } from '../routes/Api'
// import { INDIVIDUAL_LOOKUP, INDIVIDUAL_LOOKUP_PAYMENTS } from '../routes/RouteConstants'
import OperatingBalancesBar from '../templates/OperatingBalancesBar'
import NumberFormat from 'react-number-format'
import { format } from 'date-fns'
import * as IFSConstants from '../routes/ifsConstants'

const DateFormat = value => value ? format(new Date(value), 'dd/MM/yyyy') : '--/--/----'

const IndividualLookupPayments = () => {

  const params = useParams()  
  const tenancyAgreementRef = params.tenancyAgreementRef ? decodeURIComponent(params.tenancyAgreementRef) : params.tenancyAgreementRef

  const [searchResult, setSearchResult] = useState(undefined)
  const [isSearching, setIsSearching] = useState(false)
  const [startDate, setStartDate] = useState(new Date(2020, 3, 12))
  const [endDate, setEndDate] = useState(new Date())

  useEffect(() => {
    if( !tenancyAgreementRef ) return
    async function getData() {
      setIsSearching(true)
      const tenantResult = await getTenancy({ tenancyAgreementRef: tenancyAgreementRef })
      const transactionsResult = await getTenancyTransactions({
        tenancyAgreementRef: tenancyAgreementRef,
        count: 100,
      });

      setSearchResult({ tenant: tenantResult, transactions: transactionsResult })
      setIsSearching(false)
    }
    getData()
  }, [tenancyAgreementRef])

  const resultsView = () => {
    
    if( searchResult.tenant === null ) {
      console.log(searchResult)
      return <h4>No tenant records found for "{tenancyAgreementRef}".</h4>
    }

    return <>
      <h3>Tenant</h3>
      <dl className="govuk-summary-list lbh-summary-list">
        <div className="govuk-summary-list__row">
          <dt className="govuk-summary-list__key">Tenant</dt>
          <dd className="govuk-summary-list__value">{searchResult.tenant.title} {searchResult.tenant.forename} {searchResult.tenant.surname}</dd>
        </div>

        <div className="govuk-summary-list__row">
          <dt className="govuk-summary-list__key">Tenancy ID</dt>
          <dd className="govuk-summary-list__value">{searchResult.tenant.tenancyAgreementRef}</dd>
        </div>
      </dl>
      { searchResult.transactions.length ? <>
        <h3>Transactions</h3>
        <table className='govuk-table lbh-table'>
          <thead className='govuk-table__head'>
            <tr className='govuk-table__row'>
              <th scope="col" className='govuk-table__header'>Week Beginning</th>
              <th scope="col" className='govuk-table__header'>Charge</th>
              <th scope="col" className='govuk-table__header'>Paid</th>
              <th scope="col" className='govuk-table__header'>HB Cont.</th>
              <th scope="col" className='govuk-table__header'>Balance</th>
            </tr>
          </thead>
          <tbody className='govuk-table__body'>
            {searchResult.transactions.map((data, key) => {
              return <tr className='govuk-table__row' key={key}>
                <td className='govuk-table__cell'>
                  {DateFormat(data.weekBeginning)}
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
                    value={data.totalHB}
                    displayType={'text'}
                    thousandSeparator={true}
                    prefix={'£'}
                    decimalScale={2}
                    fixedDecimalScale={true}
                  />
                </td>
                <td className='govuk-table__cell govuk-table__cell--numeric'>
                  <NumberFormat
                    value={data.weekBalance}
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
      </>  : <p>No transactions to show.</p> }
    </>
  
  } // CONST

  return <>
    <h1>Arrears view</h1>
    <OperatingBalancesBar
      startDate={startDate}
      setStartDate={setStartDate}
      endDate={endDate}
      setEndDate={setEndDate}
    />
    { isSearching ? <h4>{IFSConstants.TextRef.Searching}</h4> : searchResult !== undefined ? resultsView() : '' }
  </>
}

export default IndividualLookupPayments

import React from 'react'
import RouteConstants from '../routes/RouteConstants'
import { Link } from 'react-router-dom'
import * as TextReferences from '../references/TextReferences'

const Home = () => {

  const Titles = TextReferences.Titles

  const blocks = [
    [
      { type: 'block', title: Titles.OperatingBalances, description: 'Get the operating balances by date range.', route: RouteConstants.OPERATING_BALANCES },
      { type: 'block', title: Titles.IndividualLookup, description: 'Look up individual tenants by Rent account or Tenancy agreement.', route: RouteConstants.INDIVIDUAL_LOOKUP },
      { type: 'block', title: Titles.BatchLog, description: 'Get the logs of the last 30 days.', route: RouteConstants.BATCH_LOG },
    ], [
      { type: 'block', title: Titles.ReportsAccountBalance, description: 'Create and download account balance reports', route: RouteConstants.REPORT_ACCOUNT_BALANCE },
      { type: 'block', title: Titles.ReportsCash, description: 'Create and download cash reports', route: RouteConstants.REPORT_CASH },
      { type: 'block', title: Titles.ReportCharges, description: 'Create and download charges reports', route: RouteConstants.REPORT_CHARGES },
    ], [
      { type: 'block', title: Titles.ReportsSuspenseAccounts, description: 'Create and download cash suspense reports', route: RouteConstants.REPORT_CASH_SUSPENSE },
      { type: 'block', title: Titles.ReportHousingBenefitAcademy, description: 'Create and download housing benefit academy reports', route: RouteConstants.REPORT_HOUSINGBENEFIT_ACADEMY },
    ]
  ]

  return <>
    <div className="govuk-grid-row">
      <div className="govuk-grid-column-one">
        <h1>{Titles.Homepage}</h1>
      </div>
    </div>
    <div className="govuk-grid-row">
      { [...blocks].map((blockWrap, blockWrapKey) => {
        return <div key={blockWrapKey} className="govuk-grid-row">
          {[...blockWrap].map((block, blockKey) => {

            return <div key={blockKey} className="govuk-grid-column-one-third grey_box">
              <div>
                <h4>{block.title}</h4>
                <p className="descWrap">{block.description && block.description}</p>
                <p className='lbn-btn-wrap'>
                  <Link to={block.route} className="govuk-button lbh-button lbn-button-sm">View</Link>
                </p>
              </div>
            </div>
          })}
        </div>
      }) }
    </div>
  </>
}

export default Home
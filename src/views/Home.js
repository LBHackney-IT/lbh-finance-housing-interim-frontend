import React from 'react'
import * as RouteConstants from '../routes/RouteConstants'
import { Link } from 'react-router-dom'
import * as IFSConstants from '../routes/ifsConstants'

const Home = () => {

  const blocks = [
    [
      { type: 'block', title: 'Operating Balance', route: RouteConstants.OPERATING_BALANCES },
      { type: 'block', title: 'Individual Lookup', route: RouteConstants.INDIVIDUAL_LOOKUP },
      { type: 'block', title: 'Batch log', route: RouteConstants.BATCH_LOG },
    ], [
      { type: 'title', title: 'Reports', route: RouteConstants.REPORT }
    ], [
      { type: 'block', title: 'Cash', route: RouteConstants.REPORT_CASH },
      { type: 'block', title: 'Account Balance', route: RouteConstants.REPORT_ACCOUNT_BALANCE },
      { type: 'block', title: 'Suspense Accounts', route: RouteConstants.REPORT_CASH_SUSPENSE },
    ], [
      { type: 'block', title: 'Charges', route: RouteConstants.REPORT_CHARGES },
    ]
  ]

  return <>
    <div className="govuk-grid-row">
      <div className="govuk-grid-column-one">
        <h1>{IFSConstants.Titles.Homepage}</h1>
        <hr />
      </div>
    </div>
    <div className="govuk-grid-row">
      { [...blocks].map((blockWrap, blockWrapKey) => {
        return <div key={blockWrapKey} className="govuk-grid-row">
          {[...blockWrap].map((block, blockKey) => {

            if( block.type === 'title' ) 
              return <div key={blockKey} className="govuk-grid-column-two-thirds">
                <h3>{
                  block.route ? <Link to={block.route} className='govuk-link'>{block.title}</Link> : block.title
                }</h3>
              </div>

            return <div key={blockKey} className="govuk-grid-column-one-third">
              <div className="lbh-stat">
                <h4>{block.title}</h4>
                <Link to={block.route} className="govuk-button lbh-button">{block.title}</Link>
              </div>
            </div>
          })}
        </div>
      }) }
    </div>
  </>
}

export default Home
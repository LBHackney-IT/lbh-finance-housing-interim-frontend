import React from 'react'
import * as RouteConstants from '../routes/RouteConstants'
import { Link } from 'react-router-dom'
import * as IFSConstants from '../references/ifsConstants'

const Report = () => {

  const blocks = [
    [
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
        <h1>{IFSConstants.Titles.Reports}</h1>
        <hr />
      </div>
    </div>
    <div className="govuk-grid-row">
      { [...blocks].map((blockWrap, blockWrapKey) => {
        return <div key={blockWrapKey} className="govuk-grid-row">
          {[...blockWrap].map((block, blockKey) => {
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

export default Report
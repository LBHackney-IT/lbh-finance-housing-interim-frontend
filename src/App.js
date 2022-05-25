import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import * as RouteConstants from './routes/RouteConstants'
import * as Views from './views/Views'
import Header from './templates/Header'
import { userStatus, PrivateRoute } from './routes/Auth'

export default function App() {

  const user = userStatus()

  return <>
    <div className="App">
    
      <BrowserRouter>
        <Header />
        <main className="lbh-main-wrapper" id="main-content" role="main">
          <div className="lbh-container">
            <Routes>
              <Route 
                path={RouteConstants.LOGIN_URL} 
                element={<Views.Login />}
              />
              <Route
                exact 
                path='/' 
                element={<PrivateRoute user={user}><Views.Home /></PrivateRoute>} 
              />
              <Route 
                path={RouteConstants.OPERATING_BALANCES} 
                element={<PrivateRoute user={user}><Views.OperatingBalances /></PrivateRoute>} 
              />
              <Route 
                path={`${RouteConstants.INDIVIDUAL_LOOKUP}`}
                element={<PrivateRoute user={user}><Views.IndividualLookup /></PrivateRoute>} 
              />
              <Route 
                path={`${RouteConstants.INDIVIDUAL_LOOKUP}/:searchId/:search`}
                element={<PrivateRoute user={user}><Views.IndividualLookup /></PrivateRoute>} 
              />
              <Route 
                path={`${RouteConstants.INDIVIDUAL_LOOKUP_PAYMENTS}/:tenancyAgreementRef`}
                element={<PrivateRoute user={user}><Views.IndividualLookupPayments /></PrivateRoute>}
              />
              <Route 
                path={RouteConstants.REPORT_CHARGES} 
                element={<PrivateRoute user={user}><Views.ReportCharges /></PrivateRoute>} 
              />
              <Route 
                exact
                path={RouteConstants.REPORT} 
                element={<PrivateRoute user={user}><Views.Report /></PrivateRoute>} 
              />
              <Route 
                path={RouteConstants.REPORT_CASH} 
                element={<PrivateRoute user={user}><Views.ReportCash /></PrivateRoute>} 
              />
              <Route 
                path={RouteConstants.REPORT_CASH_SUSPENSE} 
                element={<PrivateRoute user={user}><Views.ReportSuspenseAccounts /></PrivateRoute>} 
              />
              <Route 
                path={RouteConstants.REPORT_ACCOUNT_BALANCE} 
                element={<PrivateRoute user={user}><Views.ReportAccountBalance /></PrivateRoute>} 
              />
              <Route 
                path={RouteConstants.BATCH_LOG} 
                element={<PrivateRoute user={user}><Views.BatchLog /></PrivateRoute>} 
              />
            </Routes>
          </div>
        </main>
      </BrowserRouter>
    
    </div>
  </>

}
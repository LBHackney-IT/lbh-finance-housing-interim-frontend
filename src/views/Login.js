import React from 'react'
import { Navigate, useLocation } from 'react-router-dom'
import { userStatus } from '../routes/Auth'
import * as IFSConstants from '../routes/ifsConstants'

const hackneyAuthLink = 'https://auth.hackney.gov.uk/auth?redirect_uri=';

const Login = () => {
  
  const user = userStatus()
  const location = useLocation()
  const from = location.state && location.state.from && location.state.from.pathname ? location.state.from.pathname : '/'
  const loginLink = hackneyAuthLink + window.location.origin + encodeURIComponent(location.pathname)

  if( user ) return <Navigate to={from} replace />

  return <>
    <h1>{IFSConstants.Titles.Login}</h1>
    <p>
      <a href={loginLink} target="_self" className="govuk-button lbh-button" data-module="govuk-button">{IFSConstants.TextRef.SignInButton}</a>
    </p>
  </>

}

export default Login
import React from 'react'
import { Navigate, useLocation } from 'react-router-dom'
import Cookies from 'js-cookie'
import { useJwt } from 'react-jwt'
import * as RouteConstants from './RouteConstants'

const hackneyToken = Cookies.get('hackneyToken')

const userStatus = () => {
  const { decodedToken } = useJwt(hackneyToken) // decodedToken, isExpired
  return decodedToken !== null ? true : false
}

const userInfo = () => {
  const { decodedToken } = useJwt(hackneyToken) // decodedToken, isExpired
  return decodedToken
}

const signOut = () => {
  Cookies.remove('hackneyToken', { path: '/', domain: '.hackney.gov.uk'})
}

const PrivateRoute = ({ user, children }) => {
  const location = useLocation()
  if( !user ) return <Navigate to={RouteConstants.LOGIN_URL} state={{ from: location }} replace />
  return children
}

export {
  PrivateRoute,
  signOut,
  userStatus,
  userInfo,
}
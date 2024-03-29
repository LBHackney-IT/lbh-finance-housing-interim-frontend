import jwt from 'jsonwebtoken';
import Cookies from 'js-cookie';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import BatchLog from './features/batch-log/BatchLog';
import OperatingBalances from './features/operating-balances/OperatingBalances';
import PrivateRoute from './features/PrivateRoute';
import * as RouteConstants from './features/RouteConstants';
import IndividualLookup from './features/individual-lookup/IndividualLookup';
import Login from './features/user/Login';
import IndividualLookupPayments from './features/individual-lookup/IndividualLookupPayments';
import { setUser } from './features/user/userSlice';

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const user = jwt.decode(Cookies.get('hackneyToken'));
    if (user) dispatch(setUser(user));
  }, [dispatch]);

  return (
    <>
      <Switch>
        <Route path={RouteConstants.LOGIN_PAGE} component={Login} />
        {/* <PrivateRoute
          exact
          path={RouteConstants.UPLOAD_LIST}
          component={UploadList}
        />
        <PrivateRoute
          exact
          path={`${RouteConstants.UPLOAD_PAGE}/:id`}
          component={Upload}
        />
        <PrivateRoute
          path={RouteConstants.ACTIVITY_PAGE}
          component={Activity}
        /> */}
        <PrivateRoute
          exact
          path={RouteConstants.OPERATING_BALANCES}
          component={OperatingBalances}
        />
        <PrivateRoute
          exact
          path={RouteConstants.BATCH_LOG}
          component={BatchLog}
        />
        <PrivateRoute
          path={`${RouteConstants.INDIVIDUAL_LOOKUP}/:searchId?/:search?`}
          component={IndividualLookup}
        />
        <PrivateRoute
          path={`${RouteConstants.INDIVIDUAL_LOOKUP_PAYMENTS}/:tenancyAgreementRef`}
          component={IndividualLookupPayments}
        />
      </Switch>
    </>
  );
}

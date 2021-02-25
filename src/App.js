import { Route, Switch } from "react-router-dom";
import Activity from "./features/activity/Activity";
import OperatingBalances from "./features/operating-balances/OperatingBalances";
import * as RouteConstants from "./features/RouteConstants";
import Upload from "./features/upload/Upload";
import UploadList from "./features/upload/UploadList";
import Login from "./features/user/Login";

export default function App() {
  return (
    <>
      <Switch>
        <Route path={RouteConstants.LOGIN_PAGE} component={Login} />
        <Route exact path={RouteConstants.UPLOAD_LIST} component={UploadList} />
        <Route
          exact
          path={`${RouteConstants.UPLOAD_PAGE}/:id`}
          component={Upload}
        />
        <Route path={RouteConstants.ACTIVITY_PAGE} component={Activity} />
        <Route
          path={RouteConstants.OPERATING_BALANCES}
          component={OperatingBalances}
        />
      </Switch>
    </>
  );
}

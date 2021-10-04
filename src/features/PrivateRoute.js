import { useSelector } from 'react-redux';
import { Redirect, Route } from 'react-router-dom';
import { selectUser } from './user/userSlice';
import { LOGIN_PAGE } from './RouteConstants';

const PrivateRoute = ({ component: Component, ...props }) => {
  const user = useSelector(selectUser);
  const isAuth = user !== null;

  const Render = (props) =>
    isAuth ? (
      <Component {...props} />
    ) : (
      <Redirect
        to={{ pathname: LOGIN_PAGE, state: { from: props.location } }}
      />
    );

  return <Route render={Render} {...props} />;
};

export default PrivateRoute;

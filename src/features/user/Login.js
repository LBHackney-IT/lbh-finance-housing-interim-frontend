import { useHistory, useLocation } from 'react-router-dom';
import { getToken } from '../../api/Api';
import HackneyLogo from '../../assets/images/hackney_logo.png';
import { Button } from '../common/components/Button';
import Card from '../common/components/Card';
import { GoogleIcon, MailIcon, PasswordIcon } from '../common/components/Icons';
import { OPERATING_BALANCES } from '../RouteConstants';
import './assets/login.scss';
import { useDispatch } from 'react-redux';
import { login } from './userSlice';
import { useGoogleLogin } from 'react-google-login';

const Login = () => {
  const history = useHistory();
  const { state } = useLocation();

  const dispatch = useDispatch();

  const handleGoogleSuccess = async (response) => {
    if (response.accessToken) {
      const { accessToken, profileObj } = response;
      const { email, name, googleId } = profileObj;
      const user = { accessToken, email, name, googleId };

      await getToken(response);

      dispatch(login(user));

      history.push(state?.from ?? OPERATING_BALANCES);
    }
  };

  const { signIn, loaded } = useGoogleLogin({
    clientId: process.env.REACT_APP_GOOGLE_CLIENT_ID,
    cookiePolicy: 'single_host_origin',
    onSuccess: handleGoogleSuccess,
    isSignedIn: true,
  });

  return (
    <div className="login-page">
      <div className="background-spacer"/>
      <div className="login-box-cont">
        <img src={HackneyLogo} className="login-logo" alt="Not found" />
        <Card className="login-box">
          <PasswordIcon />
          <h1 className="login-title">
            <strong>Welcome to Hackney Housing Finance</strong>
          </h1>
          <p className="login-text">
            Please sign in with your Hackney Google Account
          </p>
          <div className="login-btn">
            <Button
              onClick={signIn}
              Icon={GoogleIcon}
              disabled={!loaded}
            >
              <strong>SIGN IN</strong>
            </Button>
          </div>
          <div className="login-btn">
            <Button Icon={MailIcon} onClick={() => alert('Help clicked')}>
              <strong>HELP</strong>
            </Button>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Login;

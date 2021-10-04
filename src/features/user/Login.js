import { useSelector } from 'react-redux';
import { Redirect, useLocation } from 'react-router-dom';
import HackneyLogo from '../../assets/images/hackney_logo.png';
import { Button } from '../common/components/Button';
import Card from '../common/components/Card';
import { GoogleIcon, MailIcon, PasswordIcon } from '../common/components/Icons';
import './assets/login.scss';
import { selectUser } from './userSlice';

const hackneyAuthLink = 'https://auth.hackney.gov.uk/auth?redirect_uri=';

const Login = () => {
  const user = useSelector(selectUser);

  const { state } = useLocation();

  const backTo = state?.from?.pathname ?? '';
  const loginLink = hackneyAuthLink + window.location.origin + encodeURIComponent(backTo);

  if (user) return <Redirect to={state?.from?.pathname ?? '/'} />;

  return (
    <div className="login-page">
      <div className="background-spacer" />

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
            <Button Icon={GoogleIcon}>
              <a href={loginLink} target="_self">
                <strong>SIGN IN</strong>
              </a>
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

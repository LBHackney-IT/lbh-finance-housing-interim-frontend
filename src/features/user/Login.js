import HackneyLogo from "../../assets/images/hackney_logo.png";
import { Button } from "../common/components/Button";
import Card from "../common/components/Card";
import { GoogleIcon, MailIcon, PasswordIcon } from "../common/components/Icons";
import { UPLOAD_LIST } from "../RouteConstants";
import "./login.scss";
import { useDispatch } from "react-redux";
import { login } from "./userSlice";
import GoogleLogin from "react-google-login";

const Login = (props) => {
  const dispatch = useDispatch();

  const HandleGoogleSuccess = (response, isNudge = false) => {
    if (response.accessToken) {
      const { accessToken, profileObj } = response;
      const { email, name, googleId } = profileObj;
      const user = { accessToken, email, name, googleId, isNudge };
      dispatch(login(user));
      props.history.push(UPLOAD_LIST);
    }
  };

  const HandleGoogleSuccessNudge = (response) => {
    HandleGoogleSuccess(response, true);
  };

  const HandleGoogleFailure = (response) => {
    // TODO
    alert("Failure");
    console.log(response);
  };

  return (
    <div className="login-page">
      <div className="background-spacer"></div>
      <div className="login-box-cont">
        <img src={HackneyLogo} className="login-logo" alt="Not found" />
        <Card className="login-box">
          <PasswordIcon />
          <h1 className="login-title">
            <strong>Welcome to SarlAccounts</strong>
          </h1>
          <p className="login-text">
            Please sign in with your Hackney Google Account
          </p>
          <div className="login-btn">
            <GoogleLogin
              clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
              render={(renderProps) => (
                <Button
                  onClick={renderProps.onClick}
                  disabled={renderProps.disabled}
                  Icon={GoogleIcon}
                >
                  <strong>SIGN IN (HACKNEY)</strong>
                </Button>
              )}
              buttonText="Login"
              onSuccess={HandleGoogleSuccess}
              onFailure={HandleGoogleFailure}
              cookiePolicy={"single_host_origin"}
            />
          </div>
          <div className="login-btn">
            <GoogleLogin
              clientId={process.env.REACT_APP_GOOGLE_NUDGE_CLIENT_ID}
              render={(renderProps) => (
                <Button
                  onClick={renderProps.onClick}
                  disabled={renderProps.disabled}
                  Icon={GoogleIcon}
                >
                  <strong>SIGN IN (NUDGE)</strong>
                </Button>
              )}
              buttonText="Login"
              onSuccess={HandleGoogleSuccessNudge}
              onFailure={HandleGoogleFailure}
              cookiePolicy={"single_host_origin"}
            />
          </div>
          <div className="login-btn">
            <Button Icon={MailIcon} onClick={() => alert("Help clicked")}>
              <strong>HELP</strong>
            </Button>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Login;

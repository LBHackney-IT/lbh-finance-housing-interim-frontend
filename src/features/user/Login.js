import HackneyLogo from "../../assets/images/hackney_logo.png";
import { Button } from "../common/components/Button";
import Card from "../common/components/Card";
import { GoogleIcon, MailIcon, PasswordIcon } from "../common/components/Icons";
import { OPERATING_BALANCES } from "../RouteConstants";
import "./assets/login.scss";
import { useDispatch } from "react-redux";
import { login } from "./userSlice";
import GoogleLogin from "react-google-login";

const Login = (props) => {
  const dispatch = useDispatch();

  const HandleGoogleSuccess = (response) => {
    if (response.accessToken) {
      const { accessToken, profileObj } = response;
      const { email, name, googleId } = profileObj;
      const user = { accessToken, email, name, googleId };
      dispatch(login(user));

      // Redirect
      props.history.push(
        props.location.state !== undefined
          ? props.location.state.from
          : OPERATING_BALANCES
      );
    }
  };

  const HandleGoogleFailure = (response) => {
    // TODO
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
            <strong>Welcome to Hackney Housing Finance</strong>
          </h1>
          <p className="login-text">
            Please sign in with your Hackney Google Account
          </p>
          <div className="login-btn">
            <GoogleLogin
              isSignedIn={true}
              clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
              render={(renderProps) => (
                <Button
                  onClick={renderProps.onClick}
                  disabled={renderProps.disabled}
                  Icon={GoogleIcon}
                >
                  <strong>SIGN IN</strong>
                </Button>
              )}
              // approvalPrompt="force"
              // responseType="code"
              // prompt="consent"
              // online="offline"
              buttonText="Login"
              onSuccess={HandleGoogleSuccess}
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

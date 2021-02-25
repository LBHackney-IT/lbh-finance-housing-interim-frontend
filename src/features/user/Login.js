import HackneyLogo from "../../assets/images/hackney_logo.png";
import { Button, NavLinkButton } from "../common/components/Button";
import Card from "../common/components/Card";
import { GoogleIcon, MailIcon, PasswordIcon } from "../common/components/Icons";
import { UPLOAD_LIST } from "../RouteConstants";
import "./login.scss";

const Login = () => {
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
            <NavLinkButton toRoute={UPLOAD_LIST} Icon={GoogleIcon}>
              <strong>SIGN IN</strong>
            </NavLinkButton>
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

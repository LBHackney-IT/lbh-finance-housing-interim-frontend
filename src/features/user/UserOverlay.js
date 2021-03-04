import React from "react";
import { GoogleLogout } from "react-google-login";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { Button } from "../common/components/Button";
import { CloseIcon, ExitIcon, MailIcon } from "../common/components/Icons";
import OutsideTrigger from "../common/components/OutsideTrigger";
import { LOGIN_PAGE } from "../RouteConstants";
import "./assets/useroverlay.scss";
import { logout, selectUser } from "./userSlice";

const UserOverlay = ({ isDisplayed, onCloseClick }) => {
  const dispatch = useDispatch();
  const history = useHistory();

  // Get the user's details
  const user = useSelector(selectUser);
  const { name, email } = user;
  const displayClass = isDisplayed ? "" : "is-hidden";

  // Handle logout
  const Logout = () => {
    dispatch(logout);
    history.push(LOGIN_PAGE);
  };

  const outsideClickHandle = (event) => {
    if (isDisplayed) {
      onCloseClick(event);
    }
  };

  return (
    <>
      <div className={displayClass + " user-overlay is-background"}></div>
      <OutsideTrigger
        className={displayClass + " user-overlay user-details-container card"}
        onClick={outsideClickHandle}
      >
        <div className="level close-overlay-container">
          <div className="level-item level-right">
            <span onClick={onCloseClick} className="is-clickable">
              <CloseIcon />
            </span>
          </div>
        </div>
        <div className="user-details">
          <div className="user-name">
            <strong>{name}</strong>
          </div>
          <div className="user-job-title">{email}</div>
        </div>
        <div className="user-overlay-divider"></div>
        <div className="user-overlay-buttons">
          <div>
            <Button onClick={() => alert("Help clicked")}>
              <MailIcon /> Help
            </Button>
          </div>
          <div>
            <GoogleLogout
              clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
              onLogoutSuccess={Logout}
              render={(renderProps) => {
                return (
                  <Button
                    onClick={renderProps.onClick}
                    disabled={renderProps.disabled}
                  >
                    <ExitIcon /> Log out
                  </Button>
                );
              }}
            ></GoogleLogout>
          </div>
        </div>
      </OutsideTrigger>
    </>
  );
};

export default UserOverlay;

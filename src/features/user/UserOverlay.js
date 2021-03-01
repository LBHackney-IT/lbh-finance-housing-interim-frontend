import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { Button } from "../common/components/Button";
import { CloseIcon, ExitIcon, MailIcon } from "../common/components/Icons";
import { LOGIN_PAGE } from "../RouteConstants";
import { logout, selectUser } from "./userSlice";
import { GoogleLogout } from "react-google-login";

const UserOverlay = ({ isDisplayed, onCloseClick }) => {
  const dispatch = useDispatch();
  const history = useHistory();

  // Get the user's details
  const user = useSelector(selectUser);
  const { name, isNudge } = user;
  const displayClass = isDisplayed ? "" : "is-hidden";

  // Handle logout
  const Logout = () => {
    dispatch(logout);
    history.push(LOGIN_PAGE);
  };

  return (
    <>
      <div className={displayClass + " user-overlay is-background"}></div>
      <div
        className={displayClass + " user-overlay user-details-container card"}
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
          <div className="user-job-title">Rents and Arrears</div>
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
              clientId={
                isNudge
                  ? process.env.REACT_APP_GOOGLE_NUDGE_CLIENT_ID
                  : process.env.REACT_APP_GOOGLE_CLIENT_ID
              }
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
      </div>
    </>
  );
};

export default UserOverlay;

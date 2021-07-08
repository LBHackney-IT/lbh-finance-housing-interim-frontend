import React from "react";
import { useGoogleLogout } from "react-google-login";
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

  const onLogoutSuccess = () => {
    dispatch(logout);
    history.push(LOGIN_PAGE);
  };

  const { signOut, loaded } = useGoogleLogout({
    clientId: process.env.REACT_APP_GOOGLE_CLIENT_ID,
    onLogoutSuccess: onLogoutSuccess,
  })

  const outsideClickHandle = (event) => {
    if (isDisplayed) {
      onCloseClick(event);
    }
  };

  return (
    <>
      <div className={displayClass + ' user-overlay is-background'}/>
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
        <div className="user-overlay-divider"/>
        <div className="user-overlay-buttons">
          <div>
            <Button onClick={() => alert("Help clicked")}>
              <MailIcon /> Help
            </Button>
          </div>
          <div>
            <Button onClick={signOut} disabled={!loaded}>
              <ExitIcon /> Log out
            </Button>
          </div>
        </div>
      </OutsideTrigger>
    </>
  );
};

export default UserOverlay;

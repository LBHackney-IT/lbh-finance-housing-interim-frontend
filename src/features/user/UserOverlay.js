import React from "react";
import Cookies from 'js-cookie';
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { instance } from '../../api/Api';
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
  const user = useSelector(selectUser) ?? {};
  const { name, email } = user;
  const displayClass = isDisplayed ? "" : "is-hidden";

  const signOut = () => {
    Cookies.remove('hackneyToken', { domain: '.hackney.gov.uk' });
    instance.defaults.headers.common['Authorization'] = '';
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
            <Button onClick={signOut}>
              <ExitIcon /> Log out
            </Button>
          </div>
        </div>
      </OutsideTrigger>
    </>
  );
};

export default UserOverlay;

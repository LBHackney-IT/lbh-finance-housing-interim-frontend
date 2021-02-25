import React from "react";
import { useSelector } from "react-redux";
import { NavLinkButton, Button } from "../common/components/Button";
import { CloseIcon, ExitIcon, MailIcon } from "../common/components/Icons";
import { selectUser } from "./userSlice";
import { LOGIN_PAGE } from "../RouteConstants";

const UserOverlay = ({ isDisplayed, onCloseClick }) => {
  // Get the user's details
  const { name, jobTitle } = useSelector(selectUser);
  const displayClass = isDisplayed ? "" : "is-hidden";

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
          <div className="user-job-title">{jobTitle}</div>
        </div>
        <div className="user-overlay-divider"></div>
        <div className="user-overlay-buttons">
          <div>
            <Button onClick={() => alert("Help clicked")}>
              <MailIcon /> Help
            </Button>
          </div>
          <div>
            <NavLinkButton toRoute={LOGIN_PAGE}>
              <ExitIcon /> Log out
            </NavLinkButton>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserOverlay;

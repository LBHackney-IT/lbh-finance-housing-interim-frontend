import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import HackneyLogo from "../../assets/images/hackney_logo.png";
import { NavLinkButton } from "../common/components/Button";
import { BackIcon, BackWhiteIcon } from "../common/components/Icons";
import { INDIVIDUAL_LOOKUP, OPERATING_BALANCES } from "../RouteConstants";
import UserOverlay from "../user/UserOverlay";
import { MenuIcon } from "./components/Icons";
import PageContainer from "./components/PageContainer";
import "./layout.scss";

// Navigation items
const layoutNavItems = [
  // {
  //   text: "Upload",
  //   to: UPLOAD_LIST,
  // },
  // {
  //   text: "Activity",
  //   to: ACTIVITY_PAGE,
  // },
  {
    text: "Operating Balances",
    to: OPERATING_BALANCES,
  },
  {
    text: "Individual Lookup",
    to: INDIVIDUAL_LOOKUP,
  },
];

// The navigation header component
const NavHeader = ({ Icon, onIconClick, ...props }) => {
  const hasIconClickEvent = onIconClick !== undefined;
  return (
    <div className="nav-head-cont">
      <section className="hero hero-spacer">
        <div className="level">
          <div className="level-item level-left">
            <span className="header-icon-container">
              {hasIconClickEvent ? (
                <span onClick={onIconClick}>
                  <Icon />
                </span>
              ) : (
                <Icon />
              )}
            </span>
            <img src={HackneyLogo} className="header-logo" alt="Not found" />
          </div>
        </div>
      </section>
      <section className="hero">
        <div className="hero-body page-header-nav-cont container has-text-white">
          {props.children}
        </div>
      </section>
    </div>
  );
};

// Standard page layout
const Layout = (props) => {
  // Use state to determine if our user overlay is visible
  const [userOverlayDisplay, setUserOverlayDisplay] = useState(false);

  // Handle the menu click
  const onMenuClick = () => setUserOverlayDisplay(true);

  // Handle the user overlay close click
  const onCloseClick = () => setUserOverlayDisplay(false);

  return (
    <div className="is-relative">
      <UserOverlay
        isDisplayed={userOverlayDisplay}
        onCloseClick={onCloseClick}
      />
      <NavHeader Icon={MenuIcon} onIconClick={onMenuClick}>
        {layoutNavItems.map((navItem) => {
          const { text, to } = navItem;
          return (
            <NavLink key={to} to={to} activeClassName="nav-is-active" exact>
              {text}
              <span className="nav-active-indicator"></span>
            </NavLink>
          );
        })}
      </NavHeader>
      <div>{props.children}</div>
    </div>
  );
};

// Layout for a back link page
const BackPageLayout = ({
  pageTitle,
  backToRoute = OPERATING_BALANCES,
  ...props
}) => {
  const BackPageIcon = () => {
    return (
      <NavLink to={backToRoute}>
        <BackWhiteIcon />
      </NavLink>
    );
  };

  return (
    <>
      <NavHeader Icon={BackPageIcon}>
        <span>{pageTitle}</span>
      </NavHeader>
      {props.children}
      <PageContainer>
        <NavLinkButton Icon={BackIcon} toRoute={backToRoute} className="ml-4">
          BACK
        </NavLinkButton>
      </PageContainer>
    </>
  );
};

export { Layout, BackPageLayout };

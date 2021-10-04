import { useState } from "react";
import { useSelector } from "react-redux";
import "../../assets/styles/variablestyles.scss";
import { NavLinkButton } from "../common/components/Button";
import CheckBox from "../common/components/CheckBox";
import PageContainer from "../common/components/PageContainer";
import { Layout } from "../common/Layout";
import { UPLOAD_PAGE } from "../RouteConstants";
import UploadCard from "./components/UploadCard";
import "./upload.scss";
import { selectUploads } from "./uploadSlice";
import { getStatusObject } from "./uploadStatus";

const checkBoxes = [
  {
    name: "awaitinguploadcbx",
    className: "pending-item",
    text: "Awaiting upload",
    statusId: 3,
    checked: true,
  },
  {
    name: "problemcbx",
    className: "error-item",
    text: "Problem",
    statusId: 2,
    checked: true,
  },
  {
    name: "successfulcbx",
    className: "success-item",
    text: "Successful",
    statusId: 1,
    checked: true,
  },
];

const UploadList = () => {
  // Get the uploads
  const uploads = useSelector(selectUploads);

  // Create state for checkboxes
  const [checkBoxItems, setCheckBoxes] = useState([...checkBoxes]);

  // Get the status IDs for checked boxes
  const checkedIds = checkBoxItems
    .filter((item) => item.checked === true)
    .map((item) => item.statusId);

  // Get upload cards to display
  const uploadCardsToDisplay = uploads.filter((item) =>
    checkedIds.includes(item.statusId)
  );

  // Handle a checkbox checked change
  function onCheckBoxChange({ target }) {
    const { name, checked } = target;
    const checkBoxToUpdate = checkBoxItems.find((item) => item.name === name);
    checkBoxToUpdate.checked = checked;

    setCheckBoxes((prevCheckBoxes) =>
      prevCheckBoxes.map((cbx) => (cbx.name === name ? checkBoxToUpdate : cbx))
    );
  }

  return (
    <Layout>
      <PageContainer>
        <div className="upload-cbx-options is-flex is-justify-content-flex-end">
          {checkBoxItems.map((checkbox) => {
            return (
              <CheckBox
                key={checkbox.name}
                className={checkbox.className}
                name={checkbox.name}
                text={checkbox.text}
                checked={checkbox.checked}
                onChange={onCheckBoxChange}
              />
            );
          })}
        </div>
        {uploadCardsToDisplay.map((card) => {
          const { id, title, statusId } = card;
          // Get the status details for this ID
          const { actionIcon, action, icon, text, itemClass } = getStatusObject(
            statusId
          );

          // Create an action button function for this card
          const ActionButton = () => (
            <div className="level-item level-right">
              <NavLinkButton toRoute={`${UPLOAD_PAGE}/${id}`} Icon={actionIcon}>
                {action}
              </NavLinkButton>
            </div>
          );

          return (
            <UploadCard
              key={id + "list"}
              title={title}
              StatusIcon={icon}
              statusText={text}
              statusItemClass={itemClass}
              ActionButton={ActionButton}
            />
          );
        })}
      </PageContainer>
    </Layout>
  );
};

export default UploadList;

import React from "react";
import Card from "../../common/components/Card";

const UploadCard = ({
  title,
  statusItemClass,
  statusText,
  StatusIcon,
  ActionButton,
  ...props
}) => {
  return (
    <Card className="upload-card" style={{ marginBottom: "10px" }}>
      <div className="level">
        <div
          className="upload-card-icon level-item level-left"
          style={{ maxWidth: "7%" }}
        >
          <StatusIcon />
        </div>
        <div
          className="level-item is-flex is-justify-content-left is-flex-wrap-wrap"
          style={{ maxWidth: "93%", flexShrink: 1 }}
        >
          <div style={{ width: "100%" }}>{title}</div>
          <div
            className={statusItemClass}
            style={{ marginTop: "-3px", fontSize: "13px" }}
          >
            {statusText}
          </div>
        </div>
        {ActionButton === undefined ? null : <ActionButton />}
      </div>
      {props.children}
    </Card>
  );
};

export default UploadCard;

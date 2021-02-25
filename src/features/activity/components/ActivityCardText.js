import React from "react";

const ActivityCardText = (statusId, inputObject, itemClass) => {
  const DatePart = () => (
    <span>
      at <strong className={itemClass}>{inputObject.time}</strong> on{" "}
      <strong className={itemClass}>{inputObject.date}</strong>
    </span>
  );
  let result;
  switch (statusId) {
    case 1: {
      result = (
        <>
          <strong className={itemClass}>{inputObject.fileName}</strong>
          &nbsp;was&nbsp;
          <strong className={itemClass}>flagged as successful</strong>{" "}
          <DatePart />
        </>
      );
      break;
    }
    case 2: {
      result = (
        <>
          <strong className={itemClass}>{inputObject.fileName}</strong>
          &nbsp;was&nbsp;
          <strong className={itemClass}>flagged with an error</strong>{" "}
          <DatePart />
        </>
      );
      break;
    }
    case 3: {
      result = (
        <>
          <strong className={itemClass}>{inputObject.name}</strong>
          &nbsp;uploaded&nbsp;
          <strong className={itemClass}>{inputObject.fileName}</strong>{" "}
          <DatePart />
        </>
      );
      break;
    }
    default: {
      result = <></>;
      break;
    }
  }
  return result;
};

export default ActivityCardText;

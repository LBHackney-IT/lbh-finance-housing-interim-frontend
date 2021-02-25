import React from "react";

const ActivityCardText = (statusId, inputObject) => {
  const DatePart = () => (
    <span>
      at <strong>{inputObject.time}</strong> on{" "}
      <strong>{inputObject.date}</strong>
    </span>
  );
  let result;
  switch (statusId) {
    case 1: {
      result = (
        <>
          <strong>{inputObject.fileName}</strong>&nbsp;was&nbsp;
          <strong>flagged as successful</strong> <DatePart />
        </>
      );
      break;
    }
    case 2: {
      result = (
        <>
          <strong>{inputObject.fileName}</strong>&nbsp;was&nbsp;
          <strong>flagged with an error</strong> <DatePart />
        </>
      );
      break;
    }
    case 3: {
      result = (
        <>
          <strong>{inputObject.name}</strong>&nbsp;uploaded&nbsp;
          <strong>{inputObject.fileName}</strong> <DatePart />
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

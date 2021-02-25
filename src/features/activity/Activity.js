import React from "react";
import ActivityCard from "./components/ActivityCard";
import ActivityCardText from "./components/ActivityCardText";
import PageContainer from "../common/components/PageContainer";
import { getStatusObject } from "../upload/uploadStatus";
import { ReactComponent as UploadIcon } from "../../assets/icons/icon_upload.svg";
import { Layout } from "../common/Layout";

// TODO remove
const activityCards = [
  {
    id: 1,
    title: "Test title #1",
    statusId: 1,
    inputObject: {
      fileName: "tempfile_1.xlsx",
      time: "2:44pm",
      date: "23/01/2021",
    },
  },
  {
    id: 2,
    title: "Test title #2",
    statusId: 2,
    inputObject: {
      fileName: "tempfile_1.xlsx",
      time: "2:44pm",
      date: "23/01/2021",
    },
  },
  {
    id: 3,
    title: "Test title #3",
    statusId: 3,
    inputObject: {
      name: "Joe Bloggs",
      fileName: "tempfile_1.xlsx",
      time: "2:44pm",
      date: "23/01/2021",
    },
  },
];

// Used to retrieve activity card icon
const getIcon = (statusId, statusIcon) =>
  statusId === 3 ? UploadIcon : statusIcon;

const Activity = () => {
  return (
    <Layout>
      <PageContainer>
        {activityCards.map((card) => {
          const statusObject = getStatusObject(card.statusId);
          return (
            <ActivityCard
              key={card.id}
              StatusIcon={getIcon(card.statusId, statusObject.icon)}
              statusItemClass={statusObject.statusItemClass}
              Text={ActivityCardText(card.statusId, card.inputObject)}
            />
          );
        })}
      </PageContainer>
    </Layout>
  );
};

export default Activity;

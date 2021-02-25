import React from "react";
import { ReactComponent as UploadIcon } from "../../assets/icons/icon_upload.svg";
import PageContainer from "../common/components/PageContainer";
import { Layout } from "../common/Layout";
import { getStatusObject } from "../upload/uploadStatus";
import "./activity.scss";
import ActivityCard from "./components/ActivityCard";
import ActivityCardText from "./components/ActivityCardText";

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
          const { statusId, inputObject } = card;
          const { icon, itemClass } = getStatusObject(card.statusId);
          return (
            <ActivityCard
              key={card.id}
              StatusIcon={getIcon(card.statusId, icon)}
              statusItemClass={itemClass}
              Text={ActivityCardText(statusId, inputObject, itemClass)}
            />
          );
        })}
      </PageContainer>
    </Layout>
  );
};

export default Activity;

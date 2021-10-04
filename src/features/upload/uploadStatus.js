import {
  OkIcon,
  ExpiredIcon,
  ErrorIcon,
  UploadIcon,
  SearchFolderIcon,
} from "../common/components/Icons";
import "../../assets/styles/variablestyles.scss";

const uploadActions = { UPLOAD: "UPLOAD", UPDATE: "UPDATE" };

const statuses = [
  {
    id: 1,
    icon: OkIcon,
    text: "Successful upload",
    actionIcon: SearchFolderIcon,
    action: uploadActions.UPDATE,
    itemClass: "success-item",
  },
  {
    id: 2,
    icon: ErrorIcon,
    text: "Problem with data",
    actionIcon: SearchFolderIcon,
    action: uploadActions.UPDATE,
    itemClass: "error-item",
  },
  {
    id: 3,
    icon: ExpiredIcon,
    text: "Awaiting upload",
    actionIcon: UploadIcon,
    action: uploadActions.UPLOAD,
    itemClass: "pending-item",
  },
];

const getStatusObject = (statusId) =>
  statuses.filter((item) => item.id === statusId)[0];

export { uploadActions, getStatusObject };

import PageContainer from "../common/components/PageContainer";
import UploadCard from "./components/UploadCard";
import { uploadActions, getStatusObject } from "./uploadStatus";
import { Button } from "../common/components/Button";
import { SearchFolderIcon } from "../common/components/Icons";
import { BackPageLayout } from "../common/Layout";
import { useParams } from "react-router-dom";
import { selectUploads } from "./uploadSlice";
import { useSelector } from "react-redux";
import { toProperCase } from "../common/functions/Helpers";
import { UPLOAD_LIST } from "../RouteConstants";

const Upload = (props) => {
  const params = useParams();
  const id = parseInt(params.id);
  const upload = useSelector(selectUploads).find((upItem) => upItem.id === id);

  if (upload === undefined) {
    props.history.push(UPLOAD_LIST);
  }

  const { title, statusId } = upload;
  const statusObject = getStatusObject(statusId);

  // Determine the file button text
  let fileButtonText;
  switch (statusObject.action) {
    case uploadActions.UPLOAD: {
      fileButtonText = "SELECT FILE TO UPLOAD";
      break;
    }
    default: {
      fileButtonText = "UPDATE WITH NEW FILE";
      break;
    }
  }

  // Determine the status text
  let statusText = statusObject.text;
  if (statusObject.id === 2) {
    statusText = (
      <>
        <strong className="error-item">Data rejected with:</strong>
        <div>{upload.information}</div>
      </>
    );
  }

  // Handle button click
  const onButtonClick = () => {
    alert("File upload");
  };

  return (
    <BackPageLayout
      pageTitle={`${toProperCase(statusObject.action)}: ${title}`}
    >
      <PageContainer>
        <UploadCard
          title={title}
          StatusIcon={statusObject.icon}
          statusItemClass={statusObject.itemClass}
          statusText={statusText}
        >
          <div className="level" style={{ width: "100%", marginTop: "-10px" }}>
            <div
              className="level-item level-left"
              style={{ maxWidth: "7%" }}
            ></div>
            <div className="level-item is-flex is-justify-content-left">
              <Button Icon={SearchFolderIcon} onClick={onButtonClick}>
                {fileButtonText}
              </Button>
            </div>
          </div>
        </UploadCard>
      </PageContainer>
    </BackPageLayout>
  );
};

export default Upload;

import PageContainer from "./PageContainer";
import "./assets/pageHeader.scss";

const PageHeader = ({ children }) => {
  return (
    <div className="page-header">
      <PageContainer>
        <h1 className="page-title">{children}</h1>
      </PageContainer>
    </div>
  );
};

export default PageHeader;

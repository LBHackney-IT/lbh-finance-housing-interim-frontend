import PageContainer from "./PageContainer";
import "./assets/pageHeader.scss";

const PageHeader = ({ children, noBg, Icon }) => {
  return (
    <div className={"page-header" + (noBg ? " no-bg-colour" : "")}>
      <PageContainer>
        <div className="page-header-contents">
          {Icon ? <Icon /> : null}
          <h1 className="page-title">{children}</h1>
        </div>
      </PageContainer>
    </div>
  );
};

export default PageHeader;

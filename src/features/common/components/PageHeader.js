import PageContainer from "./PageContainer";
import "./assets/pageHeader.scss";

const PageHeader = ({ children, noBg, Icon, className }) => {
  return (
    <div className={"page-header" + (noBg ? " no-bg-colour" : "") + (className ? ` ${className}` : '')}>
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

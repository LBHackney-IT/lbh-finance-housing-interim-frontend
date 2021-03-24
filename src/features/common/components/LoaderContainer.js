import "./assets/loaderContainer.scss";

const LoaderContainer = ({
  children,
  isLoading = false,
  minHeight = "50px",
}) => {
  const className = "loader-wrapper" + (isLoading ? " is-active" : "");
  return (
    <div className="is-relative" style={{ minHeight }}>
      <div className={className}>
        <div className="loader is-loading"></div>
      </div>
      {children}
    </div>
  );
};

export default LoaderContainer;

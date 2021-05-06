import "./assets/loaderContainer.scss";

const LoaderContainer = ({
  children,
  isLoading = false,
  minHeight = "50px",
  valueChecks = [],
}) => {
  if (!isLoading && valueChecks.length > 0) {
    valueChecks.forEach((valueCheckItem) => {
      isLoading = valueCheckItem === undefined || valueCheckItem === null;

      if (isLoading) {
        return;
      }
    });
  }

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

const PageContainer = ({ className, style, ...props }) => {
  style = style === undefined ? {} : style;
  className = className === undefined ? "" : className;
  return (
    <div className={"container page-comp-cont " + className} style={style}>
      {props.children}
    </div>
  );
};

export default PageContainer;

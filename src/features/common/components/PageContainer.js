const PageContainer = ({ className = "", style = {}, ...props }) => {
  return (
    <div className={"container page-comp-cont " + className} style={style}>
      {props.children}
    </div>
  );
};

export default PageContainer;

const Card = ({ className, style, ...props }) => {
  className = className === undefined ? "" : className;
  style = style === undefined ? {} : style;
  return (
    <div className={`card box ${className}`} style={style}>
      {props.children}
    </div>
  );
};

export default Card;

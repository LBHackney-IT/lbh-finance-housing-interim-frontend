const Card = ({ className = "", style = {}, ...props }) => {
  return (
    <div className={`card box ${className}`} style={style}>
      {props.children}
    </div>
  );
};

export default Card;

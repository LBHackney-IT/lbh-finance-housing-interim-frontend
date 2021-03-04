const PriceSummary = ({ price, subtitle, colour = "", size = 3 }) => {
  // Create size class
  size = `is-size-${size}`;
  return (
    <div className={"price-summary " + size}>
      <h1 className="price" style={{ color: colour }}>
        {price}
      </h1>
      <h5 className="is-size-6 pending-item">{subtitle}</h5>
    </div>
  );
};

export default PriceSummary;

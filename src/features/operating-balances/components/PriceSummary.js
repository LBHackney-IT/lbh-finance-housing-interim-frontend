const PriceSummary = ({ price, subtitle, colour, size }) => {
  // Create size class
  size = size === undefined ? "3" : size;
  size = "is-size-" + size;

  colour = colour === undefined ? "" : colour;
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

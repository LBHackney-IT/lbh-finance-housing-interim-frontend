import Card from "../../common/components/Card";

const ActivityCard = ({ StatusIcon, statusItemClass, Text }) => {
  const className = statusItemClass + "upload-card";
  return (
    <Card className={className} style={{ marginBottom: "10px" }}>
      <div className="columns is-vcentered">
        <div className="column" style={{ maxWidth: "7%" }}>
          <StatusIcon />
        </div>
        <div className="column">{Text}</div>
      </div>
    </Card>
  );
};

export default ActivityCard;

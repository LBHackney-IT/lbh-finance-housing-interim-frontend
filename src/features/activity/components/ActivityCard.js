import Card from "../../common/components/Card";

const ActivityCard = ({ StatusIcon, statusItemClass, Text }) => {
  return (
    <Card className={`${statusItemClass} activity-card`}>
      <div className="columns">
        <div className="column icon-col">
          <StatusIcon />
        </div>
        <div className="column">{Text}</div>
      </div>
    </Card>
  );
};

export default ActivityCard;

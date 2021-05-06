import { Button } from "./Button";
import Card from "./Card";
import DatePick from "./DatePick";
import { ArrowRightIcon, DownloadIcon } from "./Icons";
import { VerticalDivider } from "./Divider";
import "./assets/dateRangeSearchBar.scss";

const DateRangeSearchBar = ({
  startDate,
  setStartDate,
  endDate,
  setEndDate,
}) => {
  return (
    <Card className="date-range-search-bar">
      <div className="bar-component-cont">
        <label>Date:</label>
        <div className="ml-3">
          <DatePick setDate={setStartDate} dateValue={startDate} />
        </div>
        <div className="ml-3">
          <ArrowRightIcon />
        </div>
        <div className="ml-3">
          <DatePick setDate={setEndDate} dateValue={endDate} />
        </div>
      </div>
      <div className="bar-component-cont">
        <VerticalDivider />
        <label className="mr-5">Export Table:</label>
        <div className="search-btn">
          <Button Icon={DownloadIcon} onClick={() => alert("")}>
            CSV
          </Button>
        </div>
      </div>
    </Card>
  );
};

export default DateRangeSearchBar;

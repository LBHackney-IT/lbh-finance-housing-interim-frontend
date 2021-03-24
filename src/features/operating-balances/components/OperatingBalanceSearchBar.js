import { Button } from "../../common/components/Button";
import Card from "../../common/components/Card";
import DatePick from "../../common/components/DatePick";
import { ArrowRightIcon, DownloadIcon } from "../../common/components/Icons";
import { VerticalDivider } from "../../common/components/Divider";

const OperatingBalanceSearchBar = ({
  startDate,
  setStartDate,
  endDate,
  setEndDate,
}) => {
  return (
    <Card>
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

export default OperatingBalanceSearchBar;

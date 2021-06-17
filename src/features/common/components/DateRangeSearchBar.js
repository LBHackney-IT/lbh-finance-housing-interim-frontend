import { Button } from "./Button";
import Card from "./Card";
import DatePick from "./DatePick";
import { ArrowRightIcon, DownloadIcon } from "./Icons";
import { VerticalDivider } from "./Divider";
import "./assets/dateRangeSearchBar.scss";
import { useState } from "react";
import Select from "../components/Select";

const modes = [
  { id: 1, label: "OR SELECT BY WEEK NUMBER" },
  { id: 2, label: "OR SELECT BY DATE RANGE" },
];

const DateRangeSearchBar = ({
  startDate,
  setStartDate,
  endDate,
  setEndDate,
  mode = 1,
  showMode = false,
  setMode = () => {},
  startWeekNo,
  endWeekNo,
  startYearNo,
  endYearNo,
  setStartWeekNo = () => {},
  setEndWeekNo = () => {},
  setStartYearNo = () => {},
  setEndYearNo = () => {},
}) => {
  const selectedMode = modes.find((item) => item.id === mode);
  const [currentMode, setCurrentMode] = useState(selectedMode);

  const weekNumbers = [];

  for (let i = 1; i <= 52; i++) {
    weekNumbers.push(i);
  }

  const years = [];

  for (let i = 2015; i <= 2021; i++) {
    years.push(i);
  }

  const changeMode = () => {
    const oppositeMode = modes.find((item) => item.id !== currentMode.id);
    setCurrentMode(oppositeMode);
    setMode(oppositeMode.id);
  };

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
      {/* {mode.id === 1 ? (
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
      ) : (
        <div className="bar-component-cont">
          <label>Weeks:</label>
          <div className="ml-3">
            <Select
              options={weekNumbers.map((weekNumberItem) => {
                return {
                  value: weekNumberItem,
                  text: `Week: ${weekNumberItem}`,
                };
              })}
              onChange={(option) => setStartWeekNo(option.value)}
            />

            <Select
              options={years.map((yearItem) => {
                return {
                  value: yearItem,
                  text: yearItem,
                };
              })}
              onChange={(option) => setStartWeekNo(option.value)}
            />
          </div>
          <div className="ml-3">
            <ArrowRightIcon />
          </div>
          <div className="ml-3">
            <DatePick setDate={setEndDate} dateValue={endDate} />
          </div>
        </div>
      )} */}

      {showMode ? (
        <div className="bar-component-cont ml-auto">
          <Button onClick={changeMode}>{currentMode.label}</Button>
        </div>
      ) : null}

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

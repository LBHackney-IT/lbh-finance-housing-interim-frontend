import { useState } from "react";
import "./assets/select.scss";
import Card from "./Card";
import { HorizontalDivider } from "./Divider";
import { DropDownIcon } from "./Icons";
import OutisdeTrigger from "./OutsideTrigger";

const Select = ({ selectedValue, options }) => {
  let selectedOption = options.find((item) => item.value === selectedValue);
  selectedOption = selectedOption === undefined ? options[0] : selectedOption;
  const optionsCount = options.length;

  // State
  const [currentOption, setCurrentOption] = useState(selectedOption);
  const [dropDownDisplayed, setDropDownDisplayed] = useState(false);

  return (
    <OutisdeTrigger onClick={() => setDropDownDisplayed(false)}>
      <div
        className="select is-clickable"
        onClick={() => setDropDownDisplayed(!dropDownDisplayed)}
        data-selected-value={currentOption.value}
      >
        <div className="level">
          <div className="level-item level-left">{currentOption.text}</div>
          <div className="level-item level-right select-icon">
            <DropDownIcon />
          </div>
        </div>
        <Card
          className={
            "select-options " + (dropDownDisplayed ? "" : "options-hidden")
          }
        >
          {options.map((option, index) => {
            return (
              <div key={option.value}>
                <div
                  className="select-option"
                  value={option.value}
                  onClick={() => setCurrentOption(option)}
                >
                  {option.text}
                </div>
                {index + 1 === optionsCount ? null : <HorizontalDivider />}
              </div>
            );
          })}
        </Card>
      </div>
    </OutisdeTrigger>
  );
};

export default Select;

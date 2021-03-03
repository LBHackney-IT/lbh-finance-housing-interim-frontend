import { SearchIcon } from "../../common/components/Icons";
import { VerticalDivider } from "../../common/components/Divider";
import { Button } from "../../common/components/Button";
import Select from "../../common/components/Select";
import Input from "../../common/components/Input";
import { useState } from "react";

// TODO remove / alter
const selectOptions = [
  { value: 1, text: "by PRN Number" },
  { value: 2, text: "by ABC Number" },
  { value: 3, text: "by XYZ Number" },
];

const FindPropertySearchBar = ({ onClick }) => {
  // State
  const [inputValue, setInputValue] = useState("");

  const onInputChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <div className="card box search-items-cont">
      <SearchIcon />
      <div>
        <VerticalDivider />
      </div>
      <div className="search-options">
        <Select options={selectOptions} selectedValue={1} />
      </div>
      <div>
        <VerticalDivider />
      </div>
      <Input
        onChange={onInputChange}
        name="propSearchInput"
        value={inputValue}
        placeholder="0123456789"
        onEnterKey={() => onClick(inputValue)}
      />
      <div className="search-btn">
        <Button onClick={() => onClick(inputValue)}>GO</Button>
      </div>
    </div>
  );
};

export default FindPropertySearchBar;

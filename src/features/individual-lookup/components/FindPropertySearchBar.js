import { useState } from "react";
import { Button } from "../../common/components/Button";
import Card from "../../common/components/Card";
import { VerticalDivider } from "../../common/components/Divider";
import { SearchIcon } from "../../common/components/Icons";
import Input from "../../common/components/Input";
import Select from "../../common/components/Select";

const FindPropertySearchBar = ({
  onClick,
  onSearchChange,
  searchType,
  search = "",
  searchOptions,
}) => {
  // State
  const [inputValue, setInputValue] = useState(search);

  const onInputChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <Card className="search-items-cont">
      <SearchIcon />
      <div>
        <VerticalDivider />
      </div>
      <div className="search-options">
        <Select
          options={searchOptions}
          selectedValue={searchType}
          onChange={onSearchChange}
        />
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
    </Card>
  );
};

export default FindPropertySearchBar;

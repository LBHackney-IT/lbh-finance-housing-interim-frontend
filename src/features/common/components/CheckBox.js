import React from "react";

const CheckBox = ({ name, text, checked, onChange, className }) => {
  return (
    <label className={className + " checkbox"}>
      {text}
      <input
        type="checkbox"
        name={name}
        checked={checked}
        onChange={onChange}
      />
    </label>
  );
};

export default CheckBox;

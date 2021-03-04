import "./assets/input.scss";

const Input = ({
  label,
  name,
  value = "",
  placeholder = "",
  onChange = {},
  onEnterKey = {},
}) => {
  const handleChange = (event) => {
    onChange(event);
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      onEnterKey(event);
    }
  };

  return (
    <div className="input-control">
      {label === undefined ? null : (
        <label className="label" htmlFor={name}>
          {label}
        </label>
      )}
      <div className="control">
        <input
          className="input"
          onChange={handleChange}
          onKeyDown={handleKeyDown}
          name={name}
          value={value}
          placeholder={placeholder}
        />
      </div>
    </div>
  );
};

export default Input;

import PropTypes from "prop-types";
import { useState, useEffect } from "react";
import { Select, SelectItem } from "@nextui-org/react";

const CustomSelection = ({
  options = [],
  onChange = (f) => f,
  isLoading = false,
  defaultValue = null,
  disabled = false,
  label = "",
  mode = "",
}) => {
  const [selectedOption, setSelectedOption] = useState(defaultValue || "");

  useEffect(() => {
    if (defaultValue !== null && selectedOption === "") {
      setSelectedOption(defaultValue);
    }
  }, [defaultValue, selectedOption]);

  const handleSelectChange = (selectedValue) => {
    setSelectedOption(selectedValue);
    onChange(selectedValue);
  };

  console.log("selection in options category is ", options);
  console.log("selection in options default value is ", defaultValue);

  return (
    <>
      <Select
        radius="md"
        variant="bordered"
        isDisabled={mode === "View" || mode === "Delete"}
        selectedKeys={[selectedOption]}
        label={label}
        disabled={disabled}
        size="md"
        placeholder="Select an option"
        classNames={{
          base: "max-w-xs",
          trigger: "h-10 rounded-md",
        }}
        labelPlacement="outside"
        aria-label="Select option"
        onChange={(e) => handleSelectChange(e.target.value)}
      >
        {isLoading ? (
          <SelectItem>Loading...</SelectItem>
        ) : (
          options.map((option) => (
            <SelectItem
              key={option.id}
              value={option.id}
              className={option.code ? "w-full" : ""}
            >
              {option.name + (option.code ? `(${option.code})` : "")}
            </SelectItem>
          ))
        )}
      </Select>
    </>
  );
};

CustomSelection.propTypes = {
  options: PropTypes.arrayOf(PropTypes.object).isRequired,
  onChange: PropTypes.func.isRequired,
  isLoading: PropTypes.bool,
  defaultValue: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  disabled: PropTypes.bool,
  label: PropTypes.string,
  mode: PropTypes.string,
};

export default CustomSelection;

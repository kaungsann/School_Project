import PropTypes from "prop-types";
import { useState } from "react";
import { Select, SelectItem } from "@nextui-org/react";

const CustomSelection = ({
  options = [],
  onChange = (f) => f,
  isLoading = false,
  defaultValue = "",
  disabled = false,
  label = "",
  mode = "",
}) => {
  const [selectedOption, setSelectedOption] = useState("");

  console.log("category option is a", options);

  console.log("category defaultValue is a", defaultValue);

  const handleSelectChange = (selectedValue) => {
    setSelectedOption(selectedValue);
    onChange(selectedValue);
  };

  return (
    <>
      <Select
        radius="md"
        variant="bordered"
        isDisabled={mode === "View" || mode === "Delete"}
        selectedKeys={selectedOption ? [selectedOption] : []}
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
            <SelectItem key={option.id} value={option.id}>
              {option.name}
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
  isLoading: PropTypes.bool.isRequired,
  defaultValue: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  disabled: PropTypes.bool,
  label: PropTypes.string,
  mode: PropTypes.string,
};

export default CustomSelection;

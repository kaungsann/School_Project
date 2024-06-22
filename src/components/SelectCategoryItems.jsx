import PropTypes from "prop-types";
import { useGetCategoriesQuery } from "../services/categoryApi";
import CustomSelection from "./CustomSelection";

export default function SelectCategoryItems({ value, onChange, mode }) {
  const { data, isLoading, isSuccess } = useGetCategoriesQuery();

  return (
    <>
      {isSuccess && (
        <CustomSelection
          options={data}
          onChange={onChange}
          isLoading={isLoading}
          defaultValue={value}
          label="Category"
          mode={mode}
        />
      )}
    </>
  );
}

SelectCategoryItems.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
  mode: PropTypes.string,
};

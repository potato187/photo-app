import PropTypes from "prop-types";
import React from "react";
import Select from "react-select";
import { FormGroup } from "reactstrap";

SelectField.propTypes = {
  field: PropTypes.object.isRequired, // formik field
  form: PropTypes.object.isRequired, // formik form

  label: PropTypes.string,
  placeholder: PropTypes.string,
  disable: PropTypes.bool,
  options: PropTypes.array,
};

SelectField.defaultProps = {
  label: "",
  placeholder: "",
  disable: false,
  options: [],
};

function SelectField(props) {
  const { field, label, placeholder, disable, options } = props;

  const { name, value } = field;

  const selectOption = options.find((option) => option.value === value);

  function handleSelectedOptionChange(selectOption) {
    const selectValue = selectOption ? selectOption.value : selectOption;

    const changeEvent = {
      target: {
        name: name,
        value: selectValue,
      },
    };

    field.onChange(changeEvent);
  }
  return (
    <FormGroup>
      {label && <label name={name}>{label}</label>}
      <Select
        id={name}
        {...field}
        value={selectOption}
        onChange={handleSelectedOptionChange}
        placeholder={placeholder}
        isDisabled={disable}
        options={options}
      />
    </FormGroup>
  );
}

export default SelectField;

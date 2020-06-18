import PropTypes from "prop-types";
import React from "react";
import Select from "react-select";
import { FormGroup, FormFeedback } from "reactstrap";
import { ErrorMessage } from "formik";

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
  const { field, form, label, placeholder, disable, options } = props;
  const { errors, touched } = form;
  const { name, value } = field;
  const showError = errors[name] && touched[name];
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
        className={showError ? "is-invalid" : ""}
      />
      <ErrorMessage name={name} component={FormFeedback} />
    </FormGroup>
  );
}

export default SelectField;

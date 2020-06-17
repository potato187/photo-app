import PropTypes from "prop-types";
import React from "react";
import { FormGroup, Input } from "reactstrap";

InputField.propTypes = {
  field: PropTypes.object.isRequired, // formik field
  form: PropTypes.object.isRequired, // formik form

  type: PropTypes.string,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  disable: PropTypes.bool,
};

InputField.defaultProps = {
  type: "text",
  label: "",
  placeholder: "",
  disable: false,
};

function InputField(props) {
  const { field, type, label, placeholder, disable } = props; //fast field of formik
  const { name, value, onChange, onBlur } = field; // important
  return (
    <FormGroup>
      {label && <label for={name}>{label}</label>}
      <Input
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        // {...field}
        type={type}
        disabled={disable}
        placeholder={placeholder}
      />
    </FormGroup>
  );
}

export default InputField;

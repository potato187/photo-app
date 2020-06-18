/* eslint-disable no-unused-expressions */
import { PHOTO_CATEGORY_OPTIONS } from "constants/global";
import InputField from "custom-field/InputField";
import RandomPhotoField from "custom-field/RandomPhotoField";
import SelectField from "custom-field/SelectField";
import { FastField, Form, Formik } from "formik";
import propTypes from "prop-types";
import React from "react";
import { Button, FormGroup } from "reactstrap";
import * as Yup from "yup";

PhotoForm.propTypes = {
  onSubmit: propTypes.func,
};

PhotoForm.defaultProps = {
  onSubmit: null,
};

const validationSchema = Yup.object().shape({
  title: Yup.string().required("This field is required"),
  categoryId: Yup.number().required("This field is required").nullable(),
  photo: Yup.string().when("categoryId", {
    is: 1,
    then: Yup.string().required("This field is required"),
    otherwise: Yup.string().notRequired(),
  }),
});

function PhotoForm(props) {
  const initialValues = {
    title: "",
    categoryId: null,
    photo: "",
  };
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={(values) => console.log("Submit", values)}
    >
      {(formikProps) => {
        const { values, errors, touched } = formikProps;
        console.log(values, errors, touched);
        return (
          <Form>
            <FastField
              name="title"
              component={InputField}
              Label="title"
              placeholder="Eg: wow nature ..."
            />

            <FastField
              name="categoryId"
              component={SelectField}
              label="Category"
              options={PHOTO_CATEGORY_OPTIONS}
              placeholder="What's your photo category ?"
            />
            <FastField
              name="photo"
              component={RandomPhotoField}
              label="Photo"
            />

            <FormGroup>
              <Button color="primary" type="submit">
                Add to album{" "}
              </Button>
            </FormGroup>
          </Form>
        );
      }}
    </Formik>
  );
}

export default PhotoForm;

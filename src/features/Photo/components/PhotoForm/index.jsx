/* eslint-disable no-unused-expressions */
import { PHOTO_CATEGORY_OPTIONS } from "constants/global";
import InputField from "custom-field/InputField";
import SelectField from "custom-field/SelectField";
import { FastField, Form, Formik } from "formik";
import React from "react";
import RandomPhotoField from "custom-field/RandomPhotoField";
PhotoForm.propTypes = {};

function PhotoForm(props) {
  const initialValues = {
    title: "",
    categoryId: null,
  };
  return (
    <Formik initialValues={initialValues}>
      {(formikProps) => {
        const { values, errors, touched } = formikProps;
        console.log({ values, errors, touched });
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
          </Form>
        );
      }}
    </Formik>
  );
}

export default PhotoForm;

import React from "react";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import { PHOTO_CATEGORY_OPTIONS } from "../../../../constants/global";
import Select from "react-select";
PhotoForm.propTypes = {};

function PhotoForm(props) {
  return (
    <Form>
      <FormGroup>
        <Label for="titleId">Title</Label>
        <Input name="title" id="titleId" placeholder="Eg: wow nature ..." />
      </FormGroup>

      <FormGroup>
        <Label for="categoryId">Category</Label>
        <Select
          name="categoryId"
          id="categoryId"
          placeholder="What's your photo category ? "
          options={PHOTO_CATEGORY_OPTIONS}
        />
      </FormGroup>
      <FormGroup>
        <Button color="primary">Add to album</Button>
      </FormGroup>
    </Form>
  );
}

export default PhotoForm;

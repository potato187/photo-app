import React from "react";
import "./AddEdit.scss";
import PhotoForm from "features/Photo/components/PhotoForm";
import Banner from "components/Banner";

function AddEditPage(props) {
  return (
    <div className="photo-edit">
      <Banner title="Pick your amazing photo"></Banner>
      <div className="photo-edit__form">
        <PhotoForm />
      </div>
    </div>
  );
}

export default AddEditPage;

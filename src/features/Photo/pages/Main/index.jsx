import React from "react";
import { Container } from "reactstrap";
import { Link } from "react-router-dom";
import Images from "constants/images";
import Banner from "components/Banner";

function MainPage(props) {
  return (
    <div className="photo-main">
      <Banner
        title="Your awesome photos"
        backgroundUrl={Images.PINK_BG}
      ></Banner>
      <Container className="text-center">
        <Link to="/photos/add">Add new photo</Link>
      </Container>
    </div>
  );
}

export default MainPage;

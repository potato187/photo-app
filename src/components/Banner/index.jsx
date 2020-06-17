import React from "react";
import PropTypes from "prop-types";
import "./Banner.scss";

Banner.propTypes = {
  title: PropTypes.string,
  backgroundUrl: PropTypes.string,
};

Banner.defaultProps = {
  title: "",
  backgroundUrl: "",
};

function Banner(props) {
  const { title, backgroundUrl } = props;
  console.log(title, backgroundUrl);
  const bannerStyler = backgroundUrl
    ? { backgroundImage: `url(${backgroundUrl})` }
    : {};
  return (
    <section className="banner" style={bannerStyler}>
      <h1 className="banner__title">{title}</h1>
    </section>
  );
}

export default Banner;

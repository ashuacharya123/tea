import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import garden from "../Assets/mobile/Mobile_Mask Group.png";

const Details = () => {
  AOS.init();
  return (
    <div className="details__container">
      <div className="details__container__content">
        <div className="details__container__content__text ml2 mr2">
          We handpick tea leaves for the best quality
        </div>
        <div className="details__container__content__image ml2">
          <img src={garden} alt="" />
        </div>
        <div
          className="details__container__content__paragraph ml2 mr2"
          data-aos="fade-up"
          // data-aos-offset="200"
          data-aos-delay="1"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
          data-aos-mirror="true"
          data-aos-once="false"
          data-aos-anchor-placement="top-center"
        >
          Our own scientifically gardened tea garden,where the tea plants are
          grown organically without any chemical fertilizer leaves you with the
          best taste across the globe.
        </div>
      </div>
    </div>
  );
};

export default Details;

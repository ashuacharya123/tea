import React from "react";

import garden from "../Assets/mobile/Mobile_Mask Group.png";

const Details = () => {
  return (
    <div className="details__container">
      <div className="details__container__content">
        <div className="details__container__content__text ml2 mr2">
          We handpick tea leaves for the best quality
        </div>
        <div className="details__container__content__image ml2">
          <img src={garden} alt="" />
        </div>
        <div className="details__container__content__paragraph ml2 mr2">
          Our own scientifically gardened tea garden,where the tea plants are
          grown organically without any chemical fertilizer leaves you with the
          best taste across the globe.
        </div>
      </div>
    </div>
  );
};

export default Details;

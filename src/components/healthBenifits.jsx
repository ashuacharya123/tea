import React from "react";
import health from "../Assets/icons/Heathbenifits.svg";

const HealthBenifits = () => {
  return (
    <div className="health__container">
      <div className="health__container__content">
        <div className="health__container__content__text ml2 mr2">
          Health Benefits of Herbal Tea
        </div>
        <div
          className="health__container__content__health"
          data-aos="fade-right"
          // data-aos-offset="200"
          data-aos-delay="10"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
          data-aos-mirror="true"
          data-aos-once="false"
          data-aos-anchor-placement="top-center"
        >
          <img src={health} alt="Health Benifits" />
        </div>
      </div>
    </div>
  );
};

export default HealthBenifits;

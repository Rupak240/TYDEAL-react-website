import React, { Fragment } from "react";
import HeroSection from "../../HeroSection";
import { homeObjFour, homeObjOne, homeObjThree, homeObjTwo } from "./Data";

const Services = () => {
  return (
    <Fragment>
      <HeroSection {...homeObjOne} />
      <HeroSection {...homeObjTwo} />
      <HeroSection {...homeObjThree} />
      <HeroSection {...homeObjFour} />
      {/* <Pricing /> */}
    </Fragment>
  );
};

export default Services;

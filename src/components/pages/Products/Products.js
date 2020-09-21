import React, { Fragment } from "react";
import HeroSection from "../../HeroSection";
import Pricing from "../../Pricing";
import { homeObjFour, homeObjThree, homeObjTwo } from "./Data";

const Products = () => {
  return (
    <Fragment>
      <HeroSection {...homeObjThree} />
      <Pricing />
      <HeroSection {...homeObjTwo} />
      <HeroSection {...homeObjFour} />
    </Fragment>
  );
};

export default Products;

import React, { Fragment } from "react";
import HeroSection from "../../HeroSection";
import { homeObjThree } from "./Data";

const SignUp = () => {
  return (
    <Fragment>
      <HeroSection {...homeObjThree} />
    </Fragment>
  );
};

export default SignUp;

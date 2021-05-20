import React from "react";
import { Element } from "react-scroll";

import PageWrapper from "../components/PageWrapper";
import Hero from "../sections/landing1/Hero";
import Works from "../sections/landing1/Works";
import Availability from "../components/Availability/Availability";
import Contact from "../sections/landing1/Contact";

const IndexPage = () => {
  return (
    <>
      <PageWrapper>
        <Hero />
        <Element name="works">
          <Works /> 
        </Element>
       
        <Element name="availability">
          <Availability /> 
        </Element>

        <Contact />
      </PageWrapper>
    </>
  );
};
export default IndexPage;

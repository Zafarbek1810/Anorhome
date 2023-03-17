import React from "react";
import Container from "../../../Common/Container";
import MyLink from "../../../Common/MyLink";
import { ThirdSectionWrapper } from "./ThirdSection.style";

const ThirdSection = () => {
  return (
    <ThirdSectionWrapper>
      <div className="title">
        <Container>
          <h3>Projects</h3>
        </Container>
      </div>
      <Container style={{ paddingTop: 90, paddingBottom: 90 }}>
        <div className="wrap">
          <div className="left">
            <h5 className="subtitle">Architecture Consulting</h5>
            <h3 className="titles">Dream House Building</h3>
            <p className="descr">
              Lorem ipsum dolor sit amet consectetur. Luctus in montes
              pellentesque proin neque pellentesque suspendisse sit. Proin ut at
              tortor nulla quam arcu{" "}
            </p>
            <div className="btns">
              <MyLink to="/#">Learn More</MyLink>
              <MyLink to="/#">See All</MyLink>
            </div>
          </div>
          <div className="right"></div>
        </div>
      </Container>
    </ThirdSectionWrapper>
  );
};

export default ThirdSection;

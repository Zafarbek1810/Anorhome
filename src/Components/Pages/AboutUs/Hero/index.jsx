import React from "react";
import Container from "../../../Common/Container/index";
import { HeroWrapper } from "./HeroWrapper.style";
import Tilt from "react-parallax-tilt";
const Hero = () => {
  return (
    <HeroWrapper>
      <Container>
        <div className="wrapper">
          <div className="left">
            <h2>We Make It Reality</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur. Lectus purus in nec lectus
              fusce orci nulla viverra consectetur est.  
            </p>
          </div>
          <div className="right">
            <div className="right__first">
              <div className="right__box-white">
                <span>
                  <img src="/aboutUs/building.svg" alt="Building svg" />
                </span>
                <h3>200+</h3>
                <p>Trusted Clients</p>
                <div className="arrow-white"></div>
              </div>

              <div className="right__box-red">
                <span>
                  <img src="/aboutUs/money.svg" alt="Money svg" />
                </span>
                <h3>1234241</h3>
                <p>Happy Families</p>
                <div className="arrow-red"></div>
              </div>
            </div>
            <div className="right__second">
              <div className="right__box-red2">
                <span>
                  <img src="/aboutUs/family.svg" alt="Family svg" />
                </span>
                <h3>$9.922mln</h3>
                <p>Total Revenue</p>
                <div className="arrow-red"></div>
              </div>

              <div className="right__box-white2">
                <span>
                  <img src="/aboutUs/projects.svg" alt="Projects svg" />
                </span>
                <h3>300+</h3>
                <p>Completed Projects</p>
                <div className="arrow-white"></div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </HeroWrapper>
  );
};
export default Hero;

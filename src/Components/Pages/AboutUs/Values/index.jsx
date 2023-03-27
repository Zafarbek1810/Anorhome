import React, { useEffect } from "react";
import AOS from "aos"
import Container from "../../../Common/Container";
import { ValuesWrapper } from "./valuesWrapper.style";

const ValuesSection = () => {

  useEffect(() => {
    AOS.init({ duration: 1500, once: true});
    AOS.refresh();
  }, []);

  return (
    <ValuesWrapper>
      <div className="title" data-aos={"fade-in"}>
        <Container>
          <h3>Our Values</h3>
        </Container>
      </div>
      <Container>
        <section>

          <div className="box__wrapper">
            <div className="boxes" data-aos={"fade-right"}> 
             
              <img src="/aboutUs/confidence.svg" alt="Confidence Svg" />
              <h3>Confidence</h3>
              <p>Lorem ipsum dolor sit amet consectetur. Sit nulla lectus quis rhoncus scelerisque venenatis luctus nunc. Sc</p>
             
            </div>
            <div className="boxes" data-aos={"fade-right"}>
              <img src="/aboutUs/truthworth.svg" alt="Trustworthy Svg" />
              <h3>Trustworthy</h3>
              <p>Lorem ipsum dolor sit amet consectetur. Sit nulla lectus quis rhoncus scelerisque venenatis luctus nunc. Sc</p>
            </div>
            <div className="boxes" data-aos={"fade-left"}>
              <img src="/aboutUs/world.svg" alt="Global Vision Svg" />
              <h3>Global Vision</h3>
              <p>Lorem ipsum dolor sit amet consectetur. Sit nulla lectus quis rhoncus scelerisque venenatis luctus nunc. Sc</p>
            </div>
            <div className="boxes" data-aos={"fade-left"}>
              <img src="/aboutUs/rise.svg" alt="Constant Rise Svg" />
              <h3>Constant Rise</h3>
              <p>Lorem ipsum dolor sit amet consectetur. Sit nulla lectus quis rhoncus scelerisque venenatis luctus nunc. Sc</p>
            </div>
          </div>
        </section>
      </Container>
    </ValuesWrapper>
  );
};

export default ValuesSection;

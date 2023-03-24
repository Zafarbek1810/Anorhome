import React from "react";
import Container from "../../../Common/Container";
import { ValuesWrapper } from "./valuesWrapper.style";

const ValuesSection = () => {
  return (
    <ValuesWrapper>
      <div className="title">
        <Container>
          <h3>Our Values</h3>
        </Container>
      </div>
      <Container>
        <section>

          <div className="box__wrapper">
            <div className="boxes">
             
              <img src="/aboutUs/confidence.svg" alt="Confidence Svg" />
              <h3>Confidence</h3>
              <p>Lorem ipsum dolor sit amet consectetur. Sit nulla lectus quis rhoncus scelerisque venenatis luctus nunc. Sc</p>
             
            </div>
            <div className="boxes">
              <img src="/aboutUs/truthworth.svg" alt="Trustworthy Svg" />
              <h3>Trustworthy</h3>
              <p>Lorem ipsum dolor sit amet consectetur. Sit nulla lectus quis rhoncus scelerisque venenatis luctus nunc. Sc</p>
            </div>
            <div className="boxes">
              <img src="/aboutUs/world.svg" alt="Global Vision Svg" />
              <h3>Global Vision</h3>
              <p>Lorem ipsum dolor sit amet consectetur. Sit nulla lectus quis rhoncus scelerisque venenatis luctus nunc. Sc</p>
            </div>
            <div className="boxes">
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

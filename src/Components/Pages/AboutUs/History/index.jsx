import React from "react";
import { HistoryWrapper } from "./historyWrapper.style";
import Container from "../../../Common/Container/index";

const HistorySection = () => {
  return (
    <HistoryWrapper>
       <div className="title">
        <Container>
          <h3>About Us</h3>
        </Container>
      </div>
      <Container>
        <section>
          

          <img src="/aboutUs/history1.jpg" alt="History section image" />

          <hr />

          <div className="box__wrapper">
            <div className="box__boxes">
              <div className="box__left">
                <img src="/aboutUs/ourStory.svg" alt="Our Story Svg" />
                <h2>Our Story</h2>
              </div>
              <div className="box__right">
                <p>Lorem ipsum dolor sit amet consectetur. Sit nulla lectus quis rhoncus scelerisque venenatis luctus nunc. Scelerisque pulvinar amet turpis elit euismod mollis interdum nulla. Consequat viverra aenean egestas congue metus nisi sed. Semper vitae amet faucibus in ac. </p>
              </div>
            </div>
            <div className="box__boxes">
              <div className="box__left">
                <img src="/aboutUs/ourMission.svg" alt="Our Mission Svg" />
                <h2>Our Mission</h2>
              </div>
              <div className="box__right">
                <p>Lorem ipsum dolor sit amet consectetur. Sit nulla lectus quis rhoncus scelerisque venenatis luctus nunc. Scelerisque pulvinar amet turpis elit euismod mollis interdum nulla. Consequat viverra aenean egestas congue metus nisi sed. Semper vitae amet faucibus in ac. Donec aliquam eu faucibus faucibus id lobortis integer. Ipsum dignissim non dui nullam eu magna. Ut pellentesque arcu est pulvinar ullamcorper. Aliquet egestas at tincidunt mi scelerisque orci. Eu aenean risus et vitae ipsum. Vitae molestie aliquam non sed ultrices suspendisse orci ac aliquet. Dolor morbi sagittis vel quis. Nibh mattis id purus commodo. Ut massa scelerisque cras eros egestas integer posuere et purus. Pulvinar ut at et </p>
              </div>
            </div>
            <div className="box__boxes">
              <div className="box__left">
                <img src="/aboutUs/ourVision.svg" alt="Our Vision Svg" />
                <h2>Our Vision</h2>
              </div>
              <div className="box__right">
                <p>Lorem ipsum dolor sit amet consectetur. Sit nulla lectus quis rhoncus scelerisque venenatis luctus nunc. Scelerisque pulvinar amet turpis elit euismod mollis interdum nulla. Consequat viverra aenean egestas congue metus nisi sed. Semper vitae amet faucibus in ac. </p>
              </div>
            </div>
          </div>
 
        </section>
      </Container>
    </HistoryWrapper>
  );
};

export default HistorySection;

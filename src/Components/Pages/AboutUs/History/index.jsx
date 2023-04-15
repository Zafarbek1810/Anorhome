import React, { useEffect } from "react";
import AOS from "aos";
import { useTranslation } from "react-i18next";
import { HistoryWrapper } from "./historyWrapper.style";
import Container from "../../../Common/Container/index";

const HistorySection = () => {

  const { t } = useTranslation();

  useEffect(() => {
    AOS.init({ duration: 1500, once: true });
    AOS.refresh();
  }, []);

  return (
    <HistoryWrapper>
      <div data-aos={"fade-in"} className="title">
        <Container>
          <h3>{t("aboutUs.title2")}</h3>
        </Container>
      </div>
      <Container>
        <section>
          <img
            src="/images/aboutUshistory.jpg"
            alt="History section image"
            data-aos={"fade-up"}
          />

          <hr />

          <div className="box__wrapper">
            <div className="box__boxes" data-aos="fade-zoom-in">
              <div className="box__left">
                <img src="/aboutUs/ourStory.svg" alt="Our Story Svg" />
                <h2>{t("aboutUs.history")}</h2>
              </div>
              <div className="box__right">
                <p>
                {t("aboutUs.historyP")}
                </p>
                <br />
                <p>
                {t("aboutUs.historyP2")}
                </p>
                <br />
                <p>
                {t("aboutUs.historyP3")}
                </p>
                <br />
                <p>
                {t("aboutUs.historyP4")}
                </p>
                <br />
                <p>
                {t("aboutUs.historyP5")}
                </p>
              </div>
            </div>
            
            {/* <div className="box__boxes" data-aos="fade-zoom-in">
              <div className="box__left">
                <img src="/aboutUs/ourMission.svg" alt="Our Mission Svg" />
                <h2>Our Mission</h2>
              </div>
              <div className="box__right">
                <p>
                  Lorem ipsum dolor sit amet consectetur. Sit nulla lectus quis
                  rhoncus scelerisque venenatis luctus nunc. Scelerisque
                  pulvinar amet turpis elit euismod mollis interdum nulla.
                  Consequat viverra aenean egestas congue metus nisi sed. Semper
                  vitae amet faucibus in ac. Donec aliquam eu faucibus faucibus
                  id lobortis integer. Ipsum dignissim non dui nullam eu magna.
                  Ut pellentesque arcu est pulvinar ullamcorper. Aliquet egestas
                  at tincidunt mi scelerisque orci. Eu aenean risus et vitae
                  ipsum. Vitae molestie aliquam non sed ultrices suspendisse
                  orci ac aliquet. Dolor morbi sagittis vel quis. Nibh mattis id
                  purus commodo. Ut massa scelerisque cras eros egestas integer
                  posuere et purus. Pulvinar ut at et{" "}
                </p>
              </div>
            </div>  */}

            {/* <div className="box__boxes" data-aos="fade-zoom-in">
              <div className="box__left">
                <img src="/aboutUs/ourVision.svg" alt="Our Vision Svg" />
                <h2>Our Vision</h2>
              </div>
              <div className="box__right">
                <p>
                  Lorem ipsum dolor sit amet consectetur. Sit nulla lectus quis
                  rhoncus scelerisque venenatis luctus nunc. Scelerisque
                  pulvinar amet turpis elit euismod mollis interdum nulla.
                  Consequat viverra aenean egestas congue metus nisi sed. Semper
                  vitae amet faucibus in ac.{" "}
                </p>
              </div>
            </div> */}

          </div>
        </section>
      </Container>
    </HistoryWrapper>
  );
};

export default HistorySection;

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
          <div className="box__wrapper">
            <div className="box__boxes" data-aos="fade-zoom-in">
              {/* <div className="box__left">
                <img src="/aboutUs/ourStory.svg" alt="Our Story Svg" />
                <h2>{t("aboutUs.history")}</h2>
              </div> */}
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
          </div>
          <hr />
          <img
            src="/images/img.jpg"
            alt="History section image"
            data-aos={"fade-up"}
          />
        </section>
      </Container>
    </HistoryWrapper>
  );
};

export default HistorySection;

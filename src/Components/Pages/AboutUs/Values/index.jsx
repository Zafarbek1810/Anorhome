import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import Container from "../../../Common/Container";
import { ValuesWrapper } from "./valuesWrapper.style";

const ValuesSection = () => {

  const { t } = useTranslation();

  return (
    <ValuesWrapper>
      <div className="title" data-aos={"fade-in"}>
        <Container>
          <h3>{t("aboutUs.values")}</h3>
        </Container>
      </div>
      <Container>
        <section>

          <div className="box__wrapper">
            <div className="boxes" data-aos={"fade-right"}> 
             
              <img src="/aboutUs/confidence.svg" alt="Confidence Svg" />
              <h3>{t("aboutUs.values-tit1")}</h3>
              <p>{t("aboutUs.values-p1")}</p>
             
            </div>
            <div className="boxes" data-aos={"fade-right"}>
              <img src="/aboutUs/truthworth.svg" alt="Trustworthy Svg" />
              <h3>{t("aboutUs.values-tit2")}</h3>
              <p>{t("aboutUs.values-p2")}</p>
            </div>
            <div className="boxes" data-aos={"fade-left"}>
              <img src="/aboutUs/world.svg" alt="Global Vision Svg" />
              <h3>{t("aboutUs.values-tit3")}</h3>
              <p>{t("aboutUs.values-p3")}</p>
            </div>
            <div className="boxes" data-aos={"fade-left"}>
              <img src="/aboutUs/rise.svg" alt="Constant Rise Svg" />
              <h3>{t("aboutUs.values-tit4")}</h3>
              <p>{t("aboutUs.values-p4")}</p>
            </div>
          </div>
        </section>
      </Container>
    </ValuesWrapper>
  );
};

export default ValuesSection;

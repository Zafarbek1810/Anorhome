import React, { useEffect } from "react";
import AOS from "aos";
import { useTranslation } from "react-i18next";
import Container from "../../../Common/Container/index";
import { HeroWrapper } from "./HeroWrapper.style"; 
import useMousePosition from "../../../../Hooks/useMousePosition";
import useWindowDimensions from "../../../../Hooks/useWindow";
import FamilySvg from "../../../Common/Svgs/FamilySvg";
import TrustedSvg from "../../../Common/Svgs/TrustedSvg";

const Hero = () => {
  
  const { t } = useTranslation();

  const { x, y } = useMousePosition();
  const { height: clientHeight, width: clientWidth } = useWindowDimensions()
  
  useEffect(() => {
    AOS.init({ duration: 1500, once: true,});
    AOS.refresh();
  }, []);

  const translateX = clientWidth < 768 ? 0 : ((-(x / (clientWidth / 2)) * 10 ) + 10);
  const translateY = clientWidth < 768 ? 0 : ((-(y / (clientHeight / 2)) * 10 ) + 10);

  
  return (
    <HeroWrapper>
      <Container>
        <div className="wrapper">


          <div className="left" data-aos={"fade-in"}>
            <h2>{t("aboutUs.title")}</h2>
            <p>
            {t("aboutUs.parag")}
            </p>
          </div>

          <div className="right"  data-aos={"fade-in"}>
            <div className="right__inner" style={{transform: `translateY(${translateY}px) translateX(${translateX}px)`}}>
              <div className="right__first">
                <div className="right__box-white">
                  <span>
                    <img src="/aboutUs/building.svg" alt="Building svg" />
                  </span>
                  <h3>250.000+</h3>
                  <p>{t("about.p3")}</p>
                  <div className="arrow-white"></div>
                </div>

                <div className="right__box-red">
                  <span>
                  <TrustedSvg />
                  </span>
                  <h3>10+</h3>
                  <p>{t("about.p4")}</p>
                  <div className="arrow-red"></div>
                </div>
              </div>
              <div className="right__second">
                <div className="right__box-red2">
                  <span>
                  <FamilySvg />
                  </span>
                  <h3>1000+</h3>
                  <p>{t("about.p1")}</p>
                  <div className="arrow-red"></div>
                </div>

                <div className="right__box-white2">
                  <span>
                    <img src="/aboutUs/projects.svg" alt="Projects svg" />
                  </span>
                  <h3>120%</h3>
                  <p>{t("about.p2")}</p>
                  <div className="arrow-white"></div>
                </div>
              </div>
            </div>
          </div>


        </div>
      </Container>
    </HeroWrapper>
  );
};
export default Hero;

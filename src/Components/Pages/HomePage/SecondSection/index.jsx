import React, {useEffect} from "react";
import AOS from "aos";
import { useTranslation } from "react-i18next";
import { SecondSectionWrapper } from "./SecondSection.style";
import Container from "../../../Common/Container";
import FamilySvg from "../../../Common/Svgs/FamilySvg";
import ProjectsSvg from "../../../Common/Svgs/ProjectsSvg";
import RevenueSvg from "../../../Common/Svgs/RevenueSvg";
import TrustedSvg from "../../../Common/Svgs/TrustedSvg";
import MyLink from "../../../Common/MyLink"; 


const SecondSection = () => {

  const { t } = useTranslation();
  
  const countData = [
    {
      img: <FamilySvg />,
      count: 1000,
      p: t("about.p1"),
      suffix: "+",
    },
    {
      img: <ProjectsSvg />,
      count: 120,
      p: t("about.p2"),
      suffix: "%",
    },
    {
      img: <RevenueSvg />,
      count: 250.000,
      p: t("about.p3"),
      suffix: "+",
    },
    {
      img: <TrustedSvg />,
      count: 10,
      p: t("about.p4"),
      suffix: "+",
    },
  ];

  useEffect(() => {
    AOS.init({ duration: 1500, once: true  });
    AOS.refresh();
  }, []);

  return (
    <SecondSectionWrapper>
      <div data-aos={"fade-in"} className="title">
        <Container>
          <h3>{t("about.title")}</h3>
        </Container>
      </div>

      <Container style={{ paddingTop: 90, paddingBottom: 90 }}>
        <div className="wrap">
          <div className="left" >
            <p data-aos={"fade-right"} className="info">
            {t("about.info")}
            </p>

            <div className="countWrap">
              {countData.map((v, i) => (
                <div key={i} className="count">
                  <div data-aos={"fade-up"}>{v.img}</div>
                  <p data-aos={"fade-up"} className="num">
                    {v.count}
                    {v.suffix}
                  </p>
                  <p data-aos={"fade-up"} className="title">{v.p}</p>
                </div>
              ))}
            </div>

            <section data-aos={"fade-up"} class="buttons">
              <MyLink to="/#" className="btn btn-4">
                <span>{t("about.btn")}</span>
              </MyLink>
            </section>
          </div>
          <div className="right">
            <img src="/images/img.png" alt=""  data-aos={"fade-left"}/>
          </div>
        </div>
      </Container>
    </SecondSectionWrapper>
  );
};

export default SecondSection;

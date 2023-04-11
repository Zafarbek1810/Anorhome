import React, { useEffect, useState } from "react";
import AOS from "aos";
import { useTranslation } from "react-i18next";
import Container from "../../../Common/Container";
import MyLink from "../../../Common/MyLink";
import CalendarSvg from "../../../Common/Svgs/CalendarSvg";
import LocationSvg from "../../../Common/Svgs/LocationSvg";
import { ThirdSectionWrapper } from "./ThirdSection.style";
import RightSvg from "../../../Common/Svgs/RightSvg";

const data=[
  {
    img:"/images/projects/sergeli/1.jpg",
    city:"Sergeli Residence",
    date:" 12.01.2023",
    link:"/projects"
  },
  {
    img:"/images/projects/atm/1.jpg",
    city:"Auto Tiger Mall",
    date:" 12.01.2023",
    link:"/projects"
  },
  {
    img:"/images/projects/kamolon/1.jpg",
    city:"Yangi Komolon",
    date:" 12.01.2023",
    link:"/projects"
  },
  {
    img:"/images/projects/almashriq/1.jpg",
    city:"Al-Mashriq",
    date:" 12.01.2023",
    link:"/projects"
  },
]
const ThirdSection = () => {

  const { t } = useTranslation();

  const [activeIndex, setActiveIndex] = useState("0");

  useEffect(() => {
    AOS.init({ duration: 1500, once: true  });
    AOS.refresh();
  }, []);

  const onMouseOver = (e) => {
    const element = e.target;
    if (!element.dataset.imageindex) {
      const divElement = element.closest("div[data-imageindex]");
      setActiveIndex(divElement.dataset.imageindex);
    } else {
      setActiveIndex(element.dataset.imageindex);
    }
  };

  const onMouseLeave = (e) => {
    setActiveIndex("0");
  };

  return (
    <ThirdSectionWrapper>
      <div data-aos={"fade-in"} className="title">
        <Container>
          <h3>{t("projects.title")}</h3>
        </Container>
      </div>
      <Container style={{ paddingTop: 90, paddingBottom: 90 }}>
        <div className="wrap">
          <div className="left">
            <h5 data-aos={"fade-right"} className="subtitle">{t("projects.info-top")}</h5>
            <h3 data-aos={"fade-right"} className="titles">{t("projects.info-title")}</h3>
            <p data-aos={"fade-right"} className="descr">
            {t("projects.info-p")}
            </p>
            <section data-aos={"fade-right"} class="buttons">
              <MyLink to="/projects" className="btn btn-4">
                <span>{t("projects.btn")}</span>
              </MyLink>
            </section>
          </div>
          <div data-aos={"fade-left"} className="right">
            {data.map((obj, index) => (
              <>
                <div
                  className={`card ${
                    activeIndex === `${index}` ? "active" : ""
                  }`}
                  key={index}
                  data-imageIndex={index}
                  onMouseOver={onMouseOver}
                  onMouseLeave={onMouseLeave}
                >
                  <div className="card-img-wrapper">
                  <img src={obj.img} alt="" />
                  </div>
                  <div className="bottom">
                    <span>
                      <LocationSvg /> {obj.city}
                    </span>
                      <MyLink to={obj.link}>{t("button.btn")} <RightSvg/></MyLink>
                  </div>
                  <div className="bottom2">
                    <span>{obj.city}</span>
                  </div>
                </div>
              </>
            ))}
          </div>
        </div>
      </Container>
    </ThirdSectionWrapper>
  );
};

export default ThirdSection;

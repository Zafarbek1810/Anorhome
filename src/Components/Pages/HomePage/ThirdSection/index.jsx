import React, { useState } from "react";
import Container from "../../../Common/Container";
import MyLink from "../../../Common/MyLink";
import CalendarSvg from "../../../Common/Svgs/CalendarSvg";
import LocationSvg from "../../../Common/Svgs/LocationSvg";
import { ThirdSectionWrapper } from "./ThirdSection.style";

const data=[
  {
    img:"/images/img2.png",
    city:"New York",
    date:" 12.01.2023"
  },
  {
    img:"/images/img.png",
    city:"New York",
    date:" 12.01.2023"
  },
  {
    img:"/images/img2.png",
    city:"New York",
    date:" 12.01.2023"
  },
  {
    img:"/images/img.png",
    city:"New York",
    date:" 12.01.2023"
  },
]
const ThirdSection = () => {
  const [activeIndex, setActiveIndex] = useState("0");

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
      <div className="title">
        <Container>
          <h3>Projects</h3>
        </Container>
      </div>
      <Container style={{ paddingTop: 90, paddingBottom: 90 }}>
        <div className="wrap">
          <div className="left">
            <h5 className="subtitle">Architecture Consulting</h5>
            <h3 className="titles">Dream House Building</h3>
            <p className="descr">
              Lorem ipsum dolor sit amet consectetur. Luctus in montes
              pellentesque proin neque pellentesque suspendisse sit. Proin ut at
              tortor nulla quam arcu{" "}
            </p>
            <div className="btns">
              <MyLink to="/#">Learn More</MyLink>
              <MyLink to="/#">See All</MyLink>
            </div>
          </div>
          <div className="right">
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
                    <span>
                      <CalendarSvg /> {obj.date}
                    </span>
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

import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { TeamWrapper } from "./teamWrapper.style"; 
import Container from "../../../Common/Container/index";

const ourStaffs = [
  {
    img: "/aboutUs/staff3.jpg",
    title: "Anvar Bahodirovich Anarbayev",
    text: "aboutUs.staff1",
  },
  // {
  //   img: "/aboutUs/staff2.png",
  //   title: "John Wick",
  //   text: "President of Anorhome.com",
  // },
  // {
  //   img: "/aboutUs/staff4.png",
  //   title: "John Wick",
  //   text: "President of Anorhome.com",
  // },
  // {
  //   img: "/aboutUs/staff4.png",
  //   title: "John Wick",
  //   text: "President of Anorhome.com",
  // },
  // {
  //   img: "/aboutUs/staff5.png",
  //   title: "John Wick",
  //   text: "President of Anorhome.com",
  // },
  // {
  //   img: "/aboutUs/staff2.png",
  //   title: "John Wick",
  //   text: "President of Anorhome.com",
  // },
   
];

const TeamSection = () => {

  const { t } = useTranslation();

  return (
    <TeamWrapper>
      <div data-aos={"fade-in"} className="title">
        <Container>
          <h3>{t("aboutUs.team")}</h3>
        </Container>
      </div>
      <Container>
        <section>
           

          <div>
            <div className="images-wrapper" data-aos={"fade-up"}>
              {ourStaffs.map(({ img, title, text }, index) => (
                <div className="images-item" key={index}>
                  <div className="images-inner">
                    <div className="img-wrapper">
                      <img src={img} />{" "}
                    </div>
                    <h2>{title}</h2>
                    <p>{t(text)}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </Container>
    </TeamWrapper>
  );
};

export default TeamSection;

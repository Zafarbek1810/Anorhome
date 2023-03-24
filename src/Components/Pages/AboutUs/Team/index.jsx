import React from "react";
import { TeamWrapper } from "./teamWrapper.style"; 
import Container from "../../../Common/Container/index";

const ourStaffs = [
  {
    img: "/aboutUs/staff.png",
    title: "John Wick",
    text: "President of Anorhome.com",
  },
  {
    img: "/aboutUs/staff.png",
    title: "John Wick",
    text: "President of Anorhome.com",
  },
  {
    img: "/aboutUs/staff.png",
    title: "John Wick",
    text: "President of Anorhome.com",
  },
  {
    img: "/aboutUs/staff.png",
    title: "John Wick",
    text: "President of Anorhome.com",
  },
  {
    img: "/aboutUs/staff.png",
    title: "John Wick",
    text: "President of Anorhome.com",
  },
  {
    img: "/aboutUs/staff.png",
    title: "John Wick",
    text: "President of Anorhome.com",
  },
   
];

const TeamSection = () => {
  return (
    <TeamWrapper>
      <div className="title">
        <Container>
          <h3>Our Team</h3>
        </Container>
      </div>
      <Container>
        <section>
           

          <div>
            <div className="images-wrapper">
              {ourStaffs.map(({ img, title, text }, index) => (
                <div className="images-item" key={index}>
                  <div className="images-inner">
                    <div className="img-wrapper">
                      <img src={img} />{" "}
                    </div>
                    <h2>{title}</h2>
                    <p>{text}</p>
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

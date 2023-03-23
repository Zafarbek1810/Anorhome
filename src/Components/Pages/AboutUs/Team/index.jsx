import React from "react";
import { TeamWrapper } from "./teamWrapper.style";
import Conatiner from "../../../Common/Container/index";

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
      <Conatiner>
        <section>
          <div className="text__wrapper">
            <div className="text__paragr">
              <p>Find us at some of the coolest cities across the globe.</p>
            </div>
            <div className="text__title">
              <h2>OUR TEAM</h2>
            </div>
          </div>

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
      </Conatiner>
    </TeamWrapper>
  );
};

export default TeamSection;

import React from "react";
import { SecondSectionWrapper } from "./SecondSection.style";
import Container from "../../../Common/Container";
import FamilySvg from "../../../Common/Svgs/FamilySvg";
import ProjectsSvg from "../../../Common/Svgs/ProjectsSvg";
import RevenueSvg from "../../../Common/Svgs/RevenueSvg";
import TrustedSvg from "../../../Common/Svgs/TrustedSvg";
import MyLink from "../../../Common/MyLink";
import Image from "next/image";

const countData = [
  {
    img: <FamilySvg />,
    count: 1234241,
    p: "Happy Families",
    suffix: "",
  },
  {
    img: <ProjectsSvg />,
    count: 302,
    p: "Projects Completed",
    suffix: "",
  },
  {
    img: <RevenueSvg />,
    count: 492,
    p: "Total Revenue",
    suffix: "mln",
  },
  {
    img: <TrustedSvg />,
    count: 200,
    p: "Trusted Clients",
    suffix: "+",
  },
];
const SecondSection = () => {
  return (
    <SecondSectionWrapper>
      <div className="title">
        <Container>
          <h3>About Us</h3>
        </Container>
      </div>

      <Container style={{ paddingTop: 90, paddingBottom: 90 }}>
        <div className="wrap">
          <div className="left">
            <p className="info">
              Lorem ipsum dolor sit amet consectetur. Arcu nullam quam nunc
              lacus quam fringilla libero. Enim non in viverra porttitor eu
              nisl. Dolor eget pellentesque cursus augue. Tristique dolor ornare
              porta aenean in cras. A nunc congue varius suscipit vulputate.
              Adipiscing quam vitae a odio eu accumsan ut. Leo et ultrices
              scelerisque molestie ante mi in.
            </p>

            <div className="countWrap">
              {countData.map((v, i) => (
                <div key={i} className="count">
                  {v.img}
                  <p className="num">
                    {v.count}
                    {v.suffix}
                  </p>
                  <p className="title">{v.p}</p>
                </div>
              ))}
            </div>

            <MyLink to="/#">
              <svg viewBox="0 0 180 60" class="border">
                <polyline
                  points="179,1 179,59 1,59 1,1 179,1"
                  class="bg-line"
                />
                <polyline
                  points="179,1 179,59 1,59 1,1 179,1"
                  class="hl-line"
                />
              </svg>
              <span>Learn More</span>
            </MyLink>
          </div>
          <div className="right">
            <Image
              src="/images/img.png"
              alt=""
              width={387}
              height={431}
              loading="lazy"
            />
          </div>
        </div>
      </Container>
    </SecondSectionWrapper>
  );
};

export default SecondSection;

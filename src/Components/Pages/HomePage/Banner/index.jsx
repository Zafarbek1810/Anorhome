import React, { useEffect, useRef } from "react";
import { BannerWrapper } from "./Banner.style";
import MyLink from "../../../Common/MyLink";
import Container from "../../../Common/Container";
import { Carousel } from "antd";
const Banner = () => {
  const ref = useRef();

  useEffect(() => {
    console.log(ref);
  }, []);
  return (
    <BannerWrapper>
      <Container>
        <Carousel
          autoplay
          autoplaySpeed={4000}
          easing
          ref={ref}
          className="carusel"
        >
          <div className="wrap">
            <h1 className="title">
              How To <span>Invest</span> In Real State
            </h1>
            <p className="descr">
              Lorem ipsum dolor sit amet consectetur. Luctus in montes
              pellentesque proin neque pellentesque suspendisse sit. Proin ut at
              tortor nulla quam arcu
            </p>
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
          <div className="wrap">
            <h1 className="title">
              How To <span>Invest</span> In Real State
            </h1>
            <p className="descr">
              Lorem ipsum dolor sit amet consectetur. Luctus in montes
              pellentesque proin neque pellentesque suspendisse sit. Proin ut at
              tortor nulla quam arcu
            </p>
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
          <div className="wrap">
            <h1 className="title">
              How To <span>Invest</span> In Real State
            </h1>
            <p className="descr">
              Lorem ipsum dolor sit amet consectetur. Luctus in montes
              pellentesque proin neque pellentesque suspendisse sit. Proin ut at
              tortor nulla quam arcu
            </p>
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
          <div className="wrap">
            <h1 className="title">
              How To <span>Invest</span> In Real State
            </h1>
            <p className="descr">
              Lorem ipsum dolor sit amet consectetur. Luctus in montes
              pellentesque proin neque pellentesque suspendisse sit. Proin ut at
              tortor nulla quam arcu
            </p>
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
          <div className="wrap">
            <h1 className="title">
              How To <span>Invest</span> In Real State
            </h1>
            <p className="descr">
              Lorem ipsum dolor sit amet consectetur. Luctus in montes
              pellentesque proin neque pellentesque suspendisse sit. Proin ut at
              tortor nulla quam arcu
            </p>
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
          <div className="wrap">
            <h1 className="title">
              How To <span>Invest</span> In Real State
            </h1>
            <p className="descr">
              Lorem ipsum dolor sit amet consectetur. Luctus in montes
              pellentesque proin neque pellentesque suspendisse sit. Proin ut at
              tortor nulla quam arcu
            </p>
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
        </Carousel>
      </Container>
    </BannerWrapper>
  );
};

export default Banner;

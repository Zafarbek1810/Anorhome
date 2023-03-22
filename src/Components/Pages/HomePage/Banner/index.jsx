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
          autoplaySpeed={3000}
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
            <section class="buttons">
              <MyLink to="/#" className="btn btn-4">
                <span>Learn More</span>
              </MyLink>
            </section>
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
            <section class="buttons">
              <MyLink to="/#" className="btn btn-4">
                <span>Learn More</span>
              </MyLink>
            </section>
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
            <section class="buttons">
              <MyLink to="/#" className="btn btn-4">
                <span>Learn More</span>
              </MyLink>
            </section>
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
            <section class="buttons">
              <MyLink to="/#" className="btn btn-4">
                <span>Learn More</span>
              </MyLink>
            </section>
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
            <section class="buttons">
              <MyLink to="/#" className="btn btn-4">
                <span>Learn More</span>
              </MyLink>
            </section>
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
            <section class="buttons">
              <MyLink to="/#" className="btn btn-4">
                <span>Learn More</span>
              </MyLink>
            </section>
          </div>
        </Carousel>
      </Container>
    </BannerWrapper>
  );
};

export default Banner;

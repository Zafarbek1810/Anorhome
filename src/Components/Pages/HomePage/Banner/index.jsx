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
      <div className="img-wrapper">
        <Carousel
          key={"asdasdasdad"}
          pauseOnFocus={false}
          pauseOnHover={false}
          pauseOnDotsHover={false}
          autoplay
          autoplaySpeed={3000}
        >
          <img src="/images/banner.jpg" alt="" />
          <img src="/images/banner2.jpg" alt="" />
        </Carousel>
      </div>
      <Container className="cont">
        <Carousel
          autoplay
          pauseOnFocus={false}
          pauseOnHover={false}
          pauseOnDotsHover={false}
          autoplaySpeed={3000}
          ref={ref}
          className="carusel"
        >
          <div className="wrap">
            <h1 className="title">
              <span>Investment</span> In Real Estate
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
              <span>Sales Office</span> For Your Project
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
          {/* <div className="wrap">
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
          </div> */}
        </Carousel>
      </Container>
    </BannerWrapper>
  );
};

export default Banner;

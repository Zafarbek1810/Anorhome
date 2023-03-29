import React, { useEffect, useRef } from "react";
import MyLink from "../../Common/MyLink";
import { DemoStyle } from "./DemoStyle";
import Tilt from "react-parallax-tilt";
import Container from "../../Common/Container";
import { Carousel } from "antd";
import AOS from "aos";

const Demo = () => {
  const ref = useRef();

  useEffect(() => {
    AOS.init({ duration: 1500, once: true });
    AOS.refresh();
  }, []);

  useEffect(() => {
    console.log(ref);
  }, []);

  const onChange = (currentSlide) => {
    ref.current.goTo(currentSlide)
  };
  return (
    <DemoStyle>
      <div className="img-wrapper">
        <Carousel
          key={"asdasdasdad"}
          pauseOnFocus={false}
          pauseOnHover={false}
          pauseOnDotsHover={false}
          autoplay
          duration={4000}
          ref={ref}
          autoplaySpeed={3000}
        >
          <img src="/images/banner.jpg" alt="" />
          <img src="/images/banner2.jpg" alt="" />
          <img src="/images/banner.jpg" alt="" />
          <img src="/images/banner2.jpg" alt="" />
          <img src="/images/banner.jpg" alt="" />
        </Carousel>
      </div>
      <Container className="cont">
        <Carousel
          autoplay
          pauseOnFocus={false}
          pauseOnHover={false}
          pauseOnDotsHover={false}
          autoplaySpeed={3000}
          // ref={ref}
          afterChange={onChange}
          className="carusel"
        >
          <div className="wrap" data-aos={"zoom-in"}>
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
          <div className="wrap" data-aos={"zoom-in"}>
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
          <div className="wrap" data-aos={"zoom-in"}>
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
          <div className="wrap" data-aos={"zoom-in"}>
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
          <div className="wrap" data-aos={"zoom-in"}>
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
        </Carousel>
      </Container>
    </DemoStyle>
  );
};

export default Demo;

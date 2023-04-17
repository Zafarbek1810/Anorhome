import { Carousel } from "antd";
import React, { useEffect, useRef } from "react";
import AOS from "aos";
import Container from "../../../Common/Container";
import { TestimionalsWrapper } from "./Testimionals.style";
import CarouselRightSvg from "../../../Common/Svgs/CarouselRightSvg";

const Testimionals = () => {
  const carouselRef = useRef();

  // useEffect(() => {
  //   AOS.init({ duration: 1500, once: true  });
  //   AOS.refresh();
  // }, []);

  useEffect(() => {
    console.log();
  }, []);

  const nextSlider = () => {
    carouselRef.current.next();
  };
  const prevSlider = () => {
    carouselRef.current.prev();
  };

  return (
    <TestimionalsWrapper>
      <div data-aos={"fade-in"} className="title">
        <Container>
          <h3>Testimonials</h3>
        </Container>
      </div>

      <Container
        className="cont"
        style={{
          paddingTop: 100,
          paddingBottom: 100,
          position: "relative",
          zIndex: 4,
        }}
      >
        <div data-aos={"fade-up"} className="wrapper">
          <div className="car">
            <Carousel autoplay dots={false} ref={carouselRef}>
              <div className="carusel">
                <div className="left">
                  <img src="/images/man.png" width={243} height={341} />
                </div>
                <div className="right">
                  <h3 className="name">Frank Paradiso</h3>
                  <p className="prof">CEO of Build.uz</p>
                  <p className="descr">
                    Lorem ipsum dolor sit amet consectetur. Arcu nullam quam
                    nunc lacus quam fringilla libero. Enim non in viverra
                    porttitor eu nisl. Dolor eget pellentesque cursus augue.
                    Tristique dolor ornare porta aenean in cras. A nunc congue
                    varius suscipit vulputate. Adipiscing quam vitae a odio eu
                    accumsan ut. Leo et ultrices scelerisque molestie ante mi
                    in.
                  </p>
                  <p className="date">20.12.2024</p>
                  <img src="/images/66.png" alt="" />
                </div>
              </div>
              <div className="carusel">
                <div className="left">
                  <img src="/images/man.png" width={243} height={341} />
                </div>
                <div className="right">
                  <h3 className="name">Frank Paradiso</h3>
                  <p className="prof">CEO of Build.uz</p>
                  <p className="descr">
                    Lorem ipsum dolor sit amet consectetur. Arcu nullam quam
                    nunc lacus quam fringilla libero. Enim non in viverra
                    porttitor eu nisl. Dolor eget pellentesque cursus augue.
                    Tristique dolor ornare porta aenean in cras. A nunc congue
                    varius suscipit vulputate. Adipiscing quam vitae a odio eu
                    accumsan ut. Leo et ultrices scelerisque molestie ante mi
                    in.
                  </p>
                  <p className="date">20.12.2024</p>
                  <img src="/images/66.png" alt="" />
                </div>
              </div>
              <div className="carusel">
                <div className="left">
                  <img src="/images/man.png" width={243} height={341} />
                </div>
                <div className="right">
                  <h3 className="name">Frank Paradiso</h3>
                  <p className="prof">CEO of Build.uz</p>
                  <p className="descr">
                    Lorem ipsum dolor sit amet consectetur. Arcu nullam quam
                    nunc lacus quam fringilla libero. Enim non in viverra
                    porttitor eu nisl. Dolor eget pellentesque cursus augue.
                    Tristique dolor ornare porta aenean in cras. A nunc congue
                    varius suscipit vulputate. Adipiscing quam vitae a odio eu
                    accumsan ut. Leo et ultrices scelerisque molestie ante mi
                    in.
                  </p>
                  <p className="date">20.12.2024</p>
                  <img src="/images/66.png" alt="" />
                </div>
              </div>
            </Carousel>
          </div>

          <div className="btns">
            <button onClick={prevSlider}>
              <CarouselRightSvg />
            </button>
            <button onClick={nextSlider}>
              <CarouselRightSvg />
            </button>
          </div>
        </div>
      </Container>
    </TestimionalsWrapper>
  );
};

export default Testimionals;

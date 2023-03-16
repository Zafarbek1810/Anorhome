import React, { useEffect, useRef } from "react";
import { BannerWrapper } from "./Banner.style";
import MyLink from "../../../Common/MyLink";
import Container from "../../../Common/Container";
import { Carousel } from "antd";
const Banner = () => {
  const ref = useRef();

    useEffect(()=>{
        console.log(ref);

    },[])
  return (
    <BannerWrapper>
      <Container>
        <Carousel
        //  autoplay
        //  autoplaySpeed={3500}
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
            <MyLink to="/#">Learn More</MyLink>
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
            <MyLink to="/#">Learn More</MyLink>
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
            <MyLink to="/#">Learn More</MyLink>
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
            <MyLink to="/#">Learn More</MyLink>
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
            <MyLink to="/#">Learn More</MyLink>
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
            <MyLink to="/#">Learn More</MyLink>
          </div>
        </Carousel>
        {/* <div className="dots">
            <div className="active"></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div> */}
      </Container>
    </BannerWrapper>
  );
};

export default Banner;

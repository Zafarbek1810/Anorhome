import React, { useEffect, useRef } from "react";
import { BannerWrapper } from "./Banner.style";
import AOS from "aos";
import { useTranslation } from "react-i18next";
import MyLink from "../../../Common/MyLink";
import Container from "../../../Common/Container";
import { Carousel } from "antd";
import LeftAnorDona from "../../../Common/Svgs/LeftAnorDona";
import RightAnorDona from "../../../Common/Svgs/RightAnorDona";

const Banner = () => {
  const { t } = useTranslation();

  const data = [
    {
      id: "3",
      title: "Strategic consulting",
      banner: {
        title: "hero.title-top",
        title2: "hero.title",
        span: "hero.title-span",
        img: "/images/banner.jpg",
        descr: "hero.paragr",
      },
    },
    {
      id: "1",
      banner: {
        title: "hero.title-top2",
        title2: "hero.title2",
        span: "hero.title-span2",
        img: "/images/banner2.jpg",
        descr: "hero.paragr2",
      },
    },
    {
      id: "4",
      banner: {
        title: "hero.title-top3",
        title2: "hero.title3",
        span: "hero.title-span3",
        img: "/images/banner3.jpg",
        descr: "hero.paragr3",
      },
    },
    {
      id: "5",
      banner: {
        title: "hero.title-top4",
        title2: "hero.title4",
        span: "hero.title-span4",
        img: "/images/banner4.jpg",
        descr: "hero.paragr4",
      },
    },
    {
      id: "2",
      banner: {
        title: "hero.title-top5",
        title2: "hero.title5",
        span: "hero.title-span5",
        img: "/images/banner5.jpg",
        descr: "hero.paragr5",
      },
    },
    {
      id: "6",
      banner: {
        title: "hero.title-top6",
        title2: "hero.title6",
        span: "hero.title-span6",
        img: "/images/banner6.jpg",
        descr: "hero.paragr6",
      },
    },
  ];

  const ref = useRef();
  const ref2 = useRef();

  // useEffect(() => {
  //   AOS.init({ duration: 1500, once: true });
  //   AOS.refresh();
  // }, []);

  useEffect(() => {
    console.log(ref);
  }, []);

  const onChange = (currentSlide) => {
    ref.current.goTo(currentSlide + 1);
  };

  const handleLeft = () => {
    ref2.current.prev();
  };

  const handleRight = () => {
    ref2.current.next();
  };


  return (
    <BannerWrapper>
      <div className="img-wrapper">
        <Carousel
          pauseOnFocus={false}
          pauseOnHover={false}
          pauseOnDotsHover={false}
          ref={ref}
          className="imgCarousel"
        >
          {data.map((item) => (
            <img key={item} src={item.banner.img} alt="" />
          ))}
        </Carousel>
      </div>
      <Container className="cont">
        <Carousel
          autoplay
          pauseOnFocus={false}
          pauseOnHover={false}
          pauseOnDotsHover={false}
          autoplaySpeed={8000}
          // afterChange={onChange}
          beforeChange={onChange}
          className="carusel"
          ref={ref2}
        >
          {data.map((v, i) => (
            <div key={i} className="wrap">
              <p className="top-title">{t(v.banner.title)}</p>
              <h1 className="title">
                {t(v.banner.title2)} <br />
                <span> {t(v.banner.span)}</span>
              </h1>
              <p className="descr">{t(v.banner.descr)}</p>
              <section class="buttons">
                <MyLink
                  to={`/service_details?id=${v.id}`}
                  className="btn btn-4"
                >
                  <span>{t("button.btn")}</span>
                </MyLink>
              </section>
            </div>
          ))}
        </Carousel>
        <div className="carusel_btns">
          <button onClick={handleLeft}>
            <LeftAnorDona/>
          </button>
          <button onClick={handleRight}>
            <RightAnorDona />
          </button>
        </div>
      </Container>
    </BannerWrapper>
  );
};

export default Banner;

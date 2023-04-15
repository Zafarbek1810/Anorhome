import React, { useEffect, useRef } from "react";
import { BannerWrapper } from "./Banner.style";
import AOS from "aos";
import { useTranslation } from "react-i18next";
import MyLink from "../../../Common/MyLink";
import Container from "../../../Common/Container";
import { Carousel } from "antd";

const Banner = () => {
  const { t } = useTranslation();

  const ref = useRef();

  useEffect(() => {
    AOS.init({ duration: 1500, once: true });
    AOS.refresh();
  }, []);

  useEffect(() => {
    console.log(ref);
  }, []);

  const onChange = (currentSlide) => {
    ref.current.goTo(currentSlide);
  };

  return (
    <BannerWrapper>
      <div className="img-wrapper">
        <Carousel
          pauseOnFocus={false}
          pauseOnHover={false}
          pauseOnDotsHover={false}
          ref={ref}
        >
          <img src="/images/banner.jpg" alt="" />
          <img src="/images/banner2.jpg" alt="" />
          <img src="/images/banner3.jpg" alt="" />
          <img src="/images/banner4.jpg" alt="" />
          <img src="/images/banner5.jpg" alt="" />
          <img src="/images/banner6.jpg" alt="" />
        </Carousel>
      </div>
      <Container className="cont">
        <Carousel
          autoplay
          pauseOnFocus={false}
          pauseOnHover={false}
          pauseOnDotsHover={false}
          autoplaySpeed={3000}
          // afterChange={onChange}
          beforeChange={onChange}
          className="carusel"
        >
          <div className="wrap" data-aos={"zoom-in"}>
            <p className="top-title">{t("hero.title-top")}</p>
            <h1 className="title">
              {t("hero.title")} <br />
              <span> {t("hero.title-span")}</span>
            </h1>
            <p className="descr">{t("hero.paragr")}</p>
            <section class="buttons">
              <MyLink to="/service_details?id=1" className="btn btn-4">
                <span>{t("button.btn")}</span>
              </MyLink>
            </section>
          </div>
          <div className="wrap" data-aos={"zoom-in"}>
          <p className="top-title">{t("hero.title-top2")}</p>
            <h1 className="title">
              {t("hero.title2")} <br />
              <span>{t("hero.title-span2")} </span>
            </h1>
            <p className="descr">{t("hero.paragr2")}</p>
            <section class="buttons">
              <MyLink to="/service_details?id=2" className="btn btn-4">
                <span>{t("button.btn")}</span>
              </MyLink>
            </section>
          </div>
          
          <div className="wrap" data-aos={"zoom-in"}>
          <p className="top-title">{t("hero.title-top3")}</p>
            <h1 className="title">
              {t("hero.title3")} <br />
              <span> {t("hero.title-span3")}</span>
            </h1>
            <p className="descr">{t("hero.paragr3")}</p>
            <section class="buttons">
              <MyLink to="/service_details?id=3" className="btn btn-4">
                <span>{t("button.btn")}</span>
              </MyLink>
            </section>
          </div>

          <div className="wrap" data-aos={"zoom-in"}>
          <p className="top-title">{t("hero.title-top4")}</p>
            <h1 className="title">
              {t("hero.title4")}
              <span> {t("hero.title-span4")}</span>
            </h1>
            <p className="descr">{t("hero.paragr4")}</p>
            <section class="buttons">
              <MyLink to="/service_details?id=4" className="btn btn-4">
                <span>{t("button.btn")}</span>
              </MyLink>
            </section>
          </div>

          <div className="wrap" data-aos={"zoom-in"}>
          <p className="top-title">{t("hero.title-top5")}</p>
            <h1 className="title">
              {t("hero.title5")}
              <span> {t("hero.title-span5")}</span>
            </h1>
            <p className="descr">{t("hero.paragr5")}</p>
            <section class="buttons">
              <MyLink to="/service_details?id=5" className="btn btn-4">
                <span>{t("button.btn")}</span>
              </MyLink>
            </section>
          </div>
          <div className="wrap" data-aos={"zoom-in"}>
          <p className="top-title">{t("hero.title-top6")}</p>
            <h1 className="title">
              {t("hero.title6")} <br />
              <span> {t("hero.title-span6")}</span>
            </h1>
            <p className="descr">{t("hero.paragr6")}</p>
            <section class="buttons">
              <MyLink to="/service_details?id=6" className="btn btn-4">
                <span>{t("button.btn")}</span>
              </MyLink>
            </section>
          </div>
        </Carousel>
      </Container>
    </BannerWrapper>
  );
};

export default Banner;

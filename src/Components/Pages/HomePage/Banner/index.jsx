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
            <h1 className="title">
              <span>{t("hero.title-span")} </span>
            </h1>
            <p className="descr">{t("hero.paragr")}</p>
            <section class="buttons">
              <MyLink to="/#" className="btn btn-4">
                <span>{t("button.btn")}</span>
              </MyLink>
            </section>
          </div>
          <div className="wrap" data-aos={"zoom-in"}>
            <h1 className="title">
              <span>{t("hero.title-span2")} </span>
              {/* {t("hero.title")} */}
            </h1>
            <p className="descr">{t("hero.paragr2")}</p>
            <section class="buttons">
              <MyLink to="/#" className="btn btn-4">
                <span>{t("button.btn")}</span>
              </MyLink>
            </section>
          </div>
          <div className="wrap" data-aos={"zoom-in"}>
            <h1 className="title">
              <span>{t("hero.title-span3")} </span>
              {/* {t("hero.title")} */}
            </h1>
            <p className="descr">{t("hero.paragr3")}</p>
            <section class="buttons">
              <MyLink to="/#" className="btn btn-4">
                <span>{t("button.btn")}</span>
              </MyLink>
            </section>
          </div>
          <div className="wrap" data-aos={"zoom-in"}>
            <h1 className="title">
              <span>{t("hero.title-span4")} </span>
              {/* {t("hero.title")} */}
            </h1>
            <p className="descr">{t("hero.paragr4")}</p>
            <section class="buttons">
              <MyLink to="/#" className="btn btn-4">
                <span>{t("button.btn")}</span>
              </MyLink>
            </section>
          </div>
          <div className="wrap" data-aos={"zoom-in"}>
            <h1 className="title">
              <span>{t("hero.title-span5")} </span>
              {/* {t("hero.title")} */}
            </h1>
            <p className="descr">{t("hero.paragr5")}</p>
            <section class="buttons">
              <MyLink to="/#" className="btn btn-4">
                <span>{t("button.btn")}</span>
              </MyLink>
            </section>
          </div>
          <div className="wrap" data-aos={"zoom-in"}>
            <h1 className="title">
              <span>{t("hero.title-span6")} </span>
              {/* {t("hero.title")} */}
            </h1>
            <p className="descr">{t("hero.paragr6")}</p>
            <section class="buttons">
              <MyLink to="/#" className="btn btn-4">
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

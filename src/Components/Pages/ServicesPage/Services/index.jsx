import React, { useEffect, useRef, useState } from "react";
import useScrollPosition from "../../../../Hooks/useScrollPosition";
import MyLink from "../../../Common/MyLink";
import { ServicesWrapper } from "./Services.style";
import { useRouter } from "next/router";
import useWindowDimensions from "../../../../Hooks/useWindow";
import AOS from "aos";
import { useTranslation } from "react-i18next";


const Services = () => {
  
  const { t } = useTranslation();
  
  const data = [
    {
      id: "1",
      span: "1",
      p1: t("hero.title-span"),
      img: "/images/services/service1.jpg",
      p2: t("hero.paragr"),
    },
    {
      id: "2",
      span: "2",
      p1: t("hero.title-span2"),
      img: "/images/services/service2.jpg",
      p2: t("hero.paragr2"),
    },
    {
      id: "3",
      span: "3",
      p1: t("hero.title-span3"),
      img: "/images/services/service3.jpg",
      p2: t("hero.paragr3"),
    },
    {
      id: "4",
      span: "4",
      p1: t("hero.title-span4"),
      img: "/images/services/service4.jpg",
      p2: t("hero.paragr4"),
    },
    {
      id: "5",
      span: "5",
      p1: t("hero.title-span5"),
      img: "/images/services/service5.jpg",
      p2: t("hero.paragr5"),
    },
  ];

  const router = useRouter();

  const pos = useScrollPosition(-0.07); //scrollY * 0.5

  const { height: scrollY, width: clientWidth } = useWindowDimensions();

  useEffect(() => {
    console.log(scrollY);
    console.log(clientWidth);
  }, []);

  useEffect(() => {
    AOS.init({ duration: 1500, once: true });
    AOS.refresh();
  }, []);

  return (
    <ServicesWrapper>
      <div className="top" data-aos={"fade-up"}>
        <p>{t("services.top-parag")}</p>
        <h4>{t("services.top-title")}</h4>
      </div>

      <div className="wrapper">
        {data.map((v, i) => (
          <div className="box" key={i} data-aos={"fade-up"}>
            <div className="col-1">
              <span>{v.span}</span>
              <p>{v.p1}</p>
            </div>
            <div className="col-2">{<ImgParalax v={v} pos={pos} />}</div>
            <div className="col-3">
              <p>{v.p2}</p>
              <div className="btn">
                <MyLink to={`/serviceDetail?id=${v.id}`}>{t("button.btn")}</MyLink>
              </div>
            </div>
          </div>
        ))}
      </div>
    </ServicesWrapper>
  );
};

export default Services;

function ImgParalax({ v, pos }) {
  const imgRef = useRef();
  const [num, setNum] = useState(0);
  const [isVisibleOnScreen, setIsVisibleOnScreen] = useState(false);

  // if (typeof window === undefined) {
  //   var window = {};
  // } else {
  //   window = window;
  // }

  useEffect(() => {
    const elDistanceToTop =  window?.pageYOffset + imgRef.current?.getBoundingClientRect().top;
    setIsVisibleOnScreen(pos + window?.innerHeight > elDistanceToTop);
    setNum(pos + window?.innerHeight - elDistanceToTop);
  }, [pos]);

  return (
    <img
      src={v.img}
      alt=""
      style={{
        transform: isVisibleOnScreen ? `translateY(${num * -0.2}px` : "",
        transition: "all 0.2s ease",
      }}
      ref={imgRef}
    />
  );
}

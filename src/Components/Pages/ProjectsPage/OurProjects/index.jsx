import React, { useEffect, useRef, useState } from "react";
import Container from "../../../Common/Container";
import { OurProjectsWrapper } from "./OurProjects.style";
import LocationSvg from "../../../Common/Svgs/LocationSvg";
import CalendarSvg from "../../../Common/Svgs/CalendarSvg";
import ToRightSvg from "../../../Common/Svgs/ToRightSvg";
import ToLeftSvg from "../../../Common/Svgs/ToLeftSvg";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper";
import Aos from "aos";
import { useTranslation } from "react-i18next";



const OurProjects = () => {

  const { t } = useTranslation();
  

  const data = [
    {
      title: "Sergeli Residence",
      category: t("projectPage.sr-category"),
      loc1: t("projectPage.sr-loc1"),
      loc2: t("projectPage.sr-loc2"),
      date: "12.01.2023",
      descr: t("projectPage.sr-descr"),
      img1: "/images/projects/sergeli/1.jpg",
      img2: "/images/projects/sergeli/2.jpg",
      img3: "/images/projects/sergeli/3.jpg",
      img4: "/images/projects/sergeli/4.jpg",
      img5: "/images/projects/sergeli/5.jpg",
      img6: "/images/projects/sergeli/6.jpg",
      img7: "/images/projects/sergeli/7.jpg",
      img8: "/images/projects/sergeli/8.jpg",
      img9: "/images/projects/sergeli/9.jpg",
    },
    {
      title: "Auto Tiger Mall",
      category: t("projectPage.atm-category"),
      loc1: t("projectPage.atm-loc1"),
      loc2: t("projectPage.atm-loc2"),
      date: "12.01.2023",
      descr: t("projectPage.atm-descr"),
      img1: "/images/projects/atm/1.jpg",
      img2: "/images/projects/atm/2.jpg",
      img3: "/images/projects/atm/3.jpg",
      img4: "/images/projects/atm/4.jpg",
      img5: "/images/projects/atm/5.jpg",
      img6: "/images/projects/atm/6.jpg",
      img7: "/images/projects/atm/7.jpg",
      img8: "/images/projects/atm/8.jpg",
      img9: "/images/projects/atm/9.jpg",
    },
    {
      title: "Termez Internatinal Trade Center",
      category: t("projectPage.termiz-itc-category"),
      loc1: t("projectPage.termiz-itc-loc1"),
      loc2: t("projectPage.termiz-itc-loc2"),
      date: "12.01.2023",
      descr: t("projectPage.termiz-itc-descr"),
      img1: "/images/projects/termiz/1.jpg",
      img2: "/images/projects/termiz/2.jpg",
      img3: "/images/projects/termiz/3.jpg",
      img4: "/images/projects/termiz/4.jpg",
      img5: "/images/projects/termiz/5.jpg",
      img6: "/images/projects/termiz/6.jpg",
      img7: "/images/projects/termiz/7.jpg",
      img8: "/images/projects/termiz/8.jpg",
      img9: "/images/projects/termiz/9.jpg",
    },
    {
      title: "Buyuk Ipak Yo‘li 311",
      category: t("projectPage.biy311-category"),
      loc1: t("projectPage.biy311-loc1"),
      loc2: t("projectPage.biy311-loc2"),
      date: "12.01.2023",
      descr: t("projectPage.biy311-descr"),
      img1: "/images/projects/biy/1.jpg",
      img2: "/images/projects/biy/2.jpg",
      img3: "/images/projects/biy/3.jpg",
      img4: "/images/projects/biy/4.jpg",
      img5: "/images/projects/biy/5.jpg",
      img6: "/images/projects/biy/6.jpg",
      img7: "/images/projects/biy/7.jpg",
      img8: "/images/projects/biy/8.jpg",
      img9: "/images/projects/biy/9.jpg",
    },
    {
      title: "Yangi Komolon",
      category: t("projectPage.komolon-category"),
      loc1: t("projectPage.komolon-loc1"),
      loc2: t("projectPage.komolon-loc2"),
      date: "12.01.2023",
      descr: t("projectPage.komolon-descr"),
      img1: "/images/projects/kamolon/1.jpg",
      img2: "/images/projects/kamolon/2.jpg",
      img3: "/images/projects/kamolon/3.jpg",
      img4: "/images/projects/kamolon/4.jpg",
      img5: "/images/projects/kamolon/5.jpg",
      img6: "/images/projects/kamolon/6.jpg",
      img7: "/images/projects/kamolon/7.jpg",
      img8: "/images/projects/kamolon/8.jpg",
      img9: "/images/projects/kamolon/9.jpg",
    },
    {
      title: "Travel Business Center",
      category: t("projectPage.travelBs-category"),
      loc1: t("projectPage.travelBs-loc1"),
      loc2: t("projectPage.travelBs-loc2"),
      date: "12.01.2023",
      descr: t("projectPage.travelBs-descr"),
      img1: "/images/projects/travel/1.jpg",
      img2: "/images/projects/travel/2.jpg",
      img3: "/images/projects/travel/3.jpg",
      img4: "/images/projects/travel/4.jpg",
      img5: "/images/projects/travel/5.jpg",
      img6: "/images/projects/travel/6.jpg",
      img7: "/images/projects/travel/4.jpg",
      img8: "/images/projects/travel/5.jpg",
      img9: "/images/projects/travel/6.jpg",
    },
    {
      title: "Al Mashriq",
      category: t("projectPage.mashriq-category"),
      loc1: t("projectPage.mashriq-loc1"),
      loc2: t("projectPage.mashriq-loc2"),
      date: "12.01.2023",
      descr: t("projectPage.mashriq-descr"),
      img1: "/images/projects/almashriq/1.jpg",
      img2: "/images/projects/almashriq/2.jpg",
      img3: "/images/projects/almashriq/3.jpg",
      img4: "/images/projects/almashriq/4.jpg",
      img5: "/images/projects/almashriq/5.jpg",
      img6: "/images/projects/almashriq/6.jpg",
      img7: "/images/projects/almashriq/7.jpg",
      img8: "/images/projects/almashriq/8.jpg",
      img9: "/images/projects/almashriq/9.jpg",
    },
  ];


  const [selectedCardIndex, setSelectedCardIndex] = useState(0);
  const [loading, setLoading] = useState(false);

  function handleCardClick(index) {
    setLoading(true);
    setSelectedCardIndex(index);
    setTimeout(() => {
      setLoading(false);
    }, 100);
  }

  const swiperRef = useRef();

  useEffect(() => {
    Aos.init({ duration: 1500, once: true });
    Aos.refresh();
  }, [loading]); 

  return (
    <OurProjectsWrapper>
      <Container>
        <div className="wrapper">
          <div className="left" id={selectedCardIndex} >
            {selectedCardIndex !== null ? (
              <div>
                <h4 className="title">{t('projectPage.title')}</h4>
                    <div className="cards">
                      {data.map((card, index) => (
                        <div
                          className={`card ${
                            index === selectedCardIndex ? "selected" : ""
                          }`}
                          key={index}
                          onClick={() => handleCardClick(index)}
                        >
                          <div className="img">
                            <img src={card.img1} alt="" />
                          </div>
                          <div className="text">
                            <div>
                              <h6>{card.title}</h6>
                              <p>{card.category}</p>
                            </div>
                            <div className="location-card">
                              <LocationSvg />
                              <p>{card.loc1}</p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                {!loading ? (
                  <div data-aos={"fade-right"}>
                    <p className="heading">{data[selectedCardIndex].title}</p>
                    <p className="descr">{data[selectedCardIndex].descr}</p>
                    <div className="location">
                      <LocationSvg />
                      <p>{data[selectedCardIndex].loc2}</p>
                    </div>
                    <div className="calendar">
                      <CalendarSvg /> <p>{data[selectedCardIndex].date}</p>
                    </div>

                    <div className="galery">
                      <h5 className="title-img">{t("projects.gallery")}</h5>
                      <Swiper
                        slidesPerView={2}
                        spaceBetween={30}
                        ref={swiperRef}
                        loop={true}
                        pagination={true}
                        navigation={{
                          prevEl: ".prev",
                          nextEl: ".next",
                          clickable: true,
                        }}
                        modules={[Navigation, Pagination]}
                        className="mySwiper"
                      >
                        <SwiperSlide>
                          <div className="imgs">
                            <div className="img">
                              <img src={data[selectedCardIndex].img2} alt="" />
                            </div>
                            <div className="img">
                              <img src={data[selectedCardIndex].img3} alt="" />
                            </div>
                          </div>
                        </SwiperSlide>
                        <SwiperSlide>
                          <div className="imgs">
                            <div className="img">
                              <img src={data[selectedCardIndex].img4} alt="" />
                            </div>
                            <div className="img">
                              <img src={data[selectedCardIndex].img5} alt="" />
                            </div>
                          </div>
                        </SwiperSlide>
                        <SwiperSlide>
                          <div className="imgs">
                            <div className="img">
                              <img src={data[selectedCardIndex].img6} alt="" />
                            </div>
                            <div className="img">
                              <img src={data[selectedCardIndex].img7} alt="" />
                            </div>
                          </div>
                        </SwiperSlide>
                        <SwiperSlide>
                          <div className="imgs">
                            <div className="img">
                              <img src={data[selectedCardIndex].img8} alt="" />
                            </div>
                            <div className="img">
                              <img src={data[selectedCardIndex].img9} alt="" />
                            </div>
                          </div>
                        </SwiperSlide>
                      </Swiper>
                      <div className="btns">
                        <button className="prev">
                          <ToLeftSvg />
                        </button>
                        <button className="next">
                          <ToRightSvg />
                        </button>
                      </div>
                    </div>
                  </div>
                ) : (
                  <>
                    <div className="left"></div>
                  </>
                )}
              </div>
            ) : (
              <p>{t('projectPage.view-info')}</p>
            )}
          </div>

          <div className="right">
            <div className="cards">
              {data.map((card, index) => (
                <div
                  className={`card ${
                    index === selectedCardIndex ? "selected" : ""
                  }`}
                  key={index}
                  onClick={() => handleCardClick(index)}
                >
                  <div className="img">
                    <img src={card.img1} alt="" />
                  </div>
                  <div className="text">
                    <div>
                      <h6>{card.title}</h6>
                      <p>{card.category}</p>
                    </div>
                    <div className="location-card">
                      <LocationSvg />
                      <p>{card.loc1}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </OurProjectsWrapper>
  );
};

export default OurProjects;

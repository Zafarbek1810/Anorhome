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

const data = [
  {
    title: "Sergeli Residence",
    category: "Investment Consulting",
    loc1: "Yunusabad, Tashkent",
    loc2: "Amir Temur, 03124923, Yunusobod District, Tashkent City, Uzbekistan",
    date: "12.01.2023",
    descr:
      "1Lorem ipsum dolor sit amet consectetur. Rhoncus hac dui phasellus dolor lectus aliquam diam. Curabitur elementum faucibus dui a et. Neque consectetur scelerisque condimentum posuere et magna nibh vitae nulla. Risus vitae sit luctus dictumst porta eu nulla non sollicitudin. Non malesuada elementum adipiscing et. Faucibus mi ante proin pretium praesent scelerisque. Aliquet tempor viverra eget quis. Semper facilisi a massa diam odio feugiat pharetra justo urna. Bibendum pulvinar et purus aliquam netus nisl. Posuere mattis accumsan sodales ultrices amet eget. Pretium felis pellentesque cursus purus fusce enim a at dolor. Ultricies condimentum ac eget etiam donec adipiscing lobortis. Molestie pellentesque placerat aliquam varius turpis lobortis consequat nulla nisl. Semper scelerisque ultrices urna mus in ornare scelerisque. Fringilla nunc et pellentesque massa integer condimentum. Duis tempus in vestibulum nam tincidunt accumsan arcu amet vestibulum. Sit mi pellentesque vehicula commodo. Turpis enim augue sit enim placerat consequat proin maecenas scelerisque.",
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
    category: "Investment Consulting",
    loc1: "Yunusabad, Tashkent",
    loc2: "Amir Temur, 03124923, Yunusobod District, Tashkent City, Uzbekistan",
    date: "12.01.2023",
    descr:
      "2Lorem ipsum dolor sit amet consectetur. Rhoncus hac dui phasellus dolor lectus aliquam diam. Curabitur elementum faucibus dui a et. Neque consectetur scelerisque condimentum posuere et magna nibh vitae nulla. Risus vitae sit luctus dictumst porta eu nulla non sollicitudin. Non malesuada elementum adipiscing et. Faucibus mi ante proin pretium praesent scelerisque. Aliquet tempor viverra eget quis. Semper facilisi a massa diam odio feugiat pharetra justo urna. Bibendum pulvinar et purus aliquam netus nisl. Posuere mattis accumsan sodales ultrices amet eget. Pretium felis pellentesque cursus purus fusce enim a at dolor. Ultricies condimentum ac eget etiam donec adipiscing lobortis. Molestie pellentesque placerat aliquam varius turpis lobortis consequat nulla nisl. Semper scelerisque ultrices urna mus in ornare scelerisque. Fringilla nunc et pellentesque massa integer condimentum. Duis tempus in vestibulum nam tincidunt accumsan arcu amet vestibulum. Sit mi pellentesque vehicula commodo. Turpis enim augue sit enim placerat consequat proin maecenas scelerisque.",
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
    title: "Termiz International Trading center ",
    category: "Investment Consulting",
    loc1: "Yunusabad, Tashkent",
    loc2: "Amir Temur, 03124923, Yunusobod District, Tashkent City, Uzbekistan",
    date: "12.01.2023",
    descr:
      "3Lorem ipsum dolor sit amet consectetur. Rhoncus hac dui phasellus dolor lectus aliquam diam. Curabitur elementum faucibus dui a et. Neque consectetur scelerisque condimentum posuere et magna nibh vitae nulla. Risus vitae sit luctus dictumst porta eu nulla non sollicitudin. Non malesuada elementum adipiscing et. Faucibus mi ante proin pretium praesent scelerisque. Aliquet tempor viverra eget quis. Semper facilisi a massa diam odio feugiat pharetra justo urna. Bibendum pulvinar et purus aliquam netus nisl. Posuere mattis accumsan sodales ultrices amet eget. Pretium felis pellentesque cursus purus fusce enim a at dolor. Ultricies condimentum ac eget etiam donec adipiscing lobortis. Molestie pellentesque placerat aliquam varius turpis lobortis consequat nulla nisl. Semper scelerisque ultrices urna mus in ornare scelerisque. Fringilla nunc et pellentesque massa integer condimentum. Duis tempus in vestibulum nam tincidunt accumsan arcu amet vestibulum. Sit mi pellentesque vehicula commodo. Turpis enim augue sit enim placerat consequat proin maecenas scelerisque.",
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
    title: "BIY311 Buyuk Ipak Yo‘li 311",
    category: "Investment Consulting",
    loc1: "Yunusabad, Tashkent",
    loc2: "Amir Temur, 03124923, Yunusobod District, Tashkent City, Uzbekistan",
    date: "12.01.2023",
    descr:
      "4Lorem ipsum dolor sit amet consectetur. Rhoncus hac dui phasellus dolor lectus aliquam diam. Curabitur elementum faucibus dui a et. Neque consectetur scelerisque condimentum posuere et magna nibh vitae nulla. Risus vitae sit luctus dictumst porta eu nulla non sollicitudin. Non malesuada elementum adipiscing et. Faucibus mi ante proin pretium praesent scelerisque. Aliquet tempor viverra eget quis. Semper facilisi a massa diam odio feugiat pharetra justo urna. Bibendum pulvinar et purus aliquam netus nisl. Posuere mattis accumsan sodales ultrices amet eget. Pretium felis pellentesque cursus purus fusce enim a at dolor. Ultricies condimentum ac eget etiam donec adipiscing lobortis. Molestie pellentesque placerat aliquam varius turpis lobortis consequat nulla nisl. Semper scelerisque ultrices urna mus in ornare scelerisque. Fringilla nunc et pellentesque massa integer condimentum. Duis tempus in vestibulum nam tincidunt accumsan arcu amet vestibulum. Sit mi pellentesque vehicula commodo. Turpis enim augue sit enim placerat consequat proin maecenas scelerisque.",
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
    category: "Investment Consulting",
    loc1: "Yunusabad, Tashkent",
    loc2: "Amir Temur, 03124923, Yunusobod District, Tashkent City, Uzbekistan",
    date: "12.01.2023",
    descr:
      "5Lorem ipsum dolor sit amet consectetur. Rhoncus hac dui phasellus dolor lectus aliquam diam. Curabitur elementum faucibus dui a et. Neque consectetur scelerisque condimentum posuere et magna nibh vitae nulla. Risus vitae sit luctus dictumst porta eu nulla non sollicitudin. Non malesuada elementum adipiscing et. Faucibus mi ante proin pretium praesent scelerisque. Aliquet tempor viverra eget quis. Semper facilisi a massa diam odio feugiat pharetra justo urna. Bibendum pulvinar et purus aliquam netus nisl. Posuere mattis accumsan sodales ultrices amet eget. Pretium felis pellentesque cursus purus fusce enim a at dolor. Ultricies condimentum ac eget etiam donec adipiscing lobortis. Molestie pellentesque placerat aliquam varius turpis lobortis consequat nulla nisl. Semper scelerisque ultrices urna mus in ornare scelerisque. Fringilla nunc et pellentesque massa integer condimentum. Duis tempus in vestibulum nam tincidunt accumsan arcu amet vestibulum. Sit mi pellentesque vehicula commodo. Turpis enim augue sit enim placerat consequat proin maecenas scelerisque.",
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
    category: "Investment Consulting",
    loc1: "Yunusabad, Tashkent",
    loc2: "Amir Temur, 03124923, Yunusobod District, Tashkent City, Uzbekistan",
    date: "12.01.2023",
    descr:
      "1Lorem ipsum dolor sit amet consectetur. Rhoncus hac dui phasellus dolor lectus aliquam diam. Curabitur elementum faucibus dui a et. Neque consectetur scelerisque condimentum posuere et magna nibh vitae nulla. Risus vitae sit luctus dictumst porta eu nulla non sollicitudin. Non malesuada elementum adipiscing et. Faucibus mi ante proin pretium praesent scelerisque. Aliquet tempor viverra eget quis. Semper facilisi a massa diam odio feugiat pharetra justo urna. Bibendum pulvinar et purus aliquam netus nisl. Posuere mattis accumsan sodales ultrices amet eget. Pretium felis pellentesque cursus purus fusce enim a at dolor. Ultricies condimentum ac eget etiam donec adipiscing lobortis. Molestie pellentesque placerat aliquam varius turpis lobortis consequat nulla nisl. Semper scelerisque ultrices urna mus in ornare scelerisque. Fringilla nunc et pellentesque massa integer condimentum. Duis tempus in vestibulum nam tincidunt accumsan arcu amet vestibulum. Sit mi pellentesque vehicula commodo. Turpis enim augue sit enim placerat consequat proin maecenas scelerisque.",
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
    title: "Al-Mashriq",
    category: "Investment Consulting",
    loc1: "Yunusabad, Tashkent",
    loc2: "Amir Temur, 03124923, Yunusobod District, Tashkent City, Uzbekistan",
    date: "12.01.2023",
    descr:
      "2Lorem ipsum dolor sit amet consectetur. Rhoncus hac dui phasellus dolor lectus aliquam diam. Curabitur elementum faucibus dui a et. Neque consectetur scelerisque condimentum posuere et magna nibh vitae nulla. Risus vitae sit luctus dictumst porta eu nulla non sollicitudin. Non malesuada elementum adipiscing et. Faucibus mi ante proin pretium praesent scelerisque. Aliquet tempor viverra eget quis. Semper facilisi a massa diam odio feugiat pharetra justo urna. Bibendum pulvinar et purus aliquam netus nisl. Posuere mattis accumsan sodales ultrices amet eget. Pretium felis pellentesque cursus purus fusce enim a at dolor. Ultricies condimentum ac eget etiam donec adipiscing lobortis. Molestie pellentesque placerat aliquam varius turpis lobortis consequat nulla nisl. Semper scelerisque ultrices urna mus in ornare scelerisque. Fringilla nunc et pellentesque massa integer condimentum. Duis tempus in vestibulum nam tincidunt accumsan arcu amet vestibulum. Sit mi pellentesque vehicula commodo. Turpis enim augue sit enim placerat consequat proin maecenas scelerisque.",
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

const OurProjects = () => {
  const [selectedCardIndex, setSelectedCardIndex] = useState(0);
  const [loading, setLoading] = useState(false);

   function handleCardClick(index) {
    setLoading(true);
    console.log(loading);
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

  const { t } = useTranslation();

  return (
    <OurProjectsWrapper>
      <Container>
        <div className="wrapper">
          {!loading ? (
            <div className="left" data-aos={"fade-right"}>
              {selectedCardIndex !== null ? (
                <div>
                  <h4 className="title">Our Completed Projects</h4>
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
                <p>Select a card to view its information</p>
              )}
            </div>
          ) : (
            <>
            <div className="left"></div>
            </>
          )}

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

import React, { useRef, useState } from "react";
import Container from "../../../Common/Container";
import { OurProjectsWrapper } from "./OurProjects.style";
import LocationSvg from "../../../Common/Svgs/LocationSvg";
import CalendarSvg from "../../../Common/Svgs/CalendarSvg";
import MyLink from "../../../Common/MyLink";
import { Carousel } from "antd";
import RightSvg from "../../../Common/Svgs/RightSvg";
import ToRightSvg from "../../../Common/Svgs/ToRightSvg";
import ToLeftSvg from "../../../Common/Svgs/ToLeftSvg";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Navigation } from "swiper";

const data = [
  {
    title: "Magic Building1",
    category: "Investment Consulting",
    loc1: "Yunusabad, Tashkent",
    loc2: "Amir Temur, 03124923, Yunusobod District, Tashkent City, Uzbekistan",
    date: "12.01.2023",
    descr:
      "1Lorem ipsum dolor sit amet consectetur. Rhoncus hac dui phasellus dolor lectus aliquam diam. Curabitur elementum faucibus dui a et. Neque consectetur scelerisque condimentum posuere et magna nibh vitae nulla. Risus vitae sit luctus dictumst porta eu nulla non sollicitudin. Non malesuada elementum adipiscing et. Faucibus mi ante proin pretium praesent scelerisque. Aliquet tempor viverra eget quis. Semper facilisi a massa diam odio feugiat pharetra justo urna. Bibendum pulvinar et purus aliquam netus nisl. Posuere mattis accumsan sodales ultrices amet eget. Pretium felis pellentesque cursus purus fusce enim a at dolor. Ultricies condimentum ac eget etiam donec adipiscing lobortis. Molestie pellentesque placerat aliquam varius turpis lobortis consequat nulla nisl. Semper scelerisque ultrices urna mus in ornare scelerisque. Fringilla nunc et pellentesque massa integer condimentum. Duis tempus in vestibulum nam tincidunt accumsan arcu amet vestibulum. Sit mi pellentesque vehicula commodo. Turpis enim augue sit enim placerat consequat proin maecenas scelerisque.",
    img1: "/images/gallery1.png",
  },
  {
    title: "Magic Building2",
    category: "Investment Consulting",
    loc1: "Yunusabad, Tashkent",
    loc2: "Amir Temur, 03124923, Yunusobod District, Tashkent City, Uzbekistan",
    date: "12.01.2023",
    descr:
      "2Lorem ipsum dolor sit amet consectetur. Rhoncus hac dui phasellus dolor lectus aliquam diam. Curabitur elementum faucibus dui a et. Neque consectetur scelerisque condimentum posuere et magna nibh vitae nulla. Risus vitae sit luctus dictumst porta eu nulla non sollicitudin. Non malesuada elementum adipiscing et. Faucibus mi ante proin pretium praesent scelerisque. Aliquet tempor viverra eget quis. Semper facilisi a massa diam odio feugiat pharetra justo urna. Bibendum pulvinar et purus aliquam netus nisl. Posuere mattis accumsan sodales ultrices amet eget. Pretium felis pellentesque cursus purus fusce enim a at dolor. Ultricies condimentum ac eget etiam donec adipiscing lobortis. Molestie pellentesque placerat aliquam varius turpis lobortis consequat nulla nisl. Semper scelerisque ultrices urna mus in ornare scelerisque. Fringilla nunc et pellentesque massa integer condimentum. Duis tempus in vestibulum nam tincidunt accumsan arcu amet vestibulum. Sit mi pellentesque vehicula commodo. Turpis enim augue sit enim placerat consequat proin maecenas scelerisque.",
    img1: "/images/gallery2.png",
  },
  {
    title: "Magic Building3",
    category: "Investment Consulting",
    loc1: "Yunusabad, Tashkent",
    loc2: "Amir Temur, 03124923, Yunusobod District, Tashkent City, Uzbekistan",
    date: "12.01.2023",
    descr:
      "3Lorem ipsum dolor sit amet consectetur. Rhoncus hac dui phasellus dolor lectus aliquam diam. Curabitur elementum faucibus dui a et. Neque consectetur scelerisque condimentum posuere et magna nibh vitae nulla. Risus vitae sit luctus dictumst porta eu nulla non sollicitudin. Non malesuada elementum adipiscing et. Faucibus mi ante proin pretium praesent scelerisque. Aliquet tempor viverra eget quis. Semper facilisi a massa diam odio feugiat pharetra justo urna. Bibendum pulvinar et purus aliquam netus nisl. Posuere mattis accumsan sodales ultrices amet eget. Pretium felis pellentesque cursus purus fusce enim a at dolor. Ultricies condimentum ac eget etiam donec adipiscing lobortis. Molestie pellentesque placerat aliquam varius turpis lobortis consequat nulla nisl. Semper scelerisque ultrices urna mus in ornare scelerisque. Fringilla nunc et pellentesque massa integer condimentum. Duis tempus in vestibulum nam tincidunt accumsan arcu amet vestibulum. Sit mi pellentesque vehicula commodo. Turpis enim augue sit enim placerat consequat proin maecenas scelerisque.",
    img1: "/images/gallery3.png",
  },
  {
    title: "Magic Building4",
    category: "Investment Consulting",
    loc1: "Yunusabad, Tashkent",
    loc2: "Amir Temur, 03124923, Yunusobod District, Tashkent City, Uzbekistan",
    date: "12.01.2023",
    descr:
      "4Lorem ipsum dolor sit amet consectetur. Rhoncus hac dui phasellus dolor lectus aliquam diam. Curabitur elementum faucibus dui a et. Neque consectetur scelerisque condimentum posuere et magna nibh vitae nulla. Risus vitae sit luctus dictumst porta eu nulla non sollicitudin. Non malesuada elementum adipiscing et. Faucibus mi ante proin pretium praesent scelerisque. Aliquet tempor viverra eget quis. Semper facilisi a massa diam odio feugiat pharetra justo urna. Bibendum pulvinar et purus aliquam netus nisl. Posuere mattis accumsan sodales ultrices amet eget. Pretium felis pellentesque cursus purus fusce enim a at dolor. Ultricies condimentum ac eget etiam donec adipiscing lobortis. Molestie pellentesque placerat aliquam varius turpis lobortis consequat nulla nisl. Semper scelerisque ultrices urna mus in ornare scelerisque. Fringilla nunc et pellentesque massa integer condimentum. Duis tempus in vestibulum nam tincidunt accumsan arcu amet vestibulum. Sit mi pellentesque vehicula commodo. Turpis enim augue sit enim placerat consequat proin maecenas scelerisque.",
    img1: "/images/gallery4.png",
  },
  {
    title: "Magic Building5",
    category: "Investment Consulting",
    loc1: "Yunusabad, Tashkent",
    loc2: "Amir Temur, 03124923, Yunusobod District, Tashkent City, Uzbekistan",
    date: "12.01.2023",
    descr:
      "5Lorem ipsum dolor sit amet consectetur. Rhoncus hac dui phasellus dolor lectus aliquam diam. Curabitur elementum faucibus dui a et. Neque consectetur scelerisque condimentum posuere et magna nibh vitae nulla. Risus vitae sit luctus dictumst porta eu nulla non sollicitudin. Non malesuada elementum adipiscing et. Faucibus mi ante proin pretium praesent scelerisque. Aliquet tempor viverra eget quis. Semper facilisi a massa diam odio feugiat pharetra justo urna. Bibendum pulvinar et purus aliquam netus nisl. Posuere mattis accumsan sodales ultrices amet eget. Pretium felis pellentesque cursus purus fusce enim a at dolor. Ultricies condimentum ac eget etiam donec adipiscing lobortis. Molestie pellentesque placerat aliquam varius turpis lobortis consequat nulla nisl. Semper scelerisque ultrices urna mus in ornare scelerisque. Fringilla nunc et pellentesque massa integer condimentum. Duis tempus in vestibulum nam tincidunt accumsan arcu amet vestibulum. Sit mi pellentesque vehicula commodo. Turpis enim augue sit enim placerat consequat proin maecenas scelerisque.",
    img1: "/images/gallery1.png",
  },
  {
    title: "Magic Building1",
    category: "Investment Consulting",
    loc1: "Yunusabad, Tashkent",
    loc2: "Amir Temur, 03124923, Yunusobod District, Tashkent City, Uzbekistan",
    date: "12.01.2023",
    descr:
      "1Lorem ipsum dolor sit amet consectetur. Rhoncus hac dui phasellus dolor lectus aliquam diam. Curabitur elementum faucibus dui a et. Neque consectetur scelerisque condimentum posuere et magna nibh vitae nulla. Risus vitae sit luctus dictumst porta eu nulla non sollicitudin. Non malesuada elementum adipiscing et. Faucibus mi ante proin pretium praesent scelerisque. Aliquet tempor viverra eget quis. Semper facilisi a massa diam odio feugiat pharetra justo urna. Bibendum pulvinar et purus aliquam netus nisl. Posuere mattis accumsan sodales ultrices amet eget. Pretium felis pellentesque cursus purus fusce enim a at dolor. Ultricies condimentum ac eget etiam donec adipiscing lobortis. Molestie pellentesque placerat aliquam varius turpis lobortis consequat nulla nisl. Semper scelerisque ultrices urna mus in ornare scelerisque. Fringilla nunc et pellentesque massa integer condimentum. Duis tempus in vestibulum nam tincidunt accumsan arcu amet vestibulum. Sit mi pellentesque vehicula commodo. Turpis enim augue sit enim placerat consequat proin maecenas scelerisque.",
    img1: "/images/gallery1.png",
  },
  {
    title: "Magic Building2",
    category: "Investment Consulting",
    loc1: "Yunusabad, Tashkent",
    loc2: "Amir Temur, 03124923, Yunusobod District, Tashkent City, Uzbekistan",
    date: "12.01.2023",
    descr:
      "2Lorem ipsum dolor sit amet consectetur. Rhoncus hac dui phasellus dolor lectus aliquam diam. Curabitur elementum faucibus dui a et. Neque consectetur scelerisque condimentum posuere et magna nibh vitae nulla. Risus vitae sit luctus dictumst porta eu nulla non sollicitudin. Non malesuada elementum adipiscing et. Faucibus mi ante proin pretium praesent scelerisque. Aliquet tempor viverra eget quis. Semper facilisi a massa diam odio feugiat pharetra justo urna. Bibendum pulvinar et purus aliquam netus nisl. Posuere mattis accumsan sodales ultrices amet eget. Pretium felis pellentesque cursus purus fusce enim a at dolor. Ultricies condimentum ac eget etiam donec adipiscing lobortis. Molestie pellentesque placerat aliquam varius turpis lobortis consequat nulla nisl. Semper scelerisque ultrices urna mus in ornare scelerisque. Fringilla nunc et pellentesque massa integer condimentum. Duis tempus in vestibulum nam tincidunt accumsan arcu amet vestibulum. Sit mi pellentesque vehicula commodo. Turpis enim augue sit enim placerat consequat proin maecenas scelerisque.",
    img1: "/images/gallery2.png",
  },
  {
    title: "Magic Building3",
    category: "Investment Consulting",
    loc1: "Yunusabad, Tashkent",
    loc2: "Amir Temur, 03124923, Yunusobod District, Tashkent City, Uzbekistan",
    date: "12.01.2023",
    descr:
      "3Lorem ipsum dolor sit amet consectetur. Rhoncus hac dui phasellus dolor lectus aliquam diam. Curabitur elementum faucibus dui a et. Neque consectetur scelerisque condimentum posuere et magna nibh vitae nulla. Risus vitae sit luctus dictumst porta eu nulla non sollicitudin. Non malesuada elementum adipiscing et. Faucibus mi ante proin pretium praesent scelerisque. Aliquet tempor viverra eget quis. Semper facilisi a massa diam odio feugiat pharetra justo urna. Bibendum pulvinar et purus aliquam netus nisl. Posuere mattis accumsan sodales ultrices amet eget. Pretium felis pellentesque cursus purus fusce enim a at dolor. Ultricies condimentum ac eget etiam donec adipiscing lobortis. Molestie pellentesque placerat aliquam varius turpis lobortis consequat nulla nisl. Semper scelerisque ultrices urna mus in ornare scelerisque. Fringilla nunc et pellentesque massa integer condimentum. Duis tempus in vestibulum nam tincidunt accumsan arcu amet vestibulum. Sit mi pellentesque vehicula commodo. Turpis enim augue sit enim placerat consequat proin maecenas scelerisque.",
    img1: "/images/gallery3.png",
  },
  {
    title: "Magic Building4",
    category: "Investment Consulting",
    loc1: "Yunusabad, Tashkent",
    loc2: "Amir Temur, 03124923, Yunusobod District, Tashkent City, Uzbekistan",
    date: "12.01.2023",
    descr:
      "4Lorem ipsum dolor sit amet consectetur. Rhoncus hac dui phasellus dolor lectus aliquam diam. Curabitur elementum faucibus dui a et. Neque consectetur scelerisque condimentum posuere et magna nibh vitae nulla. Risus vitae sit luctus dictumst porta eu nulla non sollicitudin. Non malesuada elementum adipiscing et. Faucibus mi ante proin pretium praesent scelerisque. Aliquet tempor viverra eget quis. Semper facilisi a massa diam odio feugiat pharetra justo urna. Bibendum pulvinar et purus aliquam netus nisl. Posuere mattis accumsan sodales ultrices amet eget. Pretium felis pellentesque cursus purus fusce enim a at dolor. Ultricies condimentum ac eget etiam donec adipiscing lobortis. Molestie pellentesque placerat aliquam varius turpis lobortis consequat nulla nisl. Semper scelerisque ultrices urna mus in ornare scelerisque. Fringilla nunc et pellentesque massa integer condimentum. Duis tempus in vestibulum nam tincidunt accumsan arcu amet vestibulum. Sit mi pellentesque vehicula commodo. Turpis enim augue sit enim placerat consequat proin maecenas scelerisque.",
    img1: "/images/gallery4.png",
  },
  {
    title: "Magic Building5",
    category: "Investment Consulting",
    loc1: "Yunusabad, Tashkent",
    loc2: "Amir Temur, 03124923, Yunusobod District, Tashkent City, Uzbekistan",
    date: "12.01.2023",
    descr:
      "5Lorem ipsum dolor sit amet consectetur. Rhoncus hac dui phasellus dolor lectus aliquam diam. Curabitur elementum faucibus dui a et. Neque consectetur scelerisque condimentum posuere et magna nibh vitae nulla. Risus vitae sit luctus dictumst porta eu nulla non sollicitudin. Non malesuada elementum adipiscing et. Faucibus mi ante proin pretium praesent scelerisque. Aliquet tempor viverra eget quis. Semper facilisi a massa diam odio feugiat pharetra justo urna. Bibendum pulvinar et purus aliquam netus nisl. Posuere mattis accumsan sodales ultrices amet eget. Pretium felis pellentesque cursus purus fusce enim a at dolor. Ultricies condimentum ac eget etiam donec adipiscing lobortis. Molestie pellentesque placerat aliquam varius turpis lobortis consequat nulla nisl. Semper scelerisque ultrices urna mus in ornare scelerisque. Fringilla nunc et pellentesque massa integer condimentum. Duis tempus in vestibulum nam tincidunt accumsan arcu amet vestibulum. Sit mi pellentesque vehicula commodo. Turpis enim augue sit enim placerat consequat proin maecenas scelerisque.",
    img1: "/images/gallery1.png",
  },
];

const OurProjects = () => {
  const [selectedCardIndex, setSelectedCardIndex] = useState(0);

  function handleCardClick(index) {
    setSelectedCardIndex(index);
  }
  const swiperRef = useRef();
  const swiper = useSwiper();

  return (
    <OurProjectsWrapper>
      <Container>
        <div className="wrapper">
          <div className="left">
            {selectedCardIndex !== null ? (
              <div>
                <h4 className="title">Our Completed Projects</h4>
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
                  <h5 className="title-img">Project Gallery</h5>
                  <Swiper
                    slidesPerView={2}
                    spaceBetween={30}
                    ref={swiperRef}
                    loop={true}
                    pagination={{
                      clickable: true,
                    }}
                    navigation={{
                      prevEl: ".prev",
                      nextEl: ".next",
                      clickable: true,
                    }}
                    modules={[Navigation]}
                    className="mySwiper"
                  >
                    <SwiperSlide>
                      <div className="imgs">
                        <div className="img">
                          <img src={data[selectedCardIndex].img1} alt="" />
                        </div>
                        <div className="img">
                          <img src={data[selectedCardIndex].img1} alt="" />
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="imgs">
                        <div className="img">
                          <img src={data[selectedCardIndex].img1} alt="" />
                        </div>
                        <div className="img">
                          <img src={data[selectedCardIndex].img1} alt="" />
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="imgs">
                        <div className="img">
                          <img src={data[selectedCardIndex].img1} alt="" />
                        </div>
                        <div className="img">
                          <img src={data[selectedCardIndex].img1} alt="" />
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="imgs">
                        <div className="img">
                          <img src={data[selectedCardIndex].img1} alt="" />
                        </div>
                        <div className="img">
                          <img src={data[selectedCardIndex].img1} alt="" />
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

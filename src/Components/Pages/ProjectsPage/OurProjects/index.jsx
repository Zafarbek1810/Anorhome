import React from "react";
import Container from "../../../Common/Container";
import { OurProjectsWrapper } from "./OurProjects.style";
import LocationSvg from "../../../Common/Svgs/LocationSvg";
import CalendarSvg from "../../../Common/Svgs/CalendarSvg";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";
import { Grid, Pagination } from "swiper";

const OurProjects = () => {
  return (
    <OurProjectsWrapper>
      <Container>
        <div className="wrapper">
          <div className="left">
            <h4 className="title">Our Completed Projects</h4>
            <p className="heading">Magic Building</p>
            <p className="descr">
              Lorem ipsum dolor sit amet consectetur. Rhoncus hac dui phasellus
              dolor lectus aliquam diam. Curabitur elementum faucibus dui a et.
              Neque consectetur scelerisque condimentum posuere et magna nibh
              vitae nulla. Risus vitae sit luctus dictumst porta eu nulla non
              sollicitudin. Non malesuada elementum adipiscing et. Faucibus mi
              ante proin pretium praesent scelerisque. Aliquet tempor viverra
              eget quis. Semper facilisi a massa diam odio feugiat pharetra
              justo urna. Bibendum pulvinar et purus aliquam netus nisl. Posuere
              mattis accumsan sodales ultrices amet eget. Pretium felis
              pellentesque cursus purus fusce enim a at dolor. Ultricies
              condimentum ac eget etiam donec adipiscing lobortis. Molestie
              pellentesque placerat aliquam varius turpis lobortis consequat
              nulla nisl. Semper scelerisque ultrices urna mus in ornare
              scelerisque. Fringilla nunc et pellentesque massa integer
              condimentum. Duis tempus in vestibulum nam tincidunt accumsan arcu
              amet vestibulum. Sit mi pellentesque vehicula commodo. Turpis enim
              augue sit enim placerat consequat proin maecenas scelerisque.
            </p>
            <div className="location">
              <LocationSvg />
              Amir Temur, 03124923, Yunusobod District, Tashkent City,
              Uzbekistan
            </div>
            <div className="calendar">
              <CalendarSvg /> 12.01.2023
            </div>

            <div className="galery">
              <h5 className="title">Project Gallery</h5>
              <div className="imgs">
                <Swiper
                  slidesPerView={3}
                  grid={{
                    rows: 2,
                  }}
                  spaceBetween={30}
                  pagination={{
                    clickable: true,
                  }}
                  modules={[Grid, Pagination]}
                  className="mySwiper"
                >
                  <SwiperSlide>
                    <img src="/images/gallery1.png" alt="" />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img src="/images/gallery1.png" alt="" />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img src="/images/gallery1.png" alt="" />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img src="/images/gallery1.png" alt="" />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img src="/images/gallery1.png" alt="" />
                  </SwiperSlide>
                </Swiper>
              </div>
            </div>
          </div>
          <div className="right"></div>
        </div>
      </Container>
    </OurProjectsWrapper>
  );
};

export default OurProjects;

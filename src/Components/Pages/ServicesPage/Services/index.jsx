import React, { useEffect, useRef } from "react";
import useScrollPosition from "../../../../Hooks/useScrollPosition";
import MyLink from "../../../Common/MyLink";
import { ServicesWrapper } from "./Services.style";
import { useRouter } from "next/router";
import useWindowDimensions from "../../../../Hooks/useWindow";
import AOS from "aos";
const data = [
  {
    id: "1",
    span: "1",
    p1: "Strategic consulting",
    img: "/images/services/service1.jpg",
    p2: "Lorem ipsum dolor sit amet consectetur. Sit nulla lectus quis rhoncus scelerisque venenatis luctus nunc. Scelerisque pulvinar amet turpis elit euismod mollis interdum nulla. Consequat viverra aenean egestas congue metus nisi sed. Semper vitae amet faucibus in ac. Donec aliquam eu faucibus faucibus id lobortis integer. Ipsum dignissim non dui nullam eu magna. Ut pellentesque arcu est pulvinar ullamcorper. Aliquet egestas at tincidunt mi scelerisque orci",
  },
  {
    id: "2",
    span: "2",
    p1: "Promotion of real estate development projects",
    img: "/images/services/service2.jpg",
    p2: "Lorem ipsum dolor sit amet consectetur. Sit nulla lectus quis rhoncus scelerisque venenatis luctus nunc. Scelerisque pulvinar amet turpis elit euismod mollis interdum nulla. Consequat viverra aenean egestas congue metus nisi sed. Semper vitae amet faucibus in ac. Donec aliquam eu faucibus faucibus id lobortis integer. Ipsum dignissim non dui nullam eu magna. Ut pellentesque arcu est pulvinar ullamcorper. Aliquet egestas at tincidunt mi scelerisque orci",
  },
  {
    id: "3",
    span: "3",
    p1: "Investment consulting",
    img: "/images/services/service3.jpg",
    p2: "Lorem ipsum dolor sit amet consectetur. Sit nulla lectus quis rhoncus scelerisque venenatis luctus nunc. Scelerisque pulvinar amet turpis elit euismod mollis interdum nulla. Consequat viverra aenean egestas congue metus nisi sed. Semper vitae amet faucibus in ac. Donec aliquam eu faucibus faucibus id lobortis integer. Ipsum dignissim non dui nullam eu magna. Ut pellentesque arcu est pulvinar ullamcorper. Aliquet egestas at tincidunt mi scelerisque orci",
  },
  {
    id: "4",
    span: "4",
    p1: "Real estate services",
    img: "/images/services/service4.jpg",
    p2: "Lorem ipsum dolor sit amet consectetur. Sit nulla lectus quis rhoncus scelerisque venenatis luctus nunc. Scelerisque pulvinar amet turpis elit euismod mollis interdum nulla. Consequat viverra aenean egestas congue metus nisi sed. Semper vitae amet faucibus in ac. Donec aliquam eu faucibus faucibus id lobortis integer. Ipsum dignissim non dui nullam eu magna. Ut pellentesque arcu est pulvinar ullamcorper. Aliquet egestas at tincidunt mi scelerisque orci",
  },
  {
    id: "5",
    span: "5",
    p1: "Trust management",
    img: "/images/services/service5.jpg",
    p2: "Lorem ipsum dolor sit amet consectetur. Sit nulla lectus quis rhoncus scelerisque venenatis luctus nunc. Scelerisque pulvinar amet turpis elit euismod mollis interdum nulla. Consequat viverra aenean egestas congue metus nisi sed. Semper vitae amet faucibus in ac. Donec aliquam eu faucibus faucibus id lobortis integer. Ipsum dignissim non dui nullam eu magna. Ut pellentesque arcu est pulvinar ullamcorper. Aliquet egestas at tincidunt mi scelerisque orci",
  },
];

const Services = () => {
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
        <p>Find us at some of the coolest cities across the globe.</p>
        <h4>Anorhome Services</h4>
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
                <MyLink to={`/serviceDetail?id=${v.id}`}>Learn More</MyLink>
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

  const elDistanceToTop =
    window.pageYOffset + imgRef.current?.getBoundingClientRect().top;

  const isVisibleOnScreen = pos + window.innerHeight > elDistanceToTop;
  const num = pos + window.innerHeight - elDistanceToTop;

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

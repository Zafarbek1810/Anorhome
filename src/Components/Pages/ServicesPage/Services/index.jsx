import React, { useEffect, useRef } from "react";
import useScrollPosition from "../../../../Hooks/useScrollPosition";
import MyLink from "../../../Common/MyLink";
import { ServicesWrapper } from "./Services.style";

const data = [
  {
    span: "1",
    p1: "Investment Consulting",
    img: "/images/services/service1.png",
    p2: "Lorem ipsum dolor sit amet consectetur. Sit nulla lectus quis rhoncus scelerisque venenatis luctus nunc. Scelerisque pulvinar amet turpis elit euismod mollis interdum nulla. Consequat viverra aenean egestas congue metus nisi sed. Semper vitae amet faucibus in ac. Donec aliquam eu faucibus faucibus id lobortis integer. Ipsum dignissim non dui nullam eu magna. Ut pellentesque arcu est pulvinar ullamcorper. Aliquet egestas at tincidunt mi scelerisque orci",
  },
  {
    span: "2",
    p1: "Investment Consulting",
    img: "/images/services/service2.png",
    p2: "Lorem ipsum dolor sit amet consectetur. Sit nulla lectus quis rhoncus scelerisque venenatis luctus nunc. Scelerisque pulvinar amet turpis elit euismod mollis interdum nulla. Consequat viverra aenean egestas congue metus nisi sed. Semper vitae amet faucibus in ac. Donec aliquam eu faucibus faucibus id lobortis integer. Ipsum dignissim non dui nullam eu magna. Ut pellentesque arcu est pulvinar ullamcorper. Aliquet egestas at tincidunt mi scelerisque orci",
  },
  {
    span: "3",
    p1: "Investment Consulting",
    img: "/images/services/service3.png",
    p2: "Lorem ipsum dolor sit amet consectetur. Sit nulla lectus quis rhoncus scelerisque venenatis luctus nunc. Scelerisque pulvinar amet turpis elit euismod mollis interdum nulla. Consequat viverra aenean egestas congue metus nisi sed. Semper vitae amet faucibus in ac. Donec aliquam eu faucibus faucibus id lobortis integer. Ipsum dignissim non dui nullam eu magna. Ut pellentesque arcu est pulvinar ullamcorper. Aliquet egestas at tincidunt mi scelerisque orci",
  },
  {
    span: "4",
    p1: "Investment Consulting",
    img: "/images/services/service4.png",
    p2: "Lorem ipsum dolor sit amet consectetur. Sit nulla lectus quis rhoncus scelerisque venenatis luctus nunc. Scelerisque pulvinar amet turpis elit euismod mollis interdum nulla. Consequat viverra aenean egestas congue metus nisi sed. Semper vitae amet faucibus in ac. Donec aliquam eu faucibus faucibus id lobortis integer. Ipsum dignissim non dui nullam eu magna. Ut pellentesque arcu est pulvinar ullamcorper. Aliquet egestas at tincidunt mi scelerisque orci",
  },
  {
    span: "5",
    p1: "Investment Consulting",
    img: "/images/services/service5.png",
    p2: "Lorem ipsum dolor sit amet consectetur. Sit nulla lectus quis rhoncus scelerisque venenatis luctus nunc. Scelerisque pulvinar amet turpis elit euismod mollis interdum nulla. Consequat viverra aenean egestas congue metus nisi sed. Semper vitae amet faucibus in ac. Donec aliquam eu faucibus faucibus id lobortis integer. Ipsum dignissim non dui nullam eu magna. Ut pellentesque arcu est pulvinar ullamcorper. Aliquet egestas at tincidunt mi scelerisque orci",
  },
  {
    span: "6",
    p1: "Investment Consulting",
    img: "/images/services/service6.png",
    p2: "Lorem ipsum dolor sit amet consectetur. Sit nulla lectus quis rhoncus scelerisque venenatis luctus nunc. Scelerisque pulvinar amet turpis elit euismod mollis interdum nulla. Consequat viverra aenean egestas congue metus nisi sed. Semper vitae amet faucibus in ac. Donec aliquam eu faucibus faucibus id lobortis integer. Ipsum dignissim non dui nullam eu magna. Ut pellentesque arcu est pulvinar ullamcorper. Aliquet egestas at tincidunt mi scelerisque orci",
  },
];

const Services = () => {
    const imgRef =useRef()

    const pos = useScrollPosition(-0.05); //scrollY * 0.5


    useEffect(()=>{
        console.log(window.scrollY);
    },[])

  return (
    <ServicesWrapper>
      <div className="top">
        <p>Find us at some of the coolest cities across the globe.</p>
        <h4>Anorhome Services</h4>
      </div>

      <div className="wrapper">
        {data.map((v,i)=>(
        <div className="box" key={i}>
          <div className="col-1">
            <span>{v.span}</span>
            <p>{v.p1}</p>
          </div>
          <div className="col-2" >
            <img src={v.img} alt="" style={{ transform: `translateY(${pos}px)` }} ref={imgRef}/>
          </div>
          <div className="col-3">
            <p>
             {v.p2}
            </p>
            <div className="btn">
              <MyLink to="/#">Learn More</MyLink>
            </div>
          </div>
        </div>
        ))}
      </div>
    </ServicesWrapper>
  );
};

export default Services;

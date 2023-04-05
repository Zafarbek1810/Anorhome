import React, { useRef } from "react";
import { DemoStyle } from "./DemoStyle";

const Card = () => {
  const cardRef = useRef(null);

  const handleScroll = () => {
    const scrollTop = cardRef.current.scrollTop;
    const image = cardRef.current.querySelector("img");
    image.style.transform = `translateY(-${scrollTop}px)`;
  };

  return (
    <div className="card" ref={cardRef} onScroll={handleScroll}>
      <div className="top">Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem unde sed sint ut. Dolores dignissimos totam quidem laudantium ullam voluptates error animi vitae eligendi nobis amet exercitationem est blanditiis temporibus asperiores magnam porro distinctio ipsa veniam, id placeat magni? Minima unde delectus omnis error optio sunt debitis fugit quisquam eaque.</div>
      <div className="image"><img src="/images/card.png" alt="" /></div>
      <div className="bottom">Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, earum. Facilis labore nemo voluptas autem enim nihil quo ex, dicta, doloribus libero, modi animi quaerat! Illum quo similique provident, et quasi dolore unde perspiciatis eaque architecto odit repellendus praesentium, minus rerum eligendi, officiis commodi. Nam quasi ipsum neque est distinctio?</div>
    </div>
  );
};

const Demo = () => {
  
  return (
    <DemoStyle>
      <div className="App">
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
    </div>
    </DemoStyle>
  );
};



export default Demo;

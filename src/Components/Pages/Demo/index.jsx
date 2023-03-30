import React, { useEffect, useRef, useState } from "react";
import MyLink from "../../Common/MyLink";
import { DemoStyle } from "./DemoStyle";
import Container from "../../Common/Container";
import { Carousel } from "antd";

const Demo = () => {
  const [selectedCardIndex, setSelectedCardIndex] = useState(null);

  function handleCardClick(index) {
    setSelectedCardIndex(index);
  }
  return (
    <DemoStyle>
      <div className="card-information">
        <div className="card-list">
          {props.cards.map((card, index) => (
            <div
              key={index}
              className={`card ${
                index === selectedCardIndex ? "selected" : ""
              }`}
              onClick={() => handleCardClick(index)}
            >
              <h3>{card.title}</h3>
              <p>{card.description}</p>
            </div>
          ))}
        </div>
        <div className="card-info">
          {selectedCardIndex !== null ? (
            <div>
              <h2>{props.cards[selectedCardIndex].title}</h2>
              <p>{props.cards[selectedCardIndex].info}</p>
            </div>
          ) : (
            <p>Select a card to view its information</p>
          )}
        </div>
      </div>
    </DemoStyle>
  );
};



export default Demo;

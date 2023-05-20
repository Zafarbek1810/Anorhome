import React from "react";
import NewsHomeWrapper from "./News.style";
import Container from "../../../Common/Container";
import MyLink from "../../../Common/MyLink";
import ArrowRight from "../../../Common/Svgs/ArrowRight";

const data = [
  {
    id: 1,
    img: "/images/card-new.png",
    span: "News",
    title: "New post’s title is here",
    text: "Lorem ipsum dolor sit amet consectetur. Fermentum elit eleifend gravida adipiscing. Odio amet posuere egestas risus elit urna scelerisque. Porta dui integer.",
  },
  {
    id: 2,
    img: "/images/card-new2.png",
    span: "Reviews",
    title: "New post’s title is here",
    text: "Lorem ipsum dolor sit amet consectetur. Fermentum elit eleifend gravida adipiscing. Odio amet posuere egestas risus elit urna scelerisque. Porta dui integer.",
  },
  {
    id: 3,
    img: "/images/card-new3.png",
    span: "Analytics",
    title: "New post’s title is here",
    text: "Lorem ipsum dolor sit amet consectetur. Fermentum elit eleifend gravida adipiscing. Odio amet posuere egestas risus elit urna scelerisque. Porta dui integer.",
  },
];

const NewsHome = () => {
  return (
    <NewsHomeWrapper>
      <div data-aos={"fade-in"} className="title">
        <Container>
          <h3>News And Analytics</h3>
        </Container>
      </div>
      <Container>
        <div className="cards">
          {data.map((item) => (
            <div key={item.id} className="card">
              <div className="card__img">
                <img src={item.img} alt="" />
                <span>{item.span}</span>
              </div>
              <div className="card__content">
                <div className="card__content__title">
                   <h3>{item.title}</h3>
                </div>
                <div className="card__content__text">
                  <p>{item.text}</p>
                </div>
                <MyLink to={`news_detail?id=${item.id}`}>Read More <ArrowRight/></MyLink>
              </div>
            </div>
          ))}
        </div>

        <div className="btn">
          <MyLink to="/news">See All</MyLink>
        </div>
      </Container>
    </NewsHomeWrapper>
  );
};

export default NewsHome;

import React from "react";
import Container from "../../../Common/Container";
import CalendarSvgNew from "../../../Common/Svgs/CalendarSvgNew";
import Header from "../../Header";
import ArrowRight from "../../../Common/Svgs/ArrowRight";
import MyLink from "../../../Common/MyLink";
import DetailStyle from "./Detail.style";
import Contact from "../../HomePage/Contact/contact";

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

const NewDetail = ({ id }) => {
  return (
    <>
      <Header />
      <div style={{ height: 150, background: "#161a1d" }}></div>
      <DetailStyle>
        <div className="wrap">
          <div className="left">
            <div className="top">
              <h3>New post’s title is here</h3>
              <span className="date">
                <CalendarSvgNew /> 23.12.2023
              </span>
            </div>
            <p className="subtitle">
              Lorem ipsum dolor sit amet consectetur. Aliquam egestas quis quam
              sollicitudin. Netus id aenean duis dui purus. Nunc leo vel nisi
              nisl cursus. Purus sit erat nisi nulla. Tellus semper massa
              volutpat bibendum nulla eros in. At potenti at eget at dui blandit
              odio vel. Eu facilisi egestas vitae eu eleifend nulla egestas.
            </p>
            <img src="/images/new-detail.png" alt="" />
            <p className="text">
              Habitant eget tortor magna odio. Viverra penatibus quam at in
              semper. Vel et at dignissim vulputate elit. Ultrices morbi ac id
              felis et diam ac imperdiet faucibus. Nisi libero vulputate duis
              turpis tristique eget. Aliquet aliquet massa risus pharetra elit
              velit fermentum amet. Sed elementum non quam blandit. Sagittis nam
              nunc bibendum vestibulum tincidunt ornare fermentum. Velit risus
              turpis in velit elit augue nunc pellentesque. Netus sagittis
              sollicitudin odio iaculis viverra. Senectus dui elementum
              ultricies vitae urna faucibus tortor mattis pharetra. Sed egestas
              tortor lectus tristique ultrices sed urna et. Pulvinar egestas
              phasellus lobortis proin gravida magna mattis et nulla. Dignissim
              curabitur ut aenean commodo donec tristique. Posuere pharetra
              faucibus sit accumsan a lorem. Morbi aliquet dictum nulla
              curabitur nascetur enim. Et morbi sagittis sit lacus interdum. Ut
              consectetur in nunc ut at donec. Volutpat malesuada tellus
              maecenas lobortis sapien. Semper mollis ipsum a ullamcorper. Nulla
              quam felis tempor vitae in tincidunt volutpat diam massa. Diam
              aliquam eleifend semper quis. Pretium in turpis nisl ridiculus sed
              etiam velit. Adipiscing montes consequat gravida eu id in velit.
              Viverra metus volutpat semper quam in ultrices nisl. Eleifend
              nulla ut nibh mauris sociis neque. Arcu velit ornare cursus
              dictumst libero. Diam dui id pretium condimentum mi ultricies
              eget. Morbi arcu tincidunt pharetra in. At ultrices maecenas vitae
              dignissim ullamcorper proin et ut. Fusce euismod nunc neque
              fermentum. Erat risus molestie mauris dictum fermentum eu augue.
              Turpis convallis eu tellus eu sit ipsum. Tincidunt gravida justo
              mauris amet proin cras nisi. Sit molestie molestie egestas
              pulvinar pretium vitae aliquam non viverra. Quam ac bibendum
              convallis euismod porttitor netus sit consectetur tincidunt.
              Ultricies libero nunc mi bibendum sodales malesuada commodo eget
              tristique. Sit tristique scelerisque arcu sed diam egestas enim.
              Volutpat massa tellus in vitae non id in habitasse ac. Nibh in
              tellus aliquet lectus rhoncus amet justo id bibendum. Mattis elit
              vestibulum eleifend vitae. Augue nisl porta quisque adipiscing non
              egestas ut ut. Maecenas tristique nulla quam pulvinar egestas
              urna. Non lacus accumsan lobortis sapien. Diam ut facilisis id
              parturient aliquet. Risus sit eget enim et tincidunt volutpat
              orci. Mattis non viverra euismod vel posuere nunc sed quam
              pellentesque. Turpis ullamcorper cursus feugiat aenean ornare. Sed
              integer turpis sagittis venenatis viverra amet in a. Libero dictum
              dictumst diam velit eros ac. Faucibus tempus elementum nisi odio
              mattis blandit. Dui sagittis erat tellus ac ut laoreet ut. Id
              quisque cras mi elementum tortor. Neque ultrices pretium dictumst
              vel eget sit hendrerit dui. Mattis diam elementum sodales justo
              elementum sit nunc adipiscing. Cras pharetra quis non integer id.
              Cursus vulputate proin vel dui sagittis integer porta ante quis.
              Dignissim feugiat congue justo sit nunc nibh. Vitae risus sed ut
              elementum interdum. Aliquet est aliquet ut. Diam ut facilisis id
              parturient aliquet. Risus sit eget enim et tincidunt volutpat
              orci. Mattis non viverra euismod vel posuere nunc sed quam
              pellentesque. Turpis ullamcorper cursus feugiat aenean ornare. Sed
              integer turpis sagittis venenatis viverra amet in a. Libero dictum
              dictumst diam velit eros ac. Faucibus tempus elementum nisi odio
              mattis blandit. Dui sagittis erat tellus ac ut laoreet ut. Id
              quisque cras mi elementum tortor. Neque ultrices pretium dictumst
              vel eget sit hendrerit dui. Mattis diam elementum sodales justo
              elementum sit nunc adipiscing. Cras pharetra quis non integer id.
              Cursus vulputate proin vel dui sagittis integer porta ante quis.
              Dignissim feugiat congue justo sit nunc nibh. Vitae risus sed ut
              elementum interdum. Aliquet est aliquet ut.Diam ut facilisis id
              parturient aliquet. Risus sit eget enim et tincidunt volutpat
              orci. Mattis non viverra euismod vel posuere nunc sed quam
              pellentesque. Turpis ullamcorper cursus feugiat aenean ornare. Sed
              integer turpis sagittis venenatis viverra amet in a. Libero dictum
              dictumst diam velit eros ac. Faucibus tempus elementum nisi odio
              mattis blandit. Dui sagittis erat tellus ac ut laoreet ut.
            </p>
          </div>
          <div className="right">
            <div className="cards">
              {data.map((item) => (
                <div key={item.id} data-aos={"fade-up"} className="card">
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
                    <MyLink to={`news_detail?id=${item.id}`}>
                      Read More <ArrowRight />
                    </MyLink>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </DetailStyle>
      <Contact/>
    </>
  );
};

export default NewDetail;

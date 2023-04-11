import React, { useState } from "react";
import Header from "../../Header";
import Footer from "../../Footer/footer";
import ThirdSection from "../../HomePage/ThirdSection";
import Contact from "../../HomePage/Contact/contact";
import { TemplateWrapper } from "./ServiceDetail.style";
import Container from "../../../Common/Container";
import { useTranslation } from "react-i18next";


const data = [
  {
    id: "1",
    title: "hero.title-span",
    banner: {
      title: "hero.title-span",
      img: "/images/banner.jpg",
      descr:
        "hero.paragr",
    },
    works: {
      title: "How It Works",
      card1: {
        svg: "/images/vector.png",
        title: "Fill Form",
        descr:
          "Lorem ipsum dolor sit amet consectetur. Sit nulla lectus quis rhoncus scelerisque venenatis luctus nunc. Sc",
      },
      card2: {
        svg: "/images/vector2.png",
        title: "Administration",
        descr:
          "Lorem ipsum dolor sit amet consectetur. Sit nulla lectus quis rhoncus scelerisque venenatis luctus nunc. Sc",
      },
      card3: {
        svg: "/images/vector3.png",
        title: "Keep In Touch",
        descr:
          "Lorem ipsum dolor sit amet consectetur. Sit nulla lectus quis rhoncus scelerisque venenatis luctus nunc. Sc",
      },
      card4: {
        svg: "/images/vector4.png",
        title: "Make A Deal",
        descr:
          "Lorem ipsum dolor sit amet consectetur. Sit nulla lectus quis rhoncus scelerisque venenatis luctus nunc. Sc",
      },
    },
    about: {
      title: "About Service",
      descr1:
        "Lorem ipsum dolor sit amet consectetur. Rhoncus hac dui phasellus dolor lectus aliquam diam. Curabitur elementum faucibus dui a et. Neque consectetur scelerisque condimentum posuere et magna nibh vitae nulla. Risus vitae sit luctus dictumst porta eu nulla non sollicitudin. Non malesuada elementum adipiscinndimentum ac e",
      descr2:
        "Lorem ipsum dolor sit amet consectetur. Rhoncus hac dui phasellus dolor lectus aliquam diam. Curabitur elementum faucibus dui a et. Neque consectetur scelerisque condimentum posuere et magna nibh vitae nulla. Risus vitae sit luctus dictumst porta eu nulla non sollicitudin. Non malesuada elementum adipiscinndimentum ac e",
    },
    services: {
      title: "Other Services",
      card1: {
        img: "/images/card.png",
        cardTitle: "Investment In Real State",
        descr:
          "Lorem ipsum dolor sit amet consectetur. Sit nulla lectus quis rhoncus scelerisque venenatis luctus nunc. Scelerisque pulvinar  e",
      },
      card2: {
        img: "/images/card.png",
        cardTitle: "Investment In Real State",
        descr:
          "Lorem ipsum dolor sit amet consectetur. Sit nulla lectus quis rhoncus scelerisque venenatis luctus nunc. Scelerisque pulvinar  e",
      },
      card3: {
        img: "/images/card.png",
        cardTitle: "Investment In Real State",
        descr:
          "Lorem ipsum dolor sit amet consectetur. Sit nulla lectus quis rhoncus scelerisque venenatis luctus nunc. Scelerisque pulvinar  e",
      },
    },
  },
  {
    id: "2",
    banner: {
      title: "hero.title-span2",
      img: "/images/banner2.jpg",
      descr:
        "hero.paragr2",
    },
    works: {
      title: "How It Works",
      card1: {
        svg: "/images/vector.png",
        title: "Fill Form",
        descr:
          "Lorem ipsum dolor sit amet consectetur. Sit nulla lectus quis rhoncus scelerisque venenatis luctus nunc. Sc",
      },
      card2: {
        svg: "/images/vector2.png",
        title: "Administration",
        descr:
          "Lorem ipsum dolor sit amet consectetur. Sit nulla lectus quis rhoncus scelerisque venenatis luctus nunc. Sc",
      },
      card3: {
        svg: "/images/vector3.png",
        title: "Keep In Touch",
        descr:
          "Lorem ipsum dolor sit amet consectetur. Sit nulla lectus quis rhoncus scelerisque venenatis luctus nunc. Sc",
      },
      card4: {
        svg: "/images/vector4.png",
        title: "Make A Deal",
        descr:
          "Lorem ipsum dolor sit amet consectetur. Sit nulla lectus quis rhoncus scelerisque venenatis luctus nunc. Sc",
      },
    },
    about: {
      title: "About Service",
      descr1:
        "Lorem ipsum dolor sit amet consectetur. Rhoncus hac dui phasellus dolor lectus aliquam diam. Curabitur elementum faucibus dui a et. Neque consectetur scelerisque condimentum posuere et magna nibh vitae nulla. Risus vitae sit luctus dictumst porta eu nulla non sollicitudin. Non malesuada elementum adipiscinndimentum ac e",
      descr2:
        "Lorem ipsum dolor sit amet consectetur. Rhoncus hac dui phasellus dolor lectus aliquam diam. Curabitur elementum faucibus dui a et. Neque consectetur scelerisque condimentum posuere et magna nibh vitae nulla. Risus vitae sit luctus dictumst porta eu nulla non sollicitudin. Non malesuada elementum adipiscinndimentum ac e",
    },
    services: {
      title: "Other Services",
      card1: {
        img: "/images/card.png",
        cardTitle: "Investment In Real State",
        descr:
          "Lorem ipsum dolor sit amet consectetur. Sit nulla lectus quis rhoncus scelerisque venenatis luctus nunc. Scelerisque pulvinar  e",
      },
      card2: {
        img: "/images/card.png",
        cardTitle: "Investment In Real State",
        descr:
          "Lorem ipsum dolor sit amet consectetur. Sit nulla lectus quis rhoncus scelerisque venenatis luctus nunc. Scelerisque pulvinar  e",
      },
      card3: {
        img: "/images/card.png",
        cardTitle: "Investment In Real State",
        descr:
          "Lorem ipsum dolor sit amet consectetur. Sit nulla lectus quis rhoncus scelerisque venenatis luctus nunc. Scelerisque pulvinar  e",
      },
    },
  },
  {
    id: "3",
    banner: {
      title: "hero.title-span3",
      img: "/images/banner3.jpg",
      descr:
        "hero.paragr3",
    },
    works: {
      title: "How It Works",
      card1: {
        svg: "/images/vector.png",
        title: "Fill Form",
        descr:
          "Lorem ipsum dolor sit amet consectetur. Sit nulla lectus quis rhoncus scelerisque venenatis luctus nunc. Sc",
      },
      card2: {
        svg: "/images/vector2.png",
        title: "Administration",
        descr:
          "Lorem ipsum dolor sit amet consectetur. Sit nulla lectus quis rhoncus scelerisque venenatis luctus nunc. Sc",
      },
      card3: {
        svg: "/images/vector3.png",
        title: "Keep In Touch",
        descr:
          "Lorem ipsum dolor sit amet consectetur. Sit nulla lectus quis rhoncus scelerisque venenatis luctus nunc. Sc",
      },
      card4: {
        svg: "/images/vector4.png",
        title: "Make A Deal",
        descr:
          "Lorem ipsum dolor sit amet consectetur. Sit nulla lectus quis rhoncus scelerisque venenatis luctus nunc. Sc",
      },
    },
    about: {
      title: "About Service",
      descr1:
        "Lorem ipsum dolor sit amet consectetur. Rhoncus hac dui phasellus dolor lectus aliquam diam. Curabitur elementum faucibus dui a et. Neque consectetur scelerisque condimentum posuere et magna nibh vitae nulla. Risus vitae sit luctus dictumst porta eu nulla non sollicitudin. Non malesuada elementum adipiscinndimentum ac e",
      descr2:
        "Lorem ipsum dolor sit amet consectetur. Rhoncus hac dui phasellus dolor lectus aliquam diam. Curabitur elementum faucibus dui a et. Neque consectetur scelerisque condimentum posuere et magna nibh vitae nulla. Risus vitae sit luctus dictumst porta eu nulla non sollicitudin. Non malesuada elementum adipiscinndimentum ac e",
    },
    services: {
      title: "Other Services",
      card1: {
        img: "/images/card.png",
        cardTitle: "Investment In Real State",
        descr:
          "Lorem ipsum dolor sit amet consectetur. Sit nulla lectus quis rhoncus scelerisque venenatis luctus nunc. Scelerisque pulvinar  e",
      },
      card2: {
        img: "/images/card.png",
        cardTitle: "Investment In Real State",
        descr:
          "Lorem ipsum dolor sit amet consectetur. Sit nulla lectus quis rhoncus scelerisque venenatis luctus nunc. Scelerisque pulvinar  e",
      },
      card3: {
        img: "/images/card.png",
        cardTitle: "Investment In Real State",
        descr:
          "Lorem ipsum dolor sit amet consectetur. Sit nulla lectus quis rhoncus scelerisque venenatis luctus nunc. Scelerisque pulvinar  e",
      },
    },
  },
  {
    id: "4",
    banner: {
      title: "hero.title-span4",
      img: "/images/banner4.jpg",
      descr:
        "hero.paragr4",
    },
    works: {
      title: "How It Works",
      card1: {
        svg: "/images/vector.png",
        title: "Fill Form",
        descr:
          "Lorem ipsum dolor sit amet consectetur. Sit nulla lectus quis rhoncus scelerisque venenatis luctus nunc. Sc",
      },
      card2: {
        svg: "/images/vector2.png",
        title: "Administration",
        descr:
          "Lorem ipsum dolor sit amet consectetur. Sit nulla lectus quis rhoncus scelerisque venenatis luctus nunc. Sc",
      },
      card3: {
        svg: "/images/vector3.png",
        title: "Keep In Touch",
        descr:
          "Lorem ipsum dolor sit amet consectetur. Sit nulla lectus quis rhoncus scelerisque venenatis luctus nunc. Sc",
      },
      card4: {
        svg: "/images/vector4.png",
        title: "Make A Deal",
        descr:
          "Lorem ipsum dolor sit amet consectetur. Sit nulla lectus quis rhoncus scelerisque venenatis luctus nunc. Sc",
      },
    },
    about: {
      title: "About Service",
      descr1:
        "Lorem ipsum dolor sit amet consectetur. Rhoncus hac dui phasellus dolor lectus aliquam diam. Curabitur elementum faucibus dui a et. Neque consectetur scelerisque condimentum posuere et magna nibh vitae nulla. Risus vitae sit luctus dictumst porta eu nulla non sollicitudin. Non malesuada elementum adipiscinndimentum ac e",
      descr2:
        "Lorem ipsum dolor sit amet consectetur. Rhoncus hac dui phasellus dolor lectus aliquam diam. Curabitur elementum faucibus dui a et. Neque consectetur scelerisque condimentum posuere et magna nibh vitae nulla. Risus vitae sit luctus dictumst porta eu nulla non sollicitudin. Non malesuada elementum adipiscinndimentum ac e",
    },
    services: {
      title: "Other Services",
      card1: {
        img: "/images/card.png",
        cardTitle: "Investment In Real State",
        descr:
          "Lorem ipsum dolor sit amet consectetur. Sit nulla lectus quis rhoncus scelerisque venenatis luctus nunc. Scelerisque pulvinar  e",
      },
      card2: {
        img: "/images/card.png",
        cardTitle: "Investment In Real State",
        descr:
          "Lorem ipsum dolor sit amet consectetur. Sit nulla lectus quis rhoncus scelerisque venenatis luctus nunc. Scelerisque pulvinar  e",
      },
      card3: {
        img: "/images/card.png",
        cardTitle: "Investment In Real State",
        descr:
          "Lorem ipsum dolor sit amet consectetur. Sit nulla lectus quis rhoncus scelerisque venenatis luctus nunc. Scelerisque pulvinar  e",
      },
    },
  },
  {
    id: "5",
    banner: {
      title: "hero.title-span5",
      img: "/images/banner5.jpg",
      descr:
        "hero.paragr5",
    },
    works: {
      title: "How It Works",
      card1: {
        svg: "/images/vector.png",
        title: "Fill Form",
        descr:
          "Lorem ipsum dolor sit amet consectetur. Sit nulla lectus quis rhoncus scelerisque venenatis luctus nunc. Sc",
      },
      card2: {
        svg: "/images/vector2.png",
        title: "Administration",
        descr:
          "Lorem ipsum dolor sit amet consectetur. Sit nulla lectus quis rhoncus scelerisque venenatis luctus nunc. Sc",
      },
      card3: {
        svg: "/images/vector3.png",
        title: "Keep In Touch",
        descr:
          "Lorem ipsum dolor sit amet consectetur. Sit nulla lectus quis rhoncus scelerisque venenatis luctus nunc. Sc",
      },
      card4: {
        svg: "/images/vector4.png",
        title: "Make A Deal",
        descr:
          "Lorem ipsum dolor sit amet consectetur. Sit nulla lectus quis rhoncus scelerisque venenatis luctus nunc. Sc",
      },
    },
    about: {
      title: "About Service",
      descr1:
        "Lorem ipsum dolor sit amet consectetur. Rhoncus hac dui phasellus dolor lectus aliquam diam. Curabitur elementum faucibus dui a et. Neque consectetur scelerisque condimentum posuere et magna nibh vitae nulla. Risus vitae sit luctus dictumst porta eu nulla non sollicitudin. Non malesuada elementum adipiscinndimentum ac e",
      descr2:
        "Lorem ipsum dolor sit amet consectetur. Rhoncus hac dui phasellus dolor lectus aliquam diam. Curabitur elementum faucibus dui a et. Neque consectetur scelerisque condimentum posuere et magna nibh vitae nulla. Risus vitae sit luctus dictumst porta eu nulla non sollicitudin. Non malesuada elementum adipiscinndimentum ac e",
    },
    services: {
      title: "Other Services",
      card1: {
        img: "/images/card.png",
        cardTitle: "Investment In Real State",
        descr:
          "Lorem ipsum dolor sit amet consectetur. Sit nulla lectus quis rhoncus scelerisque venenatis luctus nunc. Scelerisque pulvinar  e",
      },
      card2: {
        img: "/images/card.png",
        cardTitle: "Investment In Real State",
        descr:
          "Lorem ipsum dolor sit amet consectetur. Sit nulla lectus quis rhoncus scelerisque venenatis luctus nunc. Scelerisque pulvinar  e",
      },
      card3: {
        img: "/images/card.png",
        cardTitle: "Investment In Real State",
        descr:
          "Lorem ipsum dolor sit amet consectetur. Sit nulla lectus quis rhoncus scelerisque venenatis luctus nunc. Scelerisque pulvinar  e",
      },
    },
  },
];

const ServiceDetail = ({ id }) => {
  console.log(id);
  let Component = null;
  

  switch (id) {
    case "1": {
      Component = <ServiceFirst id={id} />;
      break;
    }
    case "2": {
      Component = <ServiceSecond id={id} />;
      break;
    }
    case "3": {
      Component = <ServiceThird id={id} />;
      break;
    }
    case "4": {
      Component = <ServiceFourth id={id} />;
      break;
    }
    case "5": {
      Component = <ServiceFifth id={id} />;
      break;
    }
  }

  return <div>{Component}</div>;
};

const Template = ({ id }) => {
  const object = data.filter((obj) => {
    return obj.id == id;
  });

  const {t} = useTranslation();

  return (
    <TemplateWrapper>
      <Container>
        <div className="banner">
          <div className="left">
            <h3 className="title">{t(object[0].banner.title)}</h3>
          </div>
          <div className="right">
            <img src={object[0].banner.img} alt="" />
            <p className="descr">{t(object[0].banner.descr)}</p>
          </div>
        </div>
      </Container>
      <div className="how-it-work">
        <div className="title">
          <Container>
            <h3>How It Works</h3>
          </Container>
        </div>
        <div className="wrap">
          <Container>
            <div className="cards">
              <div className="card">
                <img src={object[0].works.card1.svg} alt="" />
                <h5 className="title">{object[0].works.card1.title}</h5>
                <p className="descr">{object[0].works.card1.descr}</p>
              </div>
              <div className="card">
                <img src={object[0].works.card2.svg} alt="" />
                <h5 className="title">{object[0].works.card2.title}</h5>
                <p className="descr">{object[0].works.card2.descr}</p>
              </div>
              <div className="card">
                <img src={object[0].works.card3.svg} alt="" />
                <h5 className="title">{object[0].works.card3.title}</h5>
                <p className="descr">{object[0].works.card3.descr}</p>
              </div>
              <div className="card">
                <img src={object[0].works.card4.svg} alt="" />
                <h5 className="title">{object[0].works.card4.title}</h5>
                <p className="descr">{object[0].works.card4.descr}</p>
              </div>
            </div>
          </Container>
        </div>
      </div>
      <div className="about">
        <div className="title">
          <Container>
            <h3>About Service</h3>
          </Container>
        </div>
        <Container>
          <p className="descr" style={{ marginTop: 40 }}>
            {object[0].about.descr1}
          </p>
          <br />
          <p className="descr">{object[0].about.descr2}</p>
        </Container>
      </div>
      <ThirdSection />
      <div className="services">
        <div className="title">
          <Container>
            <h3>Other Services</h3>
          </Container>
        </div>
        <div className="wrap">
          <Container>
            <div className="cards">
              <div className="card">
                <div className="cardImg">
                  <img src={object[0].services.card1.img} alt="" />
                </div>
                <h5 className="titles">{object[0].services.card1.cardTitle}</h5>
                <p className="descr">{object[0].services.card1.descr}</p>
                <section class="buttons">
                  <button className="btn btn-4">
                    <span>Learn More</span>
                  </button>
                </section>
              </div>
              <div className="card">
                <div className="cardImg">
                  <img src={object[0].services.card2.img} alt="" />
                </div>
                <h5 className="titles">{object[0].services.card2.cardTitle}</h5>
                <p className="descr">{object[0].services.card2.descr}</p>
                <section class="buttons">
                  <button className="btn btn-4">
                    <span>Learn More</span>
                  </button>
                </section>
              </div>
              <div className="card">
                <div className="cardImg">
                  <img src={object[0].services.card3.img} alt="" />
                </div>
                <h5 className="titles">{object[0].services.card3.cardTitle}</h5>
                <p className="descr">{object[0].services.card3.descr}</p>
                <section class="buttons">
                  <button className="btn btn-4">
                    <span>Learn More</span>
                  </button>
                </section>
              </div>
              
             
            </div>
          </Container>
        </div>
      </div>
    </TemplateWrapper>
  );
};

const ServiceFirst = ({ id }) => {
  return (
    <>
      <Header />
      <Template id={id} />
      <Contact />
      <Footer />
    </>
  );
};
const ServiceSecond = ({ id }) => {
  return (
    <>
      <Header />
      <Template id={id} />
      <Contact />
      <Footer />
    </>
  );
};
const ServiceThird = ({ id }) => {
  return (
    <>
      <Header />
      <Template id={id} />
      <Contact />
      <Footer />
    </>
  );
};
const ServiceFourth = ({ id }) => {
  return (
    <>
      <Header />
      <Template id={id} />
      <Contact />
      <Footer />
    </>
  );
};
const ServiceFifth = ({ id }) => {
  return (
    <>
      <Header />
      <Template id={id} />
      <Contact />
      <Footer />
    </>
  );
};

export default ServiceDetail;

import React, { useState } from "react";
import Header from "../../Header";
import Footer from "../../Footer/footer";
import ThirdSection from "../../HomePage/ThirdSection";
import Contact from "../../HomePage/Contact/contact";
import { TemplateWrapper } from "./ServiceDetail.style";
import Container from "../../../Common/Container";
import { useTranslation } from "react-i18next";
import MyLink from "../../../Common/MyLink";

const data = [
  {
    id: "1",
    title: "hero.title",
    banner: {
      title: "hero.title",
      title2: "hero.title-span",
      img: "/images/banner.jpg",
      descr: "hero.paragr",
    },
    works: {
      title: "How It Works",
      card1: {
        svg: "/images/vector.png",
        title: "services.work-title1",
        descr: "services.work-p1",
      },
      card2: {
        svg: "/images/vector2.png",
        title: "services.work-title2",
        descr: "services.work-p1",
      },
      card3: {
        svg: "/images/vector3.png",
        title: "services.work-title3",
        descr: "services.work-p1",
      },
      card4: {
        svg: "/images/vector4.png",
        title: "services.work-title4",
        descr: "services.work-p1",
      },
    },
    about: {
      title: "About Service",
      descr1:"services.aboutP1",
      descr2:"",
    },
  },
  {
    id: "2",
    banner: {
      title: "hero.title2",
      title2: "hero.title-span2",
      img: "/images/banner2.jpg",
      descr: "hero.paragr2",
    },
    works: {
      title: "How It Works",
      card1: {
        svg: "/images/vector.png",
        title: "services.work-title1",
        descr: "services.work-p1",
      },
      card2: {
        svg: "/images/vector2.png",
        title: "services.work-title2",
        descr: "services.work-p1",
      },
      card3: {
        svg: "/images/vector3.png",
        title: "services.work-title3",
        descr: "services.work-p1",
      },
      card4: {
        svg: "/images/vector4.png",
        title: "services.work-title4",
        descr: "services.work-p1",
      },
    },
    about: {
      title: "About Service",
      descr1:"services.aboutP2",
      descr2:"",
    },
  },
  {
    id: "3",
    banner: {
      title: "hero.title3",
      title2: "hero.title-span3",
      img: "/images/banner3.jpg",
      descr: "hero.paragr3",
    },
    works: {
      title: "How It Works",
      card1: {
        svg: "/images/vector.png",
        title: "services.work-title1",
        descr: "services.work-p1",
      },
      card2: {
        svg: "/images/vector2.png",
        title: "services.work-title2",
        descr: "services.work-p1",
      },
      card3: {
        svg: "/images/vector3.png",
        title: "services.work-title3",
        descr: "services.work-p1",
      },
      card4: {
        svg: "/images/vector4.png",
        title: "services.work-title4",
        descr: "services.work-p1",
      },
    },
    about: {
      title: "About Service",
      descr1:"services.aboutP3",
      descr2:"",
    },
    
  },
  {
    id: "4",
    banner: {
      title: "hero.title4",
      title2: "hero.title-span4",
      img: "/images/banner4.jpg",
      descr: "hero.paragr4",
    },
    works: {
      title: "How It Works",
      card1: {
        svg: "/images/vector.png",
        title: "services.work-title1",
        descr: "services.work-p1",
      },
      card2: {
        svg: "/images/vector2.png",
        title: "services.work-title2",
        descr: "services.work-p1",
      },
      card3: {
        svg: "/images/vector3.png",
        title: "services.work-title3",
        descr: "services.work-p1",
      },
      card4: {
        svg: "/images/vector4.png",
        title: "services.work-title4",
        descr: "services.work-p1",
      },
    },
    about: {
      title: "About Service",
      descr1:"services.aboutP4",
      descr2:"",
    },
    
  },
  {
    id: "5",
    banner: {
      title: "hero.title5",
      title2: "hero.title-span5",
      img: "/images/banner5.jpg",
      descr: "hero.paragr5",
    },
    works: {
      title: "How It Works",
      card1: {
        svg: "/images/vector.png",
        title: "services.work-title1",
        descr: "services.work-p1",
      },
      card2: {
        svg: "/images/vector2.png",
        title: "services.work-title2",
        descr: "services.work-p1",
      },
      card3: {
        svg: "/images/vector3.png",
        title: "services.work-title3",
        descr: "services.work-p1",
      },
      card4: {
        svg: "/images/vector4.png",
        title: "services.work-title4",
        descr: "services.work-p1",
      },
    },
    about: {
      title: "About Service",
      descr1:"services.aboutP5",
      descr2:"",
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
 
 
  const { t } = useTranslation();

  const otherData = [
    {
      id: "1",
      span: "1",
      p1: t("hero.title-top"),
      img: "/images/services/service1.jpg",
      p2: t("hero.paragr"),
    },
    {
      id: "2",
      span: "2",
      p1: t("hero.title-top2"),
      img: "/images/services/service2.jpg",
      p2: t("hero.paragr2"),
    },
    {
      id: "3",
      span: "3",
      p1: t("hero.title-top3"),
      img: "/images/services/service3.jpg",
      p2: t("hero.paragr3"),
    },
    {
      id: "4",
      span: "4",
      p1: t("hero.title-top4"),
      img: "/images/services/service4.jpg",
      p2: t("hero.paragr4"),
    },
    {
      id: "5",
      span: "5",
      p1: t("hero.title-top5"),
      img: "/images/services/service5.jpg",
      p2: t("hero.paragr5"),
    },
  ];

  const objOtherData=otherData.filter((obj)=>{
    return obj.id !==id
  })

  return (
    <TemplateWrapper>
      <Container>
        <div className="banner">
          <div className="left">
            <h3 className="title">{t(object[0].banner.title)}{t(object[0].banner.title2)}</h3>
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
            <h3>{t("services.how-work")}</h3>
          </Container>
        </div>
        <div className="wrap">
          <Container>
            <div className="cards">
              <div className="card">
                <img src={object[0].works.card1.svg} alt="" />
                <h5 className="title">{t(object[0].works.card1.title)}</h5>
                <p className="descr">{t(object[0].works.card1.descr)}</p>
              </div>
              <div className="card">
                <img src={object[0].works.card2.svg} alt="" />
                <h5 className="title">{t(object[0].works.card2.title)}</h5>
                <p className="descr">{t(object[0].works.card2.descr)}</p>
              </div>
              <div className="card">
                <img src={object[0].works.card3.svg} alt="" />
                <h5 className="title">{t(object[0].works.card3.title)}</h5>
                <p className="descr">{t(object[0].works.card3.descr)}</p>
              </div>
              <div className="card">
                <img src={object[0].works.card4.svg} alt="" />
                <h5 className="title">{t(object[0].works.card4.title)}</h5>
                <p className="descr">{t(object[0].works.card4.descr)}</p>
              </div>
            </div>
          </Container>
        </div>
      </div>
      <div className="about">
        <div className="title">
          <Container>
            <h3>{t("services.ab-ser")}</h3>
          </Container>
        </div>
        <Container>
          <p className="descr" style={{ marginTop: 40 }}>
            {t(object[0].about.descr1)}
          </p>
          <br />
          <p className="descr">{object[0].about.descr2}</p>
        </Container>
      </div>
      <ThirdSection />
      <div className="services">
        <div className="title">
          <Container>
            <h3>{t("services.other-ser")}</h3>
          </Container>
        </div>
        <div className="wrap">
          <Container>
            <div className="cards">
                <div className="card">
                  <div className="cardImg">
                    <img src={objOtherData[0].img} alt="" />
                  </div>
                  <h5 className="titles">
                    {objOtherData[0].p1}
                  </h5>
                  <p className="descr">{objOtherData[0].p2}</p>
                  <section class="buttons">
                    <MyLink to={`/service_details?id=${objOtherData[0].id}`} className="btn btn-4">
                      <span>{t("button.btn")}</span>
                    </MyLink>
                  </section>
                </div>
                <div className="card">
                  <div className="cardImg">
                    <img src={objOtherData[1].img} alt="" />
                  </div>
                  <h5 className="titles">
                    {objOtherData[1].p1}
                  </h5>
                  <p className="descr">{objOtherData[1].p2}</p>
                  <section class="buttons">
                  <MyLink to={`/service_details?id=${objOtherData[1].id}`} className="btn btn-4">
                      <span>{t("button.btn")}</span>
                    </MyLink>
                  </section>
                </div>
                <div className="card">
                  <div className="cardImg">
                    <img src={objOtherData[2].img} alt="" />
                  </div>
                  <h5 className="titles">
                    {objOtherData[2].p1}
                  </h5>
                  <p className="descr">{objOtherData[2].p2}</p>
                  <section class="buttons">
                  <MyLink to={`/service_details?id=${objOtherData[2].id}`} className="btn btn-4">
                      <span>{t("button.btn")}</span>
                    </MyLink>
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

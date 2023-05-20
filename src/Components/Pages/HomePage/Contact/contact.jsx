import React, { useEffect } from "react"; 
import { useTranslation } from "react-i18next";
import Container from "../../../Common/Container";
import UserNumSvg from "../../../Common/Svgs/UserNumSvg";
import BuildingSvg from "../../../Common/Svgs/BuildingSvg";
import EmailSvg from "../../../Common/Svgs/EmailSvg";
import { ContactWrappper } from "./contact.style";
import MyLink from "../../../Common/MyLink";
import { Map, Placemark, YMaps } from "@pbe/react-yandex-maps";
import InstagramSvg from "../../../Common/Svgs/InstagramSvg";
import TelegramSvg from "../../../Common/Svgs/TelegramSvg";
import FacebookSvg from "../../../Common/Svgs/FacebookSvg";
import FooterLogoSvg from "../../../Common/Svgs/FooterLogoSvg";
import SocialSvg from "../../../Common/Svgs/SocialSvg";

const Contact = () => {
  const { t } = useTranslation(); 

  const defaultState = {
    center: [41.324987, 69.320206],
    zoom: 17,
  };
  return (
    <ContactWrappper id="contact">
      <div data-aos={"fade-in"} className="title">
        <Container>
          <h3>{t("contact.title")}</h3>
        </Container>
      </div>

      <Container>
        <div className="contact" data-aos={"fade-up"}>
          <div className="contact__info">
            <div className="contact__box">
              <span className="contact__icon ">
                <UserNumSvg />
              </span>
              <h4>{t("contact.phone")}</h4>
              <p>+998 33 150 75 75</p>
              <p>+998 78 150 75 75</p>
            </div>
            <div className="contact__box">
              <span className="contact__icon ">
                <BuildingSvg />
              </span>
              <h4>{t("contact.working")}</h4>
              <p>
                 <span>10:00 – 19:00</span>
              </p>
              <p>{t("contact.week")}</p>
            </div>
            <div className="contact__box">
              <span className="contact__icon emailSvg">
                <EmailSvg />
              </span>

              <h4>{t("contact.email")}</h4>
              <MyLink to={"mailto: info@anorhome.com"} className="emailLink">
                info@anorhome.com
              </MyLink>
            </div>
            <div className="contact__box">
              <span className="contact__icon socialSvg">
                <SocialSvg />
              </span>
              <h4>{t("footer.social")}</h4>
              <div className="socials">
                <MyLink to="https://www.instagram.com/anorhome/">
                  <InstagramSvg />
                </MyLink>
                <MyLink to="https://t.me/anorhome">
                  <TelegramSvg />
                </MyLink>
                <MyLink to="https://www.facebook.com/anorhome">
                  <FacebookSvg />
                </MyLink>
              </div>
            </div>
          </div>
          <div className="contact__map">
            {/* <iframe
              src="https://yandex.uz/maps/-/CCUWnHggPA"
              
              width="100%"
              height="500px"
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe> */}
            <YMaps>
              <Map width="100%" height="100%" defaultState={defaultState}>
                <Placemark
                  geometry={[41.325177, 69.320278]}
                  options={{
                    iconLayout: "default#image",
                    iconImageSize: [50, 50],
                    iconImageHref: "/images/map.svg",
                    iconColor: "red",
                  }}
                />
              </Map>
            </YMaps>
          </div>
        </div>
      </Container>
      <div className="footer">
        <Container>
          <div className="footer__wrapper">
            <div className="footer__info">
              {/* <img src="/images/footer-logo.png" alt="Footer Logo" /> */}
              <FooterLogoSvg />
            </div>
            <div className="footer__items">
              <MyLink to={"/services"} className="links">
                {t("footer.link1")}
              </MyLink>
              <MyLink to={"/about"} className="links">
                {t("footer.link2")}
              </MyLink>
              <MyLink to={"/projects"} className="links">
                {t("footer.link3")}
              </MyLink>
              {/* <MyLink to={"/#contact"} className="links">{t('footer.link4')}</MyLink> */}
            </div>
          </div>
        </Container>
        <hr />
        <Container>
          <div className="everbest">
            <p className="anorhome">
              © Anorhome, 2023. {t("footer.copywrite")}
            </p>
            <MyLink to={"/"} className="link">
              {t("footer.everbest")} EverbestLab
            </MyLink>
          </div>
        </Container>
      </div>
    </ContactWrappper>
  );
};

export default Contact;

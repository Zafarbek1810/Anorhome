import React, { useEffect } from "react";
import AOS from "aos";
import { useTranslation } from "react-i18next";
import Container from "../../../Common/Container";
import UserNumSvg from "../../../Common/Svgs/UserNumSvg";
import BuildingSvg from "../../../Common/Svgs/BuildingSvg";
import EmailSvg from "../../../Common/Svgs/EmailSvg";
import { ContactWrappper } from "./contact.style";
import MyLink from "../../../Common/MyLink";
import { Map, Placemark, YMaps } from "@pbe/react-yandex-maps";

const Contact = () => {

  const { t } = useTranslation();

  useEffect(() => {
    AOS.init({ duration: 1500, once: true });
    AOS.refresh();
  }, []);
  const defaultState = {
    center: [41.324987, 69.320206],
    zoom: 17,
  };
  return (
    <ContactWrappper>
      <div data-aos={"fade-in"} className="title">
        <Container>
          <h3>{t("contact.title")}</h3>
        </Container>
      </div>

      <Container>
        <div className="contact" data-aos={"fade-up"}>
          <div className="contact__info">
            <div className="contact__box">
              <span className="contact__icon">
                <UserNumSvg />
              </span>
              <h4>{t("contact.phone")}</h4>
              <p>+998 99 861 75 00</p>
              <p>+998 33 150 75 75</p>
            </div>
            <div className="contact__box">
              <span className="contact__icon">
                <BuildingSvg />
              </span>
              <h4>{t("contact.working")}</h4>
              <p>
              {t("contact.from")} <span>10:00 – 19:00</span>
              </p>
              <p>{t("contact.week")}</p>
            </div>
            <div className="contact__box">
              <span className="contact__icon">
                <EmailSvg />
              </span>

              <h4>{t("contact.email")}</h4>
              <MyLink to={"mailto: info@anorhome.com"} className="emailLink">
              info@anorhome.com
              </MyLink>
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
                    iconColor:"red"
                  }}
                />
              </Map>
            </YMaps>
          </div>
        </div>
      </Container>
    </ContactWrappper>
  );
};

export default Contact;

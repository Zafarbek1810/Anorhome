import React, { useEffect } from "react";
import AOS from "aos";
import Container from "../../../Common/Container";
import UserNumSvg from "../../../Common/Svgs/UserNumSvg";
import BuildingSvg from "../../../Common/Svgs/BuildingSvg";
import EmailSvg from "../../../Common/Svgs/EmailSvg";
import { ContactWrappper } from "./contact.style";
import MyLink from "../../../Common/MyLink";
import { Map, Placemark, YMaps } from "@pbe/react-yandex-maps";

const Contact = () => {
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
          <h3>Contact Us</h3>
        </Container>
      </div>

      <Container>
        <div className="contact" data-aos={"fade-up"}>
          <div className="contact__info">
            <div className="contact__box">
              <span className="contact__icon">
                <UserNumSvg />
              </span>
              <h4>Phone Number</h4>
              <p>+094 9123124 214124</p>
              <p>+094 9123124 214124</p>
            </div>
            <div className="contact__box">
              <span className="contact__icon">
                <BuildingSvg />
              </span>
              <h4>Working Hours</h4>
              <p>
                From: <span>9:00 - 19:00</span>
              </p>
              <p>Saturday and Sunday are closed</p>
            </div>
            <div className="contact__box">
              <span className="contact__icon">
                <EmailSvg />
              </span>

              <h4>Email</h4>
              <MyLink to={"mailto: anorhome@gmail.com"} className="emailLink">
                anorhome@gmail.com
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
                    iconImageHref: "/images/map3.png",
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

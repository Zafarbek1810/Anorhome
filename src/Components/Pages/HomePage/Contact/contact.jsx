import React from "react";
import Container from "../../../Common/Container";
import UserNumSvg from "../../../Common/Svgs/UserNumSvg";
import BuildingSvg from "../../../Common/Svgs/BuildingSvg";
import EmailSvg from "../../../Common/Svgs/EmailSvg";
import { ContactWrappper } from "./contact.style";
import MyLink from "../../../Common/MyLink";

const Contact = () => {
  return (
    <ContactWrappper>
      <div className="title">
        <Container>
          <h3>Contact Us</h3>
        </Container>
      </div>

      <Container>
        <div className="contact">
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
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1498.1239378953987!2d69.320297!3d41.325223!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38aef4ef744f17c9%3A0x2985e04e95ecf63!2s67%20Mustaqillik%20Ave%2C%20Tashkent%2C%20Uzbekistan!5e0!3m2!1sen!2sus!4v1679046025301!5m2!1sen!2sus"
              width="100%"
              height="100%"
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </Container>
    </ContactWrappper>
  );
};

export default Contact;

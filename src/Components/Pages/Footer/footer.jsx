import React from "react";
import Container from "../../Common/Container/index";
import MyLink from "../../Common/MyLink/index";
import FacebookSvg from "../../Common/Svgs/FacebookSvg";
import InstagramSvg from "../../Common/Svgs/InstagramSvg";
import TelegramSvg from "../../Common/Svgs/TelegramSvg";
import { FooterWrapper } from "./footer.style";
import FooterLogoSvg from "../../Common/Svgs/FooterLogoSvg"

const Footer = () => {
  return (
    <FooterWrapper>
      <Container>
        <div className="footer__wrapper">
          <div className="footer__info">
            {/* <img src="/images/footer-logo.png" alt="Footer Logo" /> */}
            <FooterLogoSvg/>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Laudantium
            </p>
          </div>
          <div className="footer__items">
            <MyLink to={"/"} className="links">Services</MyLink>
            <MyLink to={"/"} className="links">About Us</MyLink>
            <MyLink to={"/"} className="links">Portfolio</MyLink>
            <MyLink to={"/"} className="links">Contact Us</MyLink>
          </div>
          <div className="footer__socials">
            <p>Our Social Media</p>
            <div>
              <InstagramSvg />
              <TelegramSvg />
              <FacebookSvg />
            </div>
          </div>
        </div>
      </Container>
      <hr />
      <Container>
        <div className="everbest">
          <MyLink to={"/"} className="link">Powered by EverbestLab</MyLink>
        </div>
      </Container>
    </FooterWrapper>
  );
};

export default Footer;

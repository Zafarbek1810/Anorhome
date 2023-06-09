import React from "react";
import Container from "../../Common/Container/index";
import MyLink from "../../Common/MyLink/index";
import FacebookSvg from "../../Common/Svgs/FacebookSvg";
import InstagramSvg from "../../Common/Svgs/InstagramSvg";
import TelegramSvg from "../../Common/Svgs/TelegramSvg";
import { FooterWrapper } from "./footer.style";
import FooterLogoSvg from "../../Common/Svgs/FooterLogoSvg"
import { useTranslation } from "react-i18next";

const Footer = () => {
  const {t} = useTranslation();
  return (
    <FooterWrapper>
      <Container>
        <div className="footer__wrapper">
          <div className="footer__info">
            {/* <img src="/images/footer-logo.png" alt="Footer Logo" /> */}
            <FooterLogoSvg/>
          </div>
          <div className="footer__items">
            <MyLink to={"/services"} className="links">{t('footer.link1')}</MyLink>
            <MyLink to={"/about"} className="links">{t('footer.link2')}</MyLink>
            <MyLink to={"/projects"} className="links">{t('footer.link3')}</MyLink>
            {/* <MyLink to={"/#contact"} className="links">{t('footer.link4')}</MyLink> */}
          </div>
          <div className="footer__socials">
            <p>{t('footer.social')}</p>
            <div>
              <MyLink to="https://www.instagram.com/anorhome/"><InstagramSvg /></MyLink>
              <MyLink to="https://t.me/anorhome"><TelegramSvg /></MyLink>
              <MyLink to="https://www.facebook.com/anorhome"><FacebookSvg /></MyLink>
              
            </div>
          </div>
        </div>
      </Container>
      <hr />
      <Container>
      <div>
          <p>(c) Anorhome, 2023.</p>
        </div>
        <div className="everbest">
          <MyLink to={"/"} className="link">{t('footer.everbest')} EverbestLab</MyLink>
        </div>
      </Container>
    </FooterWrapper>
  );
};

export default Footer;

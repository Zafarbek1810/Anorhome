import React, { useEffect } from "react";
import AOS from "aos";
import { useTranslation } from "react-i18next";
import Container from "../../../Common/Container"; 
import { ClientsWrapper } from "./client.style";

const Clients = () => {

  const { t } = useTranslation();

  useEffect(() => {
    AOS.init({ duration: 1500, once: true });
    AOS.refresh();
    
  }, []);

  return (
    <ClientsWrapper>
      <div data-aos={"fade-in"} className="title">
        <Container>
          <h3>{t("clients.title")}</h3>
        </Container>
      </div>

        <Container>
            <div data-aos={"fade-up"} className="clients__logo">
              <img src="/images/mashriq.svg" alt="Al Mashriq Logo" className="al-mashriq" />
              <img src="/images/Travel-logo.svg" alt="Travel Business center logo" className="travel" />
              <img src="/images/komolon.svg" alt="Komolon residence logo"  className="komolon" />
              <img src="/images/amt-svg.svg" alt="auto mall tiger logo" className="amt" />
              <img src="/images/sr-logo.svg" alt="sergeli residence" className="sr" />
            </div>
        </Container>
    </ClientsWrapper>
  );
};

export default Clients;

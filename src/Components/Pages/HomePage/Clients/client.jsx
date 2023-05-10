import React, { useEffect } from "react"; 
import { useTranslation } from "react-i18next";
import Container from "../../../Common/Container"; 
import { ClientsWrapper } from "./client.style";

const Clients = () => {

  const { t } = useTranslation(); 

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
              <img src="/images/Travel-logo.png" alt="Travel Business center logo" className="travel" />
              <img src="/images/komolon.svg" alt="Komolon residence logo"  className="komolon" />
              <img src="/images/amt-svg.svg" alt="auto mall tiger logo" className="amt" />
              <img src="/images/intermex.png" alt="Intermex logo" className="inter" />
              <img src="/images/sr-logo.png" alt="sergeli residence" className="sr" />
            </div>
        </Container>
    </ClientsWrapper>
  );
};

export default Clients;

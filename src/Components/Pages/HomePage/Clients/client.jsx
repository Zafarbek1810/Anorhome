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
              <img src="/images/al-mashriq-logo.png" alt="" className="al-mashriq" />
              <img src="/images/kamolon-logo.png" alt=""  className="komolon" />
              <img src="/images/Travel-logo.png" alt="" className="travel" />
            </div>
        </Container>
    </ClientsWrapper>
  );
};

export default Clients;

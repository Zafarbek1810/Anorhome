import React, { useEffect } from "react";
import AOS from "aos";
import Container from "../../../Common/Container";
import AtlassianSvg from "../../../Common/Svgs/AtlassianSvg";
import GithubSvg from "../../../Common/Svgs/GithubSvg";
import GitlabSvg from "../../../Common/Svgs/GitlabSvg";
import GoogleSvg from "../../../Common/Svgs/GoogleSvg";
import OracleSvg from "../../../Common/Svgs/OracleSvg";
import WindowsSvg from "../../../Common/Svgs/WindowsSvg";
import { ClientsWrapper } from "./client.style";

const Clients = () => {

  useEffect(() => {
    AOS.init({ duration: 1500, once: true });
    AOS.refresh();
    
  }, []);

  return (
    <ClientsWrapper>
      <div data-aos={"fade-in"} className="title">
        <Container>
          <h3>Clients</h3>
        </Container>
      </div>

        <Container>
            <div data-aos={"fade-up"} className="clients__logo">
              <GoogleSvg />
              <WindowsSvg />
              <OracleSvg />
              <AtlassianSvg />
              <GithubSvg />
              <GitlabSvg />
              <GoogleSvg />
            </div>
        </Container>
    </ClientsWrapper>
  );
};

export default Clients;

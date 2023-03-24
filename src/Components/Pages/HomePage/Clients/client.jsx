import React from "react";
import Container from "../../../Common/Container";
import AtlassianSvg from "../../../Common/Svgs/AtlassianSvg";
import GithubSvg from "../../../Common/Svgs/GithubSvg";
import GitlabSvg from "../../../Common/Svgs/GitlabSvg";
import GoogleSvg from "../../../Common/Svgs/GoogleSvg";
import OracleSvg from "../../../Common/Svgs/OracleSvg";
import WindowsSvg from "../../../Common/Svgs/WindowsSvg";
import { ClientsWrapper } from "./client.style";

const Clients = () => {
  return (
    <ClientsWrapper>
      <div className="title">
        <Container>
          <h3>Clients</h3>
        </Container>
      </div>

        <Container>
            <div className="clients__logo">
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
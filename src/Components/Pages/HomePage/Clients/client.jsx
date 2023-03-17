import React from "react";
import Container from "../../../Common/Container";
import GoogleSvg from "../../../Common/Svgs/GoogleSvg";
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
              <GoogleSvg />
              <GoogleSvg />
              <GoogleSvg />
              <GoogleSvg />
              <GoogleSvg />
              <GoogleSvg />
            </div>
        </Container>
    </ClientsWrapper>
  );
};

export default Clients;

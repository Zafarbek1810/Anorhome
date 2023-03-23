import styled from "styled-components";

const FooterWrapper = styled.div`
  margin-top: 40px;
  background-color: #161a1d;

  .footer__wrapper {
    padding: 50px 0;
    display: flex;
    align-items: start;
    flex-wrap: wrap;
    justify-content: space-between;
  }
  .footer__info {
    width: 30%;
    img {
      width: 80%;
    }
    p {
      font-family: "Montserrat";
      font-style: normal;
      font-weight: 400;
      font-size: 16px;
      color: #fff;
    }
  }
  .footer__items {
    width: 55%;
    padding-top: 30px;
    display: flex;

    .links {
      font-family: "Montserrat";
      font-style: normal;
      font-weight: 600;
      font-size: 18px;
      /* margin: 30px; */
      transition: 0.3s;
      color: #fff;
      width: 25%;
      &:hover {
        color: #fe152b;
      }
    }
  }
  .footer__socials {
    width: 15%;
    p {
      font-family: "Montserrat";
      font-style: normal;
      font-weight: 600;
      font-size: 16px;
      color: #fff;
    }
    div {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    svg {
      fill: #fff;
      transition: 300ms ease;
      &:hover {
        fill: #fe152b;
        cursor: pointer;
      }
    }
  }
  .everbest {
    padding: 10px 0;
    text-align: end;
    .link {
      font-family: "Montserrat";
      font-style: normal;
      font-weight: 500;
      font-size: 12px;
      color: #fff;
    }
  }

  @media (max-width: 700px) {
    .footer__wrapper {
      flex-direction: column;
    }
    .footer__info {
      width: 100%;
    }
    .footer__items {
      display: flex;
      flex-direction: column;
      margin-bottom: 30px;
      .links{
        font-size: 16px !important;
        margin: 10px;
      }
    }
    .footer__socials {
      width: 80%;
    }
  }
`;
export { FooterWrapper };

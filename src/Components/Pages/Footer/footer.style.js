import styled from "styled-components";

const FooterWrapper = styled.div`
  margin-top: 40px;
  background-color: #161a1d;

  .footer__wrapper {
    padding: 50px 0;
    display: flex;
    align-items: start;
    justify-content: space-between;
  }
  .footer__info {
    width: 318px;
    p {
      font-family: "Montserrat";
      font-style: normal;
      font-weight: 400;
      font-size: 16px;
    }
  }
  .footer__items {
    padding-top: 30px;
    

    .links {
      font-family: "Montserrat";
      font-style: normal;
      font-weight: 600;
      font-size: 22px;
      margin: 30px;
      transition: 0.3s;
      &:hover{
        color: #FE152B;
      }
    }
  }
  .footer__socials {
    p {
      font-family: "Montserrat";
      font-style: normal;
      font-weight: 600;
      font-size: 16px;
    }
    div {
      display: flex;
      align-items: center;
      justify-content: space-between;
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
    }
  }
`;
export { FooterWrapper };

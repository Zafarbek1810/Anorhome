import styled from "styled-components";

const ContactWrappper = styled.div`
  background: #161a1d;
  .socialSvg {
    svg {
      transform: translateY(3px) !important;
    }
  }
  .emailSvg {
    svg {
      transform: translateY(5px) !important;
    }
  }
  .pharmacies_placemarket {
    background: #baadf3;
    box-shadow: 0 12px 16px #1c009833;
    border: 2px solid #cec4fa;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #ffffff;
    border-radius: 5px;
    padding: 5px 10px;
    width: 40px;
  }
  .title {
    border-top: 1px solid #fff;
    border-bottom: 1px solid #fff;
    background: #161a1d;
    h3 {
      font-style: normal;
      font-weight: 600;
      font-size: 40px;
      line-height: 48px;
      color: #fff;
    }
  }
  .contact {
    width: 100%;
    height: 100%;
    margin-top: 50px;
    display: flex;
    align-items: center;
    justify-content: center;

    &__info {
      background: #161a1d;
      width: 50%;
      padding: 35px 40px;
      display: flex;
      flex-wrap: wrap;
    }
    .socials {
      display: flex;
      gap: 30px;
      svg {
        fill: #fff;
        transition: 300ms ease;
        &:hover {
          fill: #fe152b;
          cursor: pointer;
        }
      }
    }

    &__box {
      width: 50%;
      padding-bottom: 40px;
      :nth-child(4) {
        padding-bottom: 0;
      }
      h4 {
        font-family: "Mulish";
        font-style: normal;
        font-weight: 600;
        font-size: 20px;
        color: #ffffff;
      }
      p {
        font-family: "Mulish";
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        color: #ffffff;
        span {
          color: #fe152b;
        }
      }
      .emailLink {
        font-family: "Mulish";
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        color: #ffffff;
      }
    }
    &__icon {
      background-color: #fe152b;
      padding: 10px;
      border-radius: 50%;
    }
    &__map {
      background-color: #fff;
      width: 50%;
      height: 350px;
      iframe {
        height: 350px !important;
        border: none;
      }
    }
  }

  .footer {
    background-color: #161a1d;
    .footer__wrapper {
      padding: 75px 0 20px;
      display: flex;
      align-items: start;
      flex-wrap: wrap;
      justify-content: space-between;
    }
    .footer__info {
      width: 50%;
      svg {
        width: 50%;
        height: auto;
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
      width: 50%;
      padding-top: 15px;
      display: flex;

      .links {
        font-family: "Montserrat";
        font-style: normal;
        font-weight: 600;
        font-size: 16px;
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
      padding-top: 15px;
      p {
        font-family: "Montserrat";
        font-style: normal;
        font-weight: 600;
        font-size: 16px;
        margin: 0;
        margin-bottom: 35px;
        color: #fff;
      }
      div {
        display: flex;
        gap: 30px;
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
      margin-left: auto;
      width: 50%;
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 10px 0 20px;
      .link {
        font-family: "Montserrat";
        font-style: normal;
        font-weight: 500;
        font-size: 12px;
        color: #fff;
      }
      .anorhome {
        transform: translateX(-50%);
        font-family: "Montserrat";
        font-style: normal;
        font-weight: 500;
        font-size: 13px;
        color: #fff;
      }
    }
  }

  @media (max-width: 800px) {
    .footer {
      .footer__items {
      width: 50%;
      padding-top: 0px;
      gap: 14px;
      display: flex;
    }
      .everbest {
        width: 100%;
        .anorhome {
          transform: translateX(0%);
        }
      }
    }
    .contact {
      display: flex;
      flex-direction: column-reverse;
      &__info {
        width: 100%;
        padding: 40px 0;
      }
      &__map {
        width: 100%;
      }
    }
  }
  @media (max-width: 500px) {
    .contact {
      display: flex;
      flex-direction: column-reverse;
      &__box {
        width: 100%;
      }
    }
    .footer {
      .footer__wrapper {
        flex-direction: column;

        .footer__info {
          margin-bottom: 20px;
          width: 100%;
          svg {
            width: 80%;
            height: auto;
          }
        }
        .footer__items {
          width: 100%;
          justify-content: space-between;
        }
      }
      .everbest {
        width: 100%;
        .anorhome {
          transform: translateX(0%);
        }
      }
    }
  }
`;
export { ContactWrappper };

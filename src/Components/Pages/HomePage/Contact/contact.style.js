import styled from "styled-components";

const ContactWrappper = styled.div`
  background: #fff;
  .title {
    border-top: 1px solid #161a1d;
    border-bottom: 1px solid #161a1d;

    h3 {
      font-style: normal;
      font-weight: 700;
      font-size: 40px;
      line-height: 48px;
      color: #161a1d;
    }
  }
  .contact {
    width: 100%;
    height: 506px;
    margin-top: 100px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #161a1d;
    &__info {
      width: 30%;
    }
    &__box {
      padding-left: 58px;
      padding-bottom: 40px;
      :nth-child(3) {
        padding-bottom: 0;
      }
      h4 {
        font-family: "Figtree";
        font-style: normal;
        font-weight: 600;
        font-size: 20px;
        margin: 9px 0;
        padding-top: 10px;
      }
      p {
        font-family: "Figtree";
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        margin: 3px 0;
        span {
          color: #fe152b;
        }
      }
      .emailLink {
        font-family: "Figtree";
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
      }
    }
    &__icon {
      background-color: #fe152b;
      padding: 10px;
      border-radius: 50%;
    }
    &__map {
      width: 70%;
      height: 100%;
      iframe {
        border: none;
      }
    }
  }
`;
export { ContactWrappper };
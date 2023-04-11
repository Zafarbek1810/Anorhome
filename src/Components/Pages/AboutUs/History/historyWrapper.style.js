import styled from "styled-components";

const HistoryWrapper = styled.div`
  background-color: #161A1D;
  padding: 100px 0;
  section {
    padding-top: 100px;
  }
  .title {
    border-top: 1px solid #ffffff;
    border-bottom: 1px solid #ffffff;

    h3 {
      font-family: "Mulish";
      font-style: normal;
      font-weight: 700;
      font-size: 40px;
      line-height: 48px;
      color: #ffffff;
      letter-spacing: 0;
    }
  }
  img {
    max-width: 100%;
  }
  hr {
    margin: 45px 0;
  }

  .box__wrapper {
    .box__boxes {
      width: 100%;
      background-color: #fff;
      display: flex;
      align-items: start;
      justify-content: space-between;
      margin-bottom: 50px;
      padding: 40px 30px;
    }
    .box__left {
      width: 40%;
      display: flex;
      img {
        padding-right: 14px;
      }
      h2 {
        font-family: "Mulish";
        font-style: normal;
        font-weight: 900;
        font-size: 45px;
        margin: 0;
        color: #000000;
      }
    }
    .box__right {
      width: 60%;
      p {
        font-family: "Mulish";
        font-style: normal;
        font-weight: 400;
        font-size: 20px;
        line-height: 140%;
        margin: 0;
        color: #161a1d;
      }
    }
  }

  // TABLET
  @media (max-width: 991.98px) {
    .box__wrapper {
      .box__boxes {
        display: flex;
        align-items: start;
        justify-content: space-between;
        margin-bottom: 50px;
        padding: 30px 15px;
      }
      .box__left {
        width: 40%;
        display: flex;
        img {
          padding-right: 8px;
          width: 50px;
        }
        h2 {
          font-size: 32px;
          margin: 0;
          letter-spacing: 0.1px;
          color: #000000;
        }
      }
      .box__right {
        width: 60%;
        p {
          font-size: 18px;
          line-height: 120%;
        }
      }
    }
  }

  // MOBILE
  @media (max-width: 767.98px) {
    .box__wrapper {
      .box__boxes {
        display: flex;
        flex-direction: column;
        margin-bottom: 50px;
        padding: 25px 15px;
      }
      .box__left {
        width: 100%;
        display: flex;
        padding-bottom: 25px;
        img {
          padding-right: 8px;
          width: 45px;
        }
        h2 {
          font-size: 30px;
          margin: 0;
          letter-spacing: 0.1px; 
        }
      }
      .box__right {
        width: 100%;
        p {
          font-size: 16px;
          line-height: 120%;
        }
      }
    }
  }
`;
export { HistoryWrapper };

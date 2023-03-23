import styled from "styled-components";

const HistoryWrapper = styled.div`
  section {
  }
  .text__wrapper {
    padding: 100px 0;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .text__paragr {
    width: 30%;
    p {
      font-family: "Figtree";
      font-style: normal;
      font-weight: 700;
      font-size: 24px;
      line-height: 29px;
      letter-spacing: 0.1em;
      color: #ffffff;
    }
  }
  .text__title {
    width: 70%;
    text-align: end;
    h2 {
      font-family: "Figtree";
      font-style: normal;
      font-weight: 900;
      font-size: 53px;
      letter-spacing: 0.1em;
      color: #ffffff;
      margin: 0;
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
        font-family: "Figtree";
        font-style: normal;
        font-weight: 900;
        font-size: 45px; 
        margin: 0;
        letter-spacing: 0.1em; 
        color: #000000;
      }
    }
    .box__right {
      width: 60%;
      p {
        font-family: "Figtree";
        font-style: normal;
        font-weight: 400;
        font-size: 20px;
        line-height: 140%; 
        margin: 0; 
        color: #161a1d;
      }
    }
  }
`;
export { HistoryWrapper };

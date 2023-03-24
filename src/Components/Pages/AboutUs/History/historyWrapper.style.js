import styled from "styled-components";

const HistoryWrapper = styled.div`
  background-color: #000000;
  padding: 100px 0;
  section {
    padding-top: 100px;
  }
  .title {
    border-top: 1px solid #ffffff;
    border-bottom: 1px solid #ffffff;

    h3 {
      font-family: "Figtree";
      font-style: normal;
      font-weight: 700;
      font-size: 40px;
      line-height: 48px; 
      color: #ffffff;
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

import styled from "styled-components";

const ErrorPageWrapper = styled.div`
  background-color: #161a1d;
  .section1 {
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
  }

  .wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
  }
  .left {
    width: 50%;
    h2 {
      font-family: "Mulish";
      font-style: normal;
      font-weight: 700;
      font-size: 64px;
      line-height: 77px;
      margin-top: 0;
      color: #ffffff;
    }
    p {
      font-family: "Mulish";
      font-style: normal;
      font-weight: 400;
      font-size: 18px;
      line-height: 22px;
      color: #d9d9d9;
    }
  }
  .right {
    width: 50%;
    img {
      max-width: 100%;
    }
  }

  .buttonWr {
    display: flex;
    gap: 30px;
    padding-top: 50px;
  }

  .buttons {
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
  }
  .btn1 {
    font-family: "Mulish";
    font-weight: 500;
    font-size: 16px;
    color: #fff;
    cursor: pointer;
    max-width: 170px !important;
    padding: 14px 40px;
    position: relative;
    width: 100%;
    background: transparent;
    border: 1px solid #d9d9d9;
  }
  .btn1:hover {
    text-decoration: none;
  }

  .btn2 {
    font-family: "Mulish";
    font-weight: 500;
    font-size: 16px;
    color: #fff;
    cursor: pointer;
    max-width: 170px !important;
    padding: 15px 40px;
    position: relative;
    width: 100%;
    background: #fe152b;
  }
  .btn2:hover {
    text-decoration: none;
  }
  .btn-4 {
    /* border: 1px solid; */
    overflow: hidden;
    position: relative;
  }
  .btn-4 span {
    z-index: 20;
  }
  .btn-4:after {
    background: #fff;
    content: "";
    height: 155px;
    left: -75px;
    opacity: 0.2;
    position: absolute;
    top: -50px;
    transform: rotate(35deg);
    transition: all 550ms cubic-bezier(0.19, 1, 0.22, 1);
    width: 50px;
    z-index: 10;
  }

  .btn-4:hover:after {
    left: 120%;
    transition: all 550ms cubic-bezier(0.19, 1, 0.22, 1);
  }

  // TABLET
  @media (max-width: 991.98px) {
    .section1 {
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: auto;
    padding-top: 123px;
  }
    .left {
      width: 50%;
      h2 {
        font-size: 50px;
        line-height: 66px;
      }
      p {
        font-size: 16px;
      }
    }
    .right {
      width: 50%;
      img {
        max-width: 100%;
      }
    }
    .btn1 {
      max-width: 160px !important;
      padding: 13px 30px;
    }

    .btn2 {
      max-width: 160px !important;
      padding: 13px 30px;
    }
  }

  // MOBILE
  @media (max-width: 767.98px) {
    .section1 {
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: auto;
    padding-top: 123px;
  }
    .wrapper {
      display: flex;
      flex-direction: column;
      width: 100%;
    }
    .left {
      width: 100%;
      h2 {
        font-size: 37px;
        line-height: 46px;
      }
      p {
        font-size: 16px;
      }
    }
    .right {
      width: 100%;
      img {
        max-width: 100%;
      }
    }

    .buttonWr{
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    .btn1 {
      font-family: "Mulish";
      font-weight: 500;
      font-size: 15px;
      color: #fff;
      cursor: pointer;
      max-width: 160px !important;
      padding: 14px 30px;
      position: relative;
      width: 100%;
      background: transparent;
      border: 1px solid #d9d9d9;
    }
    .btn1:hover {
      text-decoration: none;
    }

    .btn2 {
      font-family: "Mulish";
      font-weight: 500;
      font-size: 15px;
      color: #fff;
      cursor: pointer;
      max-width: 160px !important;
      padding: 15px 30px;
      position: relative;
      width: 100%;
      background: #fe152b;
    }
    .btn2:hover {
      text-decoration: none;
    }
    .btn-4 {
      /* border: 1px solid; */
      overflow: hidden;
      position: relative;
    }
    .btn-4 span {
      z-index: 20;
    }
    .btn-4:after {
      background: #fff;
      content: "";
      height: 155px;
      left: -75px;
      opacity: 0.2;
      position: absolute;
      top: -50px;
      transform: rotate(35deg);
      transition: all 550ms cubic-bezier(0.19, 1, 0.22, 1);
      width: 50px;
      z-index: 10;
    }

    .btn-4:hover:after {
      left: 120%;
      transition: all 550ms cubic-bezier(0.19, 1, 0.22, 1);
    }
  }
`;
export { ErrorPageWrapper };

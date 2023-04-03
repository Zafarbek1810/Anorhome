import styled from "styled-components";

const TemplateWrapper = styled.div`
  padding-top: 100px;
  background: #161a1d;
  .banner {
    display: flex;
    margin-bottom: 70px;
    .left {
      width: 30%;
      z-index: 33;
      .title {
        width: 150%;
        font-family: "Figtree";
        font-style: normal;
        font-weight: 900;
        font-size: 70px;
        line-height: 84px;
        letter-spacing: 0.1em;
        color: #ffffff;
      }
    }

    .right {
      width: 70%;
      display: flex;
      flex-direction: column;

      img {
        width: 100%;
      }

      .descr {
        font-family: "Figtree";
        font-style: normal;
        font-weight: 400;
        font-size: 18px;
        line-height: 22px;
        color: #d1d1d1;
      }
    }
  }

  .how-it-work {
    margin-bottom: 70px;
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

    .wrap {
      margin-top: 50px;
      .cards {
        background: #ffffff;
        padding: 40px 20px;
        display: flex;
        align-items: center;
        text-align: center;

        .card {
          padding: 0 30px;
          h5.title {
            margin: 10px 0;
            font-family: "Figtree";
            font-style: normal;
            font-weight: 700;
            font-size: 32px;
            line-height: 38px;
            color: #000000;
          }
          p.descr {
            margin: 0;
            font-family: "Figtree";
            font-style: normal;
            font-weight: 400;
            font-size: 14px;
            line-height: 17px;
            text-align: center;
            color: #161a1d;
          }
        }
      }
    }
  }

  .about {
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
    .descr {
      margin: 0;
      font-family: "Figtree";
      font-style: normal;
      font-weight: 400;
      font-size: 18px;
      line-height: 22px;

      color: #d1d1d1;
    }
  }

  .services {
    width: 100%;
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
    .cards {
      width: 100%;
      display: flex;
      justify-content: space-between;
      padding: 60px 0 100px;
      .card {
        width: 30%;
        .cardImg {
          position: relative;
          z-index: 30 !important;
          transform-style: preserve-3d;
          img {
            width: 100%;
          }
          &:before {
            content: " ";
            border: 1px solid #0c1bae;
            transition: all 0.2s;
            width: 100%;
            height: 100%;
            position: absolute;
            top: 20px;
            right: -20px;
            transform: translateZ(-50px);
          }
        }

        .cardImg:hover:before {
          position: absolute;
          top: -1px;
          right: -1px;
        }

        h5 {
          font-family: "Figtree";
          font-style: normal;
          font-weight: 900;
          font-size: 24px;
          line-height: 29px;
          letter-spacing: 0.1em;
          color: #161a1d;
          margin: 50px 0 30px;
        }
        p {
          font-family: "Figtree";
          font-style: normal;
          font-weight: 400;
          font-size: 16px;
          line-height: 19px;
          color: #161a1d;
        }
        /* ============== button hover  start======================== */
        .buttons {
          display: flex;
          flex-direction: column;
          justify-content: center;
          text-align: center;
          width: 100%;
        }

        .btn {
          font-family: "Figtree";
          font-weight: 500;
          font-size: 16px;
          color: #fff !important;
          cursor: pointer;
          max-width: 160px !important;
          padding: 15px 30px;
          position: relative;
          width: 100%;
          background: #000;
          border: none !important;
        }

        .btn:hover {
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
          opacity: 0.6;
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
        /* ============== button hover  end======================== */
      }
    }
  }
`;

export { TemplateWrapper };

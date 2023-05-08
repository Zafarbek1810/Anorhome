import styled from "styled-components";

const TemplateWrapper = styled.div`
  padding-top: 100px;
  background: #161a1d;
  box-sizing: border-box;

  .title {
        /* width: 220%; */
        font-family: "Mulish";
        font-style: normal;
        font-weight: 900;
        font-size: 70px;
        line-height: 74px;
        color: #ffffff;
      }

  .banner {
    /* display: flex; */
    margin-bottom: 70px;
    position: relative;
    .left {
      width: 100%;
      position: absolute;
      z-index: 33;
      .title {
        width: 100%;
        font-family: "Mulish";
        font-style: normal;
        font-weight: 900;
        font-size: 70px;
        text-align: center;
        line-height: 74px;
        color: #ffffff;
      }
    }

    .right {
      width: 100%;
      display: flex;
      flex-direction: column;

      img {
        width: 100%;
        height: 500px;
        object-fit: cover;
        filter: brightness(50%)
      }

      .descr {
        font-family: "Mulish";
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
        font-family: "Mulish";
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
          width: 25%;
          h5.title {
            margin: 10px 0;
            font-family: "Mulish";
            font-style: normal;
            font-weight: 700;
            font-size: 32px;
            line-height: 38px;
            color: #000000;
          }
          p.descr {
            margin: 0;
            font-family: "Mulish";
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
        font-family: "Mulish";
        font-style: normal;
        font-weight: 700;
        font-size: 40px;
        line-height: 48px;
        color: #ffffff;
      }
    }
    .descr {
      margin: 0;
      font-family: "Mulish";
      font-style: normal;
      font-weight: 400;
      font-size: 18px;
      line-height: 22px;
      white-space: pre-wrap;
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
      flex-wrap: wrap;
      gap: 30px;
      justify-content: space-between;
      padding: 60px 0 100px;
      .card {
        width: calc((100% - 60px) / 3);
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        .cardImg {
          position: relative;
          z-index: 30 !important;
          transform-style: preserve-3d;
          img {
            width: 100%;
            height: 250px;
            object-fit: cover;
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
          top: -3px;
          right: -1px;
        }

        h5 {
          font-family: "Mulish";
          font-style: normal;
          font-weight: 900;
          font-size: 18px;
          line-height: 29px;
          color: #161a1d;
          margin: 30px 0;
          
        }
        p {
          font-family: "Mulish";
          font-style: normal;
          font-weight: 400;
          font-size: 14px;
          line-height: 19px;
          color: #161a1d;
          -webkit-line-clamp: 4;
          -webkit-box-orient: vertical;
          display: -webkit-box;
          overflow: hidden;
          text-overflow: ellipsis;
        }
        /* ============== button hover  start======================== */
        .buttons {
          padding: 10px;
          position: relative;
          width: 70%;
          a {
            padding: 10px;
            display: inline-block;
            text-align: center;
            width: 100%;
            background-color: #161a1d;
            color: #fff;
            font-family: "Mulish";
            font-style: normal;
            font-weight: 400;
            font-size: 16px;
            line-height: 19px;
            transition: 0.3s;

            &::before {
              content: "";
              position: absolute;
              top: 0;
              left: 0;
              width: 3%;
              height: 100%;
              border: 1px solid #fe152b;
              border-right: none;
              transition: 0.3s;
            }

            &::after {
              content: "";
              position: absolute;
              top: 0;
              right: 0;
              width: 3%;
              height: 100%;
              border: 1px solid #fe152b;
              border-left: none;
              transition: 0.3s;
            }

            &:hover {
              background: #fe152b;
              color: #ffffff;
            }

            &:hover:after,
            &:hover:before {
              transition: width 350ms ease-in-out;
              width: 50%;
              border-color: #fe152b;
            }
          }
        }
        /* ============== button hover  end======================== */
      }
    }
  }
  // TABLET
  @media (max-width: 991.98px) {

    .title { 
      font-size: 60px!important ; 
    }

    .how-it-work {
      margin-bottom: 70px;
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
        }
      }
  
      .wrap {
        margin-top: 50px; 
        .cards {
          background: #ffffff;
          padding: 30px 10px;
          display: flex;
          align-items: center;
          justify-content: center;  
          text-align: center;
          flex-wrap: wrap;
  
          .card {
            padding: 30px 30px;
            h5.title {
              margin: 25px 0; 
              font-size: 34px!important; 
            }
            p.descr {
              margin: 0;
              font-family: "Mulish";
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

    .cards {
      width: 100%;
      display: flex;
      flex-wrap: wrap;
      gap: 30px;
      justify-content: space-between;
      padding: 70px 0 100px;
      .card {
        width: calc((100% - 50px) / 2)!important;
        margin-bottom: 50px;
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
          font-family: "Mulish";
          font-style: normal;
          font-weight: 900;
          font-size: 24px;
          line-height: 29px;
          letter-spacing: 0.1em;
          color: #161a1d;
          margin: 50px 0 30px;
        }
        p {
          font-family: "Mulish";
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
          font-family: "Mulish";
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

  // MOBILE
  @media (max-width: 767.98px) {

    .banner {
      display: flex;
      flex-direction: column; 
      .left {
        width: 100%; 
        .title {
          width: 100%; 
          font-size: 36px;
          line-height: 66px; 
        }
      } 
      .right {
        width: 100%;
        display: flex;
        flex-direction: column; 
      }
    }

    .how-it-work {
      margin-bottom: 70px;
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
        }
      }
  
      .wrap {
        margin-top: 50px; 
        .cards {
          background: #ffffff;
          padding: 10px 10px;
          display: flex;
          align-items: center;
          justify-content: center;  
          text-align: center;
          flex-wrap: wrap;
  
          .card {
            padding: 20px 20px;
            h5.title {
              margin: 20px 0; 
              font-size: 34px!important; 
            }
            p.descr {
              margin: 0;
              font-family: "Mulish";
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

    .cards {
      width: 100%;
      display: flex;
      flex-wrap: wrap;
      gap: 30px;
      justify-content: space-between;
      padding: 70px 0 100px;
      .card {
        width: 100%!important;
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
          font-family: "Mulish";
          font-style: normal;
          font-weight: 900;
          font-size: 24px;
          line-height: 29px;
          letter-spacing: 0.1em;
          color: #161a1d;
          margin: 50px 0 30px;
        }
        p {
          font-family: "Mulish";
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
          font-family: "Mulish";
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

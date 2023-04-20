import styled from "styled-components";

const ThirdSectionWrapper = styled.div`
  background: #161a1d;
  padding-top: 100px;
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
    display: flex;
    align-items: center;
    gap: 40px;

    .left {
      width: 40%;

      .subtitle {
        font-family: "Mulish";
        font-style: normal;
        font-weight: 600;
        font-size: 18px;
        line-height: 22px;
        color: #fe152b;
        margin: 0;
        margin-bottom: 15px;
      }
      .titles {
        font-family: "Mulish";
        font-style: normal;
        font-weight: 900;
        font-size: 64px;
        line-height: 77px;
        margin: 0;
        color: #ffffff;
        margin-bottom: 20px;
        color: #ffffff;
      }
      .descr {
        font-family: "Mulish";
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 19px;
        margin-bottom: 40px;
        color: #ffffff;
      }
      .buttons {
          padding: 10px;
          position: relative;
          width: 50%;
          a {
            padding: 10px;
            display: inline-block;
            text-align: center;
            width: 100%;
            background-color: #fff;
            color: #fe152b;
            font-family: "Mulish";
            font-style: normal;
            font-weight: 600;
            font-size: 18px;
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
      /* ============== */
    }

    .right {
      width: 60%;
      height: 100%;
      display: flex;

      .card { 
        padding: 10px;
        overflow: hidden;
        height: 470px;
        position: relative;
        transition: all 500ms ease-in-out;
        width: 15%;

        .card-img-wrapper {
          height: 100%;
          overflow: hidden;
        }

        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: 300ms ease;
        }

        .bottom {
          transform: rotate(-90deg);
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          padding: 10px 30px;
          display: none;
          justify-content: space-between;
          background: linear-gradient(
            360deg,
            rgba(22, 26, 29, 0.79) 0%,
            rgba(22, 26, 29, 0.23) 100%
          );
          span {
            display: flex;
            align-items: center;
            height: 70px;
            width: 300px;
            font-family: "Mulish";
            font-style: normal;
            font-weight: 400;
            font-size: 14px !important;
            line-height: 19px;
            color: #ffffff;
            svg {
              margin-right: 15px;
              path{
                fill:#fff !important;
              }
            }
          }
        }
        .bottom2 {
          display: block;
          transform: rotate(-90deg);
          position: absolute;
          top: 80%;
          left: -10px;
          width: 100%;
          padding: 10px 60px;
          span {
            display: flex;
            align-items: center;
            height: 70px;
            width: 300px;
            font-family: "Mulish";
            font-style: normal;
            font-weight: 400;
            font-size: 14px;
            line-height: 19px;
            color: #ffffff;
          }
        }
      }
      .card.active {
        flex-grow: 1;
        img{
          transform: scale(1.1);
        }
        .bottom {
          transform: rotate(0);
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          padding: 10px 30px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          background: linear-gradient(
            360deg,
            rgba(22, 26, 29, 0.79) 0%,
            rgba(22, 26, 29, 0.23) 100%
          );
          span {
            display: flex;
            align-items: center;
            height: 70px;
            width: 300px;
            font-family: "Mulish";
            font-style: normal;
            font-weight: 400;
            font-size: 16px;
            line-height: 19px;
            color: #ffffff;
            svg {
              margin-right: 15px;
            }
          }
          a{
            width: 70%;
            display: flex;
            align-items: center;
            justify-content: end;
            svg {
              margin-right: 0px;
              margin-left: 5px;
              width: 20px;

            }
            display: flex;
            font-size: 14px;
            font-family: "Mulish";
          }
        }
        .bottom2 {
          display: none;
          transform: rotate(-90deg);
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          padding: 10px 60px;
          span {
            display: flex;
            align-items: center;
            height: 70px;
            width: 300px;
            font-family: "Mulish";
            font-style: normal;
            font-weight: 400;
            font-size: 16px;
            line-height: 19px;
            color: #ffffff;
          }
        }
      }
      .card:hover {
        /* width: 55%; */
        /* flex-grow: 5; */
      }

      color: #ffffff;
    }
    .btns {
    }
  }

  @media (max-width: 700px) {
    .wrap{
      display: flex;
      flex-direction: column-reverse;

      .right{
        width: 100%;
        span{
          font-size: 12px !important;
        }

          .card{
            .bottom2{
              position: absolute;
          top: 80%;
          left: -30px;
          width: 100%;
            }
          }
          .card.active{
            .bottom{
              display: flex;
              padding: 20px 35px !important; 
              span{
                height: 35px;
              }
              a{
                font-size: 12px;
              }
            }
          }
      }

      .left{
        width: 100%;
        .subtitle {
          font-size: 16px;
        }
        .titles{
          font-size: 32px;
          line-height: 36px;
        }
        .descr{
          font-size: 14px;
        }
        
      }
    }
  }
  @media (max-width: 500px) {
    .wrap{
      display: flex;
      flex-direction: column-reverse;

      .right{
        width: 100%;
        span{
          font-size: 12px !important;
        }

          .card{
            .bottom2{
              position: absolute;
              top: 80%;
              left: -30px;
              width: 100%;
            }
          }
          .card.active{
            .bottom{
              display: flex;
              flex-direction: column;
              padding: 20px 35px !important; 
              span{
                height: 35px;
                transform: translateX(25%);
                svg{
                  display: none;
                }
              }
              a{
                width: 100%;
                font-size: 12px;
              }
            }
          }
      }
    }
  }
`;

export { ThirdSectionWrapper };

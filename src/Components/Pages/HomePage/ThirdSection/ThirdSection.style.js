import styled from "styled-components";

const ThirdSectionWrapper = styled.div`
  background: #161a1d;
  padding-top: 100px;
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
    display: flex;
    align-items: center;
    gap: 40px;

    .left {
      width: 40%;

      .subtitle {
        font-family: "Figtree";
        font-style: normal;
        font-weight: 600;
        font-size: 18px;
        line-height: 22px;
        color: #fe152b;
        margin: 0;
        margin-bottom: 15px;
      }
      .titles {
        font-family: "Figtree";
        font-style: normal;
        font-weight: 900;
        font-size: 64px;
        line-height: 77px;
        margin: 0;
        color: #ffffff;
        margin-bottom: 20px;
      }
      .descr {
        font-family: "Figtree";
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 19px;
        margin-bottom: 40px;
        color: #ffffff;
      }
      .btns a:nth-child(1) {
        background: #ffffff;
        font-family: "Figtree";
        font-style: normal;
        font-weight: 500;
        font-size: 16px;
        line-height: 19px;
        padding: 15px 40px;
        color: #161a1d;
        margin-right: 30px;
      }
      .btns a:nth-child(2) {
        background: transparent;
        font-family: "Figtree";
        font-style: normal;
        font-weight: 500;
        font-size: 16px;
        line-height: 19px;
        padding: 15px 40px;
        color: #ffffff;
        border: 1px solid #fff;
      }
    }

    .right {
      width: 60%;
      height: 100%;
      display: flex;
      gap: 20px;
      .card1 {
        width: 55%;
        flex-grow: 1;
        .bottom {
          transform: rotate(0deg) !important;
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          padding: 10px 30px;
          display: flex !important;
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
            font-family: "Figtree";
            font-style: normal;
            font-weight: 400;
            font-size: 16px;
            line-height: 19px;
            color: #ffffff;
            svg {
              margin-right: 15px;
            }
          }
        }
        .bottom2{
            display: none !important;
        }
      }

      .card {
        height: 470px;
        width: 15%;
        position: relative;
        border: 1px solid #ffffff;
        transition: 500ms ease;
        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
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
            font-family: "Figtree";
            font-style: normal;
            font-weight: 400;
            font-size: 16px;
            line-height: 19px;
            color: #ffffff;
            svg {
              margin-right: 15px;
            }
          }
        }
        .bottom2{
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
            font-family: "Figtree";
            font-style: normal;
            font-weight: 400;
            font-size: 16px;
            line-height: 19px;
            color: #ffffff;
          }
        }
      }

      .card:hover {
        width: 55%;
        .bottom {
          transform: rotate(0);
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          padding: 10px 30px;
          display: flex;
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
            font-family: "Figtree";
            font-style: normal;
            font-weight: 400;
            font-size: 16px;
            line-height: 19px;
            color: #ffffff;
            svg {
              margin-right: 15px;
            }
          }
        }
        .bottom2{
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
            font-family: "Figtree";
            font-style: normal;
            font-weight: 400;
            font-size: 16px;
            line-height: 19px;
            color: #ffffff;
          }
        }
      }

      .card:hover .card1{
            width: 15% !important;

            .bottom{
                display: none !important; 
            }
            .bottom2{
                display: block !important; 
            }
        }
      
      
    }
  }
`;

export { ThirdSectionWrapper };

import styled from "styled-components";

const OurProjectsWrapper = styled.div`
  background: #ffffff;
  padding: 40px 0;

  .swiper {
    width: 100%;
    height: 100%;
    margin-left: auto;
    margin-right: auto;
  }
  .swiper-wrapper{
    padding-bottom:15px;
  }
  .swiper-pagination-horizontal{
    transform:translateY(10px) !important;
  }
  .swiper-pagination-bullet-active{
    background: #ED3240;
  }

  .swiper-slide {
    text-align: center;
    font-size: 18px;
    background: #fff;
    height: calc((100% - 30px) / 2) !important;

    /* Center slide text vertically */
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .wrapper {
    display: flex;
    .left {
      width: 50%;
      padding-right: 40px;
      border-right: 1px solid #d9d9d9;

      .title {
        font-family: "Jost";
        font-style: normal;
        font-weight: 700;
        font-size: 40px;
        line-height: 48px;
        color: #fe152b;
        width: 50%;
      }

      .heading {
        font-family: "Jost";
        font-style: normal;
        font-weight: 700;
        font-size: 32px;
        line-height: 38px;
        color: #161a1d;
      }

      .descr {
        font-family: "Jost";
        font-style: normal;
        font-weight: 400;
        font-size: 18px;
        line-height: 22px;
        color: #161a1d;
      }

      .location {
        display: flex;
        align-items: center;

        svg {
          margin-right: 24px;
        }

        p {
          font-family: "Jost";
          font-style: normal;
          font-weight: 600;
          font-size: 16px;
          line-height: 19px;
          color: #161a1d;
          width: 50%;
        }
      }

      .calendar {
        display: flex;
        align-items: center;
        svg {
          margin-right: 24px;
        }
        p {
          font-family: "Jost";
          font-style: normal;
          font-weight: 600;
          font-size: 16px;
          line-height: 19px;
          color: #161a1d;
        }
      }

      .galery {
        .title-img {
          font-family: "Jost";
          font-style: normal;
          font-weight: 600;
          font-size: 20px;
          line-height: 24px;
          letter-spacing: 0.1em;
          color: #161a1d;
        }

        .btns{
         display: flex;
         transform: translateY(-15px);
         justify-content:end;
         position:relative;
         z-index:33;
         button{
          background: transparent;
          border: none;
          &:hover{
            cursor: pointer;
          }
         }
        }

        .imgs {
          .img {
            width: 100%;
            padding: 5px;
            img {
              width: 100%;
              height: 180px;
              object-fit: cover;
            }
          }
        }
      }
    }
    .right {
      width: 50%;
      height: 200vh;
      overflow-y: scroll;
      padding: 40px;

      ::-webkit-scrollbar {
        width: 6px !important;
      }

      ::-webkit-scrollbar-track {
        background-color: #f5f5f5 !important;
      }

      ::-webkit-scrollbar-thumb {
        background-color: #d9d9d9 !important;
        border-radius: 10px !important;
      }

      .cards {
        .card {
          background-color: #fff;
          display: flex;
          height: 250px;
          gap: 40px;
          margin-bottom: 20px;
          padding: 35px 40px;
          border: 1px solid rgba(0, 0, 0, 0.5);
          transition: 300ms ease;

          .img {
            width: 50%;
            img {
              width: 100%;
              height: 100%;
              object-fit: cover;
            }
          }

          .text {
            width: 50%;
            display: flex;
            flex-direction: column;
            justify-content: space-between;

            h6 {
              margin: 0;
              font-family: "Jost";
              font-style: normal;
              font-weight: 600;
              font-size: 20px;
              line-height: 24px;
              letter-spacing: 0.1em;
              color: #161a1d;
            }

            p {
              font-family: "Jost";
              font-style: normal;
              font-weight: 400;
              font-size: 14px;
              line-height: 17px;
              color: #fe152b;
            }

            .location-card {
              display: flex;
              align-items: center;
              p {
                margin-left:10px;
                font-family: "Jost";
                font-style: normal;
                font-weight: 600;
                font-size: 14px;
                line-height: 17px;
                color: #161a1d;
              }
            }
          }
        }

        .card:hover {
          background-color: #161a1d;
          cursor: pointer;

          .text {
            h6 {
              color: #ffffff;
            }
            p {
              color: #ffffff;
            }
          }
        }
      }
    }
  }

  @media(max-width:870px){
    .wrapper{
      flex-direction:column-reverse;

      .left{
        width: 100%;
        border: none;
      }

      .right{
        width: 100%;
        height:300px;
      }
      
    }
  }
`;

export { OurProjectsWrapper };

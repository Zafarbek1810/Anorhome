import styled from "styled-components";

const TestimionalsWrapper = styled.div`
  background: #fff;
  padding-top: 100px;
  .title {
    border-top: 1px solid #161a1d;
    border-bottom: 1px solid #161a1d;

    h3 {
      font-family: "Figtree";
      font-style: normal;
      font-weight: 700;
      font-size: 40px;
      line-height: 48px;
      color: #161a1d;
    }
  }

  .wrapper {
    display: flex;
    align-items: flex-end;
    .car {
      width: 80% !important;

      .carousel{
        width: 100%;
      }
    }

    .btns {
      width: 25% !important;
      display: flex;
      justify-content: space-between;
      padding-left: 50px;
      button{
        background-color: transparent;
        border: none;
        cursor: pointer;
      }
      button:hover{
        color: #fff!important;
      }

      button:nth-child(1) {
        svg {
          transform: rotate(180deg);
        }
      }
    }
     
  }

  .carusel {
    width: 100% !important;
    display: flex !important;
    gap: 50px;
    background: #161a1d;
    padding: 45px 30px;
    
    .left {
      width: 30%;
      img{
        width: 100%;
        object-fit: cover;
      }
    }
    .right {
      position: relative;
      width: 70%;
      img {
        position: absolute;
        right: 0px;
        bottom: 0px;
        z-index: 0;
      }
      .name {
        font-family: "Montserrat";
        font-style: normal;
        font-weight: 700;
        font-size: 28px;
        line-height: 34px;
        color: #ffffff;
      }

      .prof {
        font-family: "Montserrat";
        font-style: normal;
        font-weight: 600;
        font-size: 18px;
        line-height: 22px;
        color: #ffffff;
      }

      .descr {
        font-family: "Montserrat";
        font-style: normal;
        font-weight: 400;
        font-size: 18px;
        line-height: 22px;
        color: #ffffff;
        position: relative;
        z-index: 22;
      }

      .date {
        font-family: "Montserrat";
        font-style: normal;
        font-weight: 500;
        font-size: 18px;
        line-height: 22px;
        color: #ffffff;
        position: relative;
        z-index: 22;
      }
    }
  }

  @media (max-width: 700px) {
    .wrapper{
      flex-direction: column;
      .car{
        width: 100% !important;

        .carusel{
          flex-direction: column;
          .left{
            width: 100%;
            img{
              object-fit: contain;
            }
          }
          .right{
            width: 100%;
          }
        }
      }
      .btns{
        padding: 0;
        justify-content: center;
        margin-top: 40px;
        width: 100% !important;
      }
    }
  }
`;

export { TestimionalsWrapper };

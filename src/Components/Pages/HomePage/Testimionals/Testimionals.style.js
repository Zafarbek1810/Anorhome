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
    }
    .right {
      position: relative;
      img {
        position: absolute;
        right: 0;
        bottom: 0;
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
      }

      .date {
        font-family: "Montserrat";
        font-style: normal;
        font-weight: 500;
        font-size: 18px;
        line-height: 22px;
        color: #ffffff;
      }
    }
  }
`;

export { TestimionalsWrapper };

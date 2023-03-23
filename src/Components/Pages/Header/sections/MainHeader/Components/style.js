import styled from "styled-components";

const BurgerWrapper = styled.div`
  ul {
    padding: 0;
    li {
      a {
        color: #000;
        font-size: 18px !important;
        font-family: 'Figtree';
        font-weight: 700;
        transition: 300ms;

        &:hover {
          color: #f67f00 !important;
        }
      }
    }

    .lang {
      display: flex !important;
      align-items: center;
      margin-top: 30px;

      .ant-select-selector {
        border: none !important;
        background-color: transparent !important;
        font-family: "Figtree" !important;
        font-style: normal !important;
        font-weight: 700 !important;
        font-size: 15px !important;
        line-height: 18px !important;
      }
      .ant-select-arrow .anticon svg {
        color: #000 !important;
      }
      .ant-select-selection-item{
        color: #000 !important;

      }

      svg {
        width: 30px;
        fill: #000 !important;
      }
    }

    .callBtn {
      margin-top: 40px;
      border: none;
      display: block;
      width: 300px !important;
      width: 100%;
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
        background: #000 !important;
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
  }
`;

export { BurgerWrapper };

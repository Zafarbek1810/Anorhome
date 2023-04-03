import styled from "styled-components";

const FormModalWrapper = styled.div`
  z-index: 11111 !important;

  .form-wrapper {
    h3 {
      font-family: "Jost";
      font-style: normal;
      font-weight: 700;
      font-size: 36px;
      line-height: 43px;
      color: #000000;
      margin-top: 0;
    }

    label {
      display: flex;
      flex-direction: column;
      position: relative;

      .label-text {
        font-family: "Jost";
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 19px;

        color: #fe152b;
      }

      input {
        margin: 10px 0 22px;
        width: 70%;
        padding: 11px 0 11px 50px;

        font-family: "Jost";
        font-style: normal;
        font-weight: 600;
        font-size: 16px;
        line-height: 19px;

        color: #161a1d;
      }

      svg {
        position: absolute;
        top: 40px;
        left: 14px;
      }

      
    }

    .submit-btn-wrapper{
       /* ============== button hover  start======================== */

       .buttons {
        display: flex;
        flex-direction: column;
        justify-content: center;
        text-align: center;
        width: 100%;
      }

      .btn {
        font-family: "Jost";
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
    }
  }
`;

export { FormModalWrapper };

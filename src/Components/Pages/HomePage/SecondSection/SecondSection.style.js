import styled from "styled-components";

const SecondSectionWrapper = styled.div`
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
    background: #ffffff;
    padding: 55px 20px;
    display: flex;
    gap: 40px;

    .left {
      width: 60%;
      p.info {
        font-family: "Figtree";
        font-style: normal;
        font-weight: 400;
        font-size: 20px;
        line-height: 24px;
        color: #2b2d42;
        margin: 0;
      }
      .countWrap {
        margin: 40px 0;
        background: #ffffff;
        box-shadow: 0px 4px 23px rgba(217, 4, 41, 0.08);
        display: flex;
        padding: 30px 0;

        .count {
          width: 25%;
          text-align: center;
          border-right: 1px solid #A4161A;
          
          &:last-child{
              border-right: none;
          }

          

          .num {
            font-family: "Figtree";
            font-style: normal;
            font-weight: 600;
            font-size: 20px;
            line-height: 24px;
            color: #000000;
          }

          .title {
            font-family: "Figtree";
            font-style: normal;
            font-weight: 400;
            font-size: 14px;
            line-height: 17px;
            color: #000000;
          }
        }
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
        color: #fff;
        cursor: pointer;
        max-width: 160px !important;
        padding: 15px 30px;
        position: relative;
        width: 100%;
        background: #fe152b;
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

    /* =================== button hover end =================== */
    }

    .right {
      width: 40%;

      img{
        width: 100%;
      }
    }

  @media (max-width: 700px) {
    .wrap{
      display: flex;
      flex-direction: column-reverse;

      .right{
        width: 100%;
      }

      .left{
        width: 100%;
        p.info {
          font-size: 16px;
        }
      }
    }
  }
  @media (max-width: 450px) {
    .wrap{
      

      .left{
        
        .countWrap{
          flex-wrap: wrap;
          .count{
            width: 50%;
            border: none;
            margin-bottom: 30px;
            &:nth-child(1){
              border-right: 1px solid #A4161A;
            }
            &:nth-child(3){
              border-right: 1px solid #A4161A;
            }
          }
        }
      }
    }
  }
`;

export { SecondSectionWrapper };

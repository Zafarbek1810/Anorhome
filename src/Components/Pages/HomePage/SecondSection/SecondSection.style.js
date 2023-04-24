import styled from "styled-components";

const SecondSectionWrapper = styled.div`
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
    background: #ffffff;
    padding: 55px 20px;
    display: flex;
    gap: 40px;

    .left {
      width: 60%;
      p.info {
        font-family: "Mulish";
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
          display: flex;
          flex-direction: column;
          justify-content: start;

          .imgs{
            height: 30px;
          }
          
          &:last-child{
              border-right: none;
          }
          .num {
            font-family: "Mulish";
            font-style: normal;
            font-weight: 800;
            font-size: 20px;
            line-height: 24px;
            color: #000000;
          }

          .title {
            font-family: "Mulish";
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
          padding: 10px;
          position: relative;
          width: 30%;
          a {
            padding: 10px;
            display: inline-block;
            text-align: center;
            width: 100%;
            background-color: #161A1D;
            color: #fff;
            font-family: "Mulish";
            font-style: normal;
            font-weight: 600;
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

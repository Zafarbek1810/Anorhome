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
    padding: 65px 40px;
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
      }
      .countWrap {
        margin-top: 60px;
        margin-bottom: 75px;
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

      a {
        font-family: "Figtree";
        font-style: normal;
        font-weight: 500;
        font-size: 16px;
        line-height: 19px;
        color: #ffffff;
        background: #fe152b;
        padding: 15px 40px !important;
        transition: 300ms;

        &:hover{
            background: rgba(254, 21, 43, 0.7);
        }
      }
    }

    .right {
      width: 40%;

      
    }
  }
`;

export { SecondSectionWrapper };

import styled from "styled-components";

const ThirdSectionWrapper=styled.div`
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

  .wrap{
    display: flex;
    align-items: center;
    gap: 40px;

    .left{
        width: 40%;

        .subtitle{
            font-family: 'Figtree';
font-style: normal;
font-weight: 600;
font-size: 18px;
line-height: 22px;
color: #FE152B;
        }
        .titles{
            font-family: 'Figtree';
font-style: normal;
font-weight: 900;
font-size: 64px;
line-height: 77px;

color: #FFFFFF;
        }
        .descr{
            font-family: 'Figtree';
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 19px;

color: #FFFFFF;

        }
        .btns{

        }
    }
  }
`

export{ThirdSectionWrapper}
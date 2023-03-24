import styled from "styled-components";

const ValuesWrapper = styled.div`
  background-color: #fff;
  padding-top: 100px;
  section {
    color: #fff;
  }
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
  .box__wrapper {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-top: 60px;
  }
  .boxes {
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    background: #ffffff;
    transition: 0.2s;
    width: calc((100% - 100px) / 4);
    padding-top: 28px;
    padding-right: 40px;
    
    
    img {
      width: 40px;
      height: 40px;
      background: rgba(254, 21, 43, 0.1);
      border: 1px solid rgba(254, 21, 43, 0.2);
      /* border-radius: 0p; */
      padding: 5px;
    } 
    h3 {
      font-family: "Figtree";
      font-style: normal;
      font-weight: 700;
      font-size: 24px;
      line-height: 29px;
      margin: 10px 0;
      color: #000000;
    }
    p {
      font-family: "Figtree";
      font-style: normal;
      font-weight: 400;
      font-size: 14px;
      line-height: 17px;
      text-align: start;
      margin: 0;
      color: #161a1d;
    }
  }
   
`;
export { ValuesWrapper };
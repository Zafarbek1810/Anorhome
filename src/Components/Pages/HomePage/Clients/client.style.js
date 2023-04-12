import styled from "styled-components";

const ClientsWrapper = styled.div`
  background: #fff;
  padding-top: 100px;
  .title {
    border-top: 1px solid #161A1D;
    border-bottom: 1px solid #161A1D;

    h3 {
      font-family: "Mulish";
      font-style: normal;
      font-weight: 700;
      font-size: 40px;
      line-height: 48px;
      color: #161A1D;
    }
  }
  .clients__logo{
    padding: 60px 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    
  }
  .al-mashriq{
    width: 160px;
  }
  .komolon{
    width: 230px;
  }
  .travel{
    width: 130px;
  }

  @media (max-width: 700px) {
    .clients__logo{
      flex-wrap: wrap;
      justify-content: space-between; 
    }
    .al-mashriq{
    width: 120px;
  }
  .komolon{
    width: 160px;
  }
  .travel{
    width: 90px;
  }
  }
`;
export { ClientsWrapper };

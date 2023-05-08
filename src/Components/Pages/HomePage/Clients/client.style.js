import styled from "styled-components";

const ClientsWrapper = styled.div`
  background: #fff;
  padding-top: 100px;
  .title {
    border-top: 1px solid #161a1d;
    border-bottom: 1px solid #161a1d;

    h3 {
      font-family: "Mulish";
      font-style: normal;
      font-weight: 700;
      font-size: 40px;
      line-height: 48px;
      color: #161a1d;
    }
  }
  .clients__logo {
    padding: 75px 0;
    display: flex;
    align-items: center;
    justify-content: space-between;

    
  }
  .al-mashriq {
    width: 160px;
  }
  .komolon {
    width: 230px;
  }
  .travel {
    width: 130px;
  }
  .amt {
    width: 160px;
  }
  .sr {
    width: 110px;
  }
  .inter{
    width: 140px;
  }

  @media (max-width: 800px) {
    .clients__logo {
      flex-wrap: wrap;
      justify-content: space-between;
      img{
      margin-bottom: 50px;
    }
    }
    .al-mashriq {
      width: 120px;
    }
    .komolon {
      width: 160px;
    }
    .travel {
      width: 90px;
    }
    .amt {
      width: 120px;
    }
    .sr {
      width: 100px;
    }
    .inter{
    width: 140px;
  }
  }
`;
export { ClientsWrapper };

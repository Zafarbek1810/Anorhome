import styled from "styled-components";

const TeamWrapper = styled.div`
background-color: #fff;
 .title {
    border-top: 1px solid #000;
    border-bottom: 1px solid #000;

    h3 {
      font-family: "Mulish";
      font-style: normal;
      font-weight: 700;
      font-size: 40px;
      line-height: 48px; 
      color: #161A1D;
    }
  }
section{
  padding-top: 100px;
}
  .images-wrapper {
    display: flex;
    flex-wrap: wrap;
    gap: 30px;
  }
  .images-item {
    width: calc((100% - 60px) / 3);
    margin-bottom: 50px;
  }
  .img-wrapper {
    overflow: hidden;
    width: 100%;
    height: 415px;

    img {
      max-width: 100%;
      width: 100%;
      height: 100%;
      object-fit: cover;
      filter: grayscale(99%);
      transition: 0.2s;
      :hover {
        filter: grayscale(0);
      }
    }
  }

  .images-inner {
    text-align: start;

    h2 {
      font-family: "Mulish";
      font-style: normal;
      font-weight: 800;
      font-size: 24px;
      line-height: 29px; 
      color: #000;
    }
    p {
      font-family: "Mulish";
      font-style: normal;
      font-weight: 400;
      font-size: 16px;
      line-height: 20px;
      letter-spacing: 0.1em; 
      color: #000;
    }
  }

  
  // MOBILE
  @media (max-width: 767.98px) {
     
    .images-wrapper {
      display: flex;
      flex-wrap: wrap;
      gap: 15px;
    }
    .images-item {
      width: calc((100% - 15px) / 2);
    }
    .img-wrapper {
      overflow: hidden;
      width: 100%;
      height: auto;

      img {
        max-width: 100%;
        height: auto; 
      }
    }

    .images-inner {
      text-align: start;

      h2 {
        margin-top: 10px;
        margin-bottom: 5px;
        font-size: 18px; 
      }
      p {
        font-size: 12px;
        color: #5d5d5d;
        margin: 0;
      }
    }
  }
`;
export { TeamWrapper };

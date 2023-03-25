import styled from "styled-components";

const TeamWrapper = styled.div`
background-color: #161A1D;
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
    height: auto;

    img {
      max-width: 100%;
      width: 100%;
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
      font-family: "Figtree";
      font-style: normal;
      font-weight: 800;
      font-size: 24px;
      line-height: 29px; 
      letter-spacing: 0.1em; 
      color: #ffffff;
    }
    p {
      font-family: "Figtree";
      font-style: normal;
      font-weight: 400;
      font-size: 16px;
      line-height: 5px;
      letter-spacing: 0.1em; 
      color: #ffffff;
    }
  }
`;
export { TeamWrapper };

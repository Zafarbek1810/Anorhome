import styled from "styled-components";

const ValuesWrapper = styled.div`
  background-color: #161A1D;
  padding-top: 50px;
  padding-bottom: 50px;
  section {
    color: #161A1D;
  }
  .title {
    border-top: 1px solid #fff;
    border-bottom: 1px solid #fff;

    h3 {
      font-family: "Mulish";
      font-style: normal;
      font-weight: 700;
      font-size: 40px;
      line-height: 48px;
      color: #fff;
    }
  }
  .box__wrapper {
    display: flex;
    justify-content: space-between;
    padding-top: 60px;
  }
  .boxes {
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    /* justify-content: space-between; */
    background: #161A1D;
    transition: 0.2s;
    width: calc((100% - 100px) / 4);
    padding-top: 28px;
    padding-right: 40px;

    img {
      width: 40px;
      height: 40px;
      background: rgba(254, 21, 43, 0.1);
      border: 1px solid rgba(254, 21, 43, 0.2);
      border-radius: 50%;
      padding: 5px;
    }
    h3 {
      font-family: "Mulish";
      font-style: normal;
      font-weight: 700;
      font-size: 24px;
      line-height: 29px;
      margin: 10px 0;
      color: #fff;
    }
    p {
      font-family: "Mulish";
      font-style: normal;
      font-weight: 400;
      font-size: 14px;
      line-height: 17px;
      text-align: start;
      margin: 0;
      color: #fff;
    }
  }
  // TABLET
  @media (max-width: 991.98px) {
    .box__wrapper {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding-top: 60px;
    }
    .boxes {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      width: calc((100% - 40px) / 4);
      padding-top: 28px;
      padding-right: 1px;

      img {
        width: 40px;
        height: 40px;
        background: rgba(254, 21, 43, 0.1);
        border: 1px solid rgba(254, 21, 43, 0.2);
        /* border-radius: 0p; */
        padding: 5px;
      }
      h3 {
        font-size: 22px;
        margin: 10px 0;
      }
    }
  }

  // MOBILE
  @media (max-width: 767.98px) {
    .box__wrapper {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding-top: 30px;
      flex-wrap: wrap;
    }
    .boxes {
      display: flex;
      align-items: flex-start;
      flex-direction: column;
      justify-content: space-between;
      width: calc((100% - 30px) / 2);
      padding-top: 50px;
      padding-right: 0;

      img {
        width: 40px;
        height: 40px;
        background: rgba(254, 21, 43, 0.1);
        border: 1px solid rgba(254, 21, 43, 0.2);
        /* border-radius: 0p; */
        padding: 5px;
      }
      h3 {
        font-size: 20px;
        margin: 10px 0;
      }
    }
  }
`;
export { ValuesWrapper };

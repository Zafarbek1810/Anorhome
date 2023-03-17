import styled from "styled-components";

const TopHeaderWrapper = styled.div`
  background-color: #002f49;
  color: white;
  padding-bottom: 10px;

  .content {
    height: 40px !important;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .left_side {
    display: flex;
    border-right: 1px solid #ffffff33;

    svg{
        width: 15px;
        height: 15px;
      }

    a {
      color: #b5b5b5;
      padding: 15px;
      border-left: 1px solid #ffffff33;
      transition: 300ms;

      &:hover {
        color: #fff;
      }
    }
  }
  .right_side {
    margin-left: auto;
    display: flex;
    align-items: baseline;
    border-right: 1px solid #ffffff33;


    a {
      font-family: "Nunito Sans";
      font-size: 14px;
      font-weight: 600;
      line-height: 41px;
      color: #b5b5b5;
      transition: 300ms;
      padding: 15px;
      border-left: 1px solid #ffffff33;
      svg{
        margin-right: 10px;
        width: 10px;
        height: 10px;
      }

      &:hover {
        color: #fff;
      }
    }
  }

  @media (max-width: 767px) {
    .content {
      padding: 0 15px;
    }
    .left_side {
      display: flex;
      justify-content: space-between;
      align-items: center;
      .location {
        display: none;
      }
      margin-right: 10px;
      align-items: center;
      a {
        width: 50% !important;
      }
      a,
      p {
        width: 50%;
        font-size: 10px;
        margin: 0;
        white-space: nowrap;

        //text 2qatordan keyin korinmaydi
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        overflow: hidden;
        text-overflow: ellipsis;
      }
    }
    .right_side {
      a:not(:last-child) {
        margin-right: 6px;
      }
      svg {
        font-size: 16px;
      }
    }
  }

  @media(max-width: 550px){
    .left_side{
      display: none;
    }
    .right_side{
      width: 100%;
      justify-content: space-between;
    }
  }
`;

export default TopHeaderWrapper;

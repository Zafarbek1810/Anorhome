import styled from "styled-components";

const AnalyticWrapper = styled.div`
  background: #fff;
  padding-top: 75px;
  padding-bottom: 75px;
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

  .cards {
    padding: 100px 0 0;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;

    .card {
      width: 32%;
      margin-bottom: 50px;
    }

    .card__img {
      width: 100%;
      height: 231px;
      position: relative;

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }

      span {
        position: absolute;
        top: 0;
        right: 0;
        background: rgba(22, 26, 29, 0.3);
        backdrop-filter: blur(10px);
        font-family: "Montserrat";
        font-style: normal;
        font-weight: 600;
        font-size: 16px;
        line-height: 22px;
        text-align: center;
        color: #ffffff;
        padding: 10px 20px;
      }
    }

    .card__content {
      &__title {
        font-family: "Montserrat";
        font-style: normal;
        font-weight: 700;
        font-size: 22px;
        line-height: 34px;
        color: #000000;
      }

      &__text {
        font-family: "Montserrat";
        font-style: normal;
        font-weight: 400;
        font-size: 18px;
        line-height: 22px;
        color: #2b2d42;
      }

      a {
        font-family: "Montserrat";
        font-style: normal;
        font-weight: 600;
        font-size: 18px;
        line-height: 29px;
        color: #d90429;
        display: flex;
        align-items: center;
        svg {
          margin-left: 10px;
        }
      }
    }
  }

  .btn{
    display: flex;
    justify-content: center;
    button{
        font-family: 'Montserrat';
        font-style: normal;
        font-weight: 600;
        font-size: 18px;
        line-height: 29px;
        color: #D90429;
        background: transparent;
        border: none;

        &:hover{
            cursor: pointer;
        }
    }
  }

  // Responsive
  @media (max-width: 768px) {
    .cards {
      .card {
        width: 100%;
        margin-bottom: 50px;
      }
    }
  }

  @media (max-width: 480px) {
    .cards {
      .card {
        width: 100%;
        margin-bottom: 50px;
      }

      .card__img {
        height: 200px;
      }
    }
  }
`;

export default AnalyticWrapper;

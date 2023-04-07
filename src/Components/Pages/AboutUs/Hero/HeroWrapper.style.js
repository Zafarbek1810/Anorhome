import styled from "styled-components";

const HeroWrapper = styled.div`
  background-image: linear-gradient(
      90deg,
      #161a1d 36.48%,
      rgba(22, 26, 29, 0.6) 60.12%,
      rgba(22, 26, 29, 0) 100%
    ),
    linear-gradient(
      67deg,
      transparent 69.12%,
      rgba(22, 26, 29, 1) 100%
    ),
    url("/images/aboutUS1.webp");
    
  background-position: center right;
  background-repeat: no-repeat;
  background-size: auto 100vh;
  width: auto;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;

  .wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    gap: 70px;
  }
  .left {
    width: 50%;
    padding-right: 50px;
    h2 {
      font-family: "Mulish";
      font-style: normal;
      font-weight: 900;
      font-size: 70px;
      line-height: 84px;
      color: #ffffff;
      margin: 0;
    }
    p {
      font-family: "Mulish";
      font-style: normal;
      font-weight: 400;
      font-size: 16px;
      line-height: 19px;
      letter-spacing: 0.1em;
      color: #ffffff;
    }
  }
  .right {
    width: 50%;
    
    &__inner {
      display: flex;
      justify-content: space-around;
    }

    &__first {
      position: relative;
    }
    &__second {
      position: relative;
    }
    &__box-white {
      position: absolute;
      width: 160px;
      background: #ffffff;
      margin-top: 15px;
      padding: 5px 0;
      text-align: center;
      transform: translateY(-140px) translateX(-120px);

      h3 {
        font-family: "Mulish";
        font-style: normal;
        font-weight: 800;
        font-size: 24px;
        line-height: 2px;
        margin-top: 18px;
        color: #000;
      }
      p {
        font-family: "Mulish";
        font-style: normal;
        font-weight: 400;
        font-size: 12px;
        line-height: 1px;
        margin: 13px;
        color: #000;
      }
      span {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        background: #fe172d;
        width: 32px;
        height: 32px;
        border-radius: 50%;
        img {
          width: 20px;
        }
      }
    }
    &__box-red {
      position: absolute;
      width: 156px;
      background: #fe172d;
      margin-top: 10px;
      padding: 5px 0;
      text-align: center;
      transform: translateY(100px) translateX(-5px);

      h3 {
        font-family: "Mulish";
        font-style: normal;
        font-size: 24px;
        line-height: 9px;
        margin-top: 14px;
        color: #fff;
      }
      p {
        font-family: "Mulish";
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        line-height: 1px;
        margin-top: 6px;
        color: #fff;
      }
      span {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        background: #fff;
        width: 33px;
        height: 33px;
        border-radius: 50%;
        img {
          width: 22px;
        }
      }
    }
    &__box-white2 {
      position: absolute;
      width: 150px;
      background: #ffffff;
      margin-top: 10px;
      padding: 5px 0;
      text-align: center;
      transform: translateY(50px) translateX(-10px);

      h3 {
        font-family: "Mulish";
        font-style: normal;
        font-weight: 800;
        font-size: 24px;
        line-height: 5px;
        margin-top: 15px;
        color: #000;
      }
      p {
        font-family: "Mulish";
        font-style: normal;
        font-weight: 400;
        font-size: 12px;
        line-height: 1px;
        margin: 14px 0;
        color: #000;
      }
      span {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        background: #fe172d;
        width: 32px;
        height: 32px;
        border-radius: 50%;
        img {
          width: 20px;
        }
      }

    }
    &__box-red2 {
      position: absolute;
      width: 156px;
      background: #fe172d; 
      padding: 5px 0;
      text-align: center;
      transform: translateY(-165px) translateX(-80px);

      h3 {
        font-family: "Mulish";
        font-style: normal;
        font-size: 24px;
        line-height: 5px;
        margin-top: 15px;
        color: #fff;
      }
      p {
        font-family: "Mulish";
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        line-height: 1px;
        margin: 12px 0;
        color: #fff;
      }
      span {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        background: #fff;
        width: 33px;
        height: 33px;
        border-radius: 50%;
        img {
          width: 22px;
        }
      }
    }
  }
  .arrow-white {
    position: absolute;
    width: 17px;
    height: 17px;
    background-color: #fff;
    bottom: 0;
    left: 50%;
    transform: translateY(50%) translateX(-50%) skew(24deg, 341deg)
      rotate(335deg);
  }
  .arrow-red {
    position: absolute;
    width: 17px;
    height: 17px;
    background-color: #fe172d;
    bottom: 0;
    left: 50%;
    transform: translateY(50%) translateX(-50%) skew(24deg, 341deg)
      rotate(335deg);
  }

  // TABLET
  @media (max-width: 991.98px) {
    .left {
      padding-right: 20px;
      h2 {
        font-size: 55px;
        line-height: 64px;
        margin: 0;
      }
      p {
        font-size: 14px;
        line-height: 19px;
        letter-spacing: 0.1em;
      }
    }
    .right {
      

      &__box-white {
        width: 140px;
        margin-top: 16px;
        padding: 5px 0;
        transform: translateY(-140px) translateX(-120px);

        h3 {
          font-size: 22px;
          line-height: 6px;
          margin-top: 18px;
        }
        p {
          font-size: 10px;
        }
      }
      &__box-red {
        width: 145px;
        margin-top: 18px;
        padding: 5px 0;
        transform: translateY(80px) translateX(-70px);

        h3 {
          font-size: 22px;
          line-height: 5px;
          margin-top: 15px;
        }
        p {
          font-size: 12px;
        }
      }
      &__box-white2 {
        width: 150px;
        margin-top: 20px;
        padding: 7px 0;
        transform: translateY(40px) translateX(-35px);

        h3 {
          font-size: 22px;
          line-height: 5px;
          margin-top: 15px;
        }
        p {
          font-size: 10px;
          color: #000;
        }
      }
      &__box-red2 {
        width: 155px;
        margin-top: 15px;
        padding: 5px 0;
        transform: translateY(-180px) translateX(-30px);

        h3 {
          font-size: 22px;
          line-height: 5px;
          margin-top: 15px;
        }
        p {
          font-weight: 400;
          font-size: 12px;
        }
      }
    }
  }

  // MOBILE
  @media (max-width: 767.98px) {
    .wrapper {
      display: flex;
      flex-direction: column;
      width: 100%; 
      padding-top: 10px;
    }
    .left {
      width: 100%;  
    }
    .right {
      width: 100%; 
      min-height: 222px; 
      padding-top: 50px;
      &__box-white { 
        width: 120px; 
        margin-top: 16px;
        padding: 4px 0;
        text-align: center;
        transform: translateY(-50px) translateX(-90px);

        h3 {
          font-size: 20px;
          margin-top: 14px;
        }
        p {
          font-size: 10px;
        } 
      }
      &__box-red { 
        width: 115px; 
        margin-top: 15px;
        padding: 4px 0; 
        transform: translateY(115px) translateX(-65px);

        h3 {
          font-size: 20px;
          margin-top: 14px;
        }
        p {
          font-size: 12px;
        }
      }
      &__box-white2 {
        width: 120px;
        padding: 4px 0;
        transform: translateY(65px) translateX(-30px);

        h3 {
          font-size: 22px; 
          margin-top: 14px;
        }
        p {
          font-size: 10px;
        }
      }
      &__box-red2 {
        width: 125px;
        margin-top: 15px;
        padding: 5px 0;
        transform: translateY(-90px) translateX(-55px);

        h3 {
          font-size: 20px;
          margin-top: 14px;
        }
        p {
          font-size: 10px;
        }
      }
    }
  }
`;
export { HeroWrapper };

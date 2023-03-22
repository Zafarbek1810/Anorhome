import styled from "styled-components";

const HeroWrapper = styled.div`
  background-image: linear-gradient(
      90deg,
      #161a1d 46.48%,
      rgba(22, 26, 29, 0.6) 75.12%,
      rgba(22, 26, 29, 0) 100%
      ),
      url("/images/aboutUS1.webp"); 
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
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
    h2 {
      font-family: "Figtree";
      font-style: normal;
      font-weight: 900;
      font-size: 36px;
      line-height: 43px;
      letter-spacing: 0.1em;
      color: #ffffff;
    }
    p {
      font-family: "Figtree";
      font-style: normal;
      font-weight: 500;
      font-size: 18px;
      line-height: 22px;
      letter-spacing: 0.1em;
      color: #ffffff;
    }
  }
  .right {
    width: 50%;
    display: flex;
    justify-content: space-around;
    &__first {
      position: relative;
    }
    &__second {
      position: relative;
    }
    &__box-white {
      position: absolute;
      width: 198px;
      background: #ffffff;
      margin-top: 20px;
      padding: 7px 0;
      text-align: center; 
      transform: translateY(-140px) translateX(-120px);
       
      h3 {
        font-family: "Figtree";
        font-style: normal;
        font-weight: 800;
        font-size: 24px;
        line-height: 9px;
        margin-top: 20px;
        color: #000;
      }
      p {
        font-family: "Figtree";
        font-style: normal;
        font-weight: 400;
        font-size: 12px;
        line-height: 1px;
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
      width: 176px;
      background: #fe172d;
      margin-top: 20px;
      padding: 7px 0;
      text-align: center; 
      transform: translateY(100px) translateX(-5px);  

      h3 {
        font-family: "Figtree";
        font-style: normal;
        font-size: 24px;
        line-height: 9px;
        margin-top: 20px;
        color: #fff;
      }
      p {
        font-family: "Figtree";
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        line-height: 1px;
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
      width: 198px;
      background: #ffffff;
      margin-top: 20px;
      padding: 7px 0;
      text-align: center; 
      transform: translateY(-180px) translateX(-70px);
       
      h3 {
        font-family: "Figtree";
        font-style: normal;
        font-weight: 800;
        font-size: 24px;
        line-height: 9px;
        margin-top: 20px;
        color: #000;
      }
      p {
        font-family: "Figtree";
        font-style: normal;
        font-weight: 400;
        font-size: 12px;
        line-height: 1px;
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
      width: 176px;
      background: #fe172d;
      margin-top: 20px;
      padding: 7px 0;
      text-align: center; 
      transform: translateY(70px) translateX(30px); 

      h3 {
        font-family: "Figtree";
        font-style: normal;
        font-size: 24px;
        line-height: 9px;
        margin-top: 20px;
        color: #fff;
      }
      p {
        font-family: "Figtree";
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        line-height: 1px;
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
  .arrow-white{
    position: absolute;
    width: 17px;
    height: 17px;
    background-color: #fff;
    bottom: 0;
    left: 50%;
    transform: translateY(50%) translateX(-50%)  skew(24deg,341deg) rotate(335deg);
  }
  .arrow-red{
    position: absolute;
    width: 17px;
    height: 17px;
    background-color: #fe172d;
    bottom: 0;
    left: 50%;
    transform: translateY(50%) translateX(-50%) skew(24deg,341deg) rotate(335deg);
  }
`;
export { HeroWrapper };

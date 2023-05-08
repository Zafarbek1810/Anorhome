import styled from "styled-components";

const BannerWrapper = styled.div`
  background-image: linear-gradient(
    90deg,
    #161a1d 36.48%,
    rgba(22, 26, 29, 0.6) 65.12%,
    rgba(22, 26, 29, 0) 100%
  );
  /* url("/images/banner.jpg"); */
  height: 100vh;
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;

  .imgCarousel {
    height: 100vh !important;
    overflow-y: hidden;
  }
  .cont {
    position: relative;
    z-index: 4;
  }
  .top-title {
    font-family: "Montserrat";
    font-style: normal;
    font-size: 20px;
    font-weight: 600;
    color: #fe152b;
  }
  .img-wrapper {
    position: absolute;
    width: 100%;
    height: 100%;
    &:after {
      background-image: linear-gradient(
        90deg,
        #161a1d 36.48%,
        rgba(22, 26, 29, 0.6) 65.12%,
        rgba(22, 26, 29, 0) 100%
      );
      z-index: 3;
      top: 0;
      left: 0;
      position: absolute;
      width: 100%;
      height: 100%;
      display: block;
      content: "";
    }

    img {
      width: 100%;
      height: 100vh;
      object-fit: cover;
      transform: translateX(200px);
    }

    .slick-dots.slick-dots-bottom {
      display: none !important;
    }
  }

  .carusel {
    width: 710px;
    /* height: auto !important; */

    .wrap {
      position: relative;
      height: 100vh;
      transform: translateY(25%);
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: center;
      padding-left: 10px;
      .title {
        font-family: "Mulish";
        font-style: normal;
        font-weight: 900;
        font-size: 72px;
        line-height: 76px;
        color: #ffffff;
        margin: 3px 0;
        text-transform: uppercase;
        span {
          background-image: linear-gradient(90deg, #ff6a00, #ee0979);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          font-weight: 900;
        }
      }

      .descr {
        width: 70%;
        font-family: "Mulish";
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 19px;
        color: #ffffff;
        margin-bottom: 60px;
      }

      /* ============== button hover  start======================== */

      .buttons {
        padding: 10px;
        position: relative;
        width: 30%;
        a {
          padding: 10px;
          display: inline-block;
          text-align: center;
          width: 100%;
          background-color: #fff;
          color: #fe152b;
          font-family: "Mulish";
          font-style: normal;
          font-weight: 600;
          font-size: 16px;
          line-height: 19px;
          transition: 0.3s;

          &::before {
            content: "";
            position: absolute;
            top: 0;
            left: 0;
            width: 3%;
            height: 100%;
            border: 1px solid #fe152b;
            border-right: none;
            transition: 0.3s;
          }

          &::after {
            content: "";
            position: absolute;
            top: 0;
            right: 0;
            width: 3%;
            height: 100%;
            border: 1px solid #fe152b;
            border-left: none;
            transition: 0.3s;
          }

          &:hover {
            background: #fe152b;
            color: #ffffff;
          }

          &:hover:after,
          &:hover:before {
            transition: width 350ms ease-in-out;
            width: 50%;
            border-color: #fe152b;
          }
        }
      }
    }

    /* =================== button hover end =================== */

    .slick-dots-bottom {
      position: absolute;
      bottom: 0;
      left: 0;
      justify-content: start;

      li {
        width: 45px;
        height: 4px !important;
        background: transparent;

        button {
          height: 4px !important;
          background: rgba(255, 255, 255, 0.2);
        }
      }
      li.slick-active {
        background: #2e3134;
        height: 4px !important;
        button {
          height: 4px !important;
          background: #fe152b !important;
          animation: dot 7s linear infinite;
        }
      }
    }
  }

  @keyframes dot {
    0% {
      width: 0;
    }
    100% {
      width: 100%;
    }
  }

  @media (max-width: 700px) {
    .carusel {
      width: 90% !important;
      overflow: hidden;

      .wrap {
        transform: translateY(20%);
        .title {
          font-size: 42px;
          line-height: 52px;
        }

        .descr {
          margin-bottom: 20px;
        }
      }
    }
  }

  @media (max-width: 600px) {
    .img-wrapper {
      img {
        transform: translateX(0px);
      }
    }
    .carusel {
      .title {
        font-size: 32px !important;
        line-height: 40px !important;
      }

      .descr {
        font-size: 14px !important;
        margin-bottom: 10px;
      }
    }
    .buttons {
      width: 70% !important;
    }
  }
`;

export { BannerWrapper };

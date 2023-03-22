import styled from "styled-components";

const BannerWrapper = styled.div`
  background-image: linear-gradient(
      90deg,
      #161a1d 36.48%,
      rgba(22, 26, 29, 0.6) 65.12%,
      rgba(22, 26, 29, 0) 100%
    ),
    url("/images/banner.jpg");
  height: 100vh;
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;

  .carusel {
    width: 500px;
    height: 90vh !important;

    .wrap {
      height: 100vh;
      transform: translateY(20%);
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: center;

      .title {
        font-family: "Figtree";
        font-style: normal;
        font-weight: 900;
        font-size: 70px;
        line-height: 84px;
        color: #ffffff;
        margin-bottom: 16px;
        span {
          background-image: linear-gradient(90deg, #ff6a00, #ee0979);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
      }

      .descr {
        font-family: "Figtree";
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 19px;
        color: #ffffff;
        margin-bottom: 60px;
      }

      /* ============== button hover  start======================== */

      .buttons {
        display: flex;
        flex-direction: column;
        justify-content: center;
        text-align: center;
        width: 100%;
      }

      .btn {
        font-family: "Figtree";
        font-weight: 500;
        font-size: 16px;
        color: #fff;
        cursor: pointer;
        max-width: 160px !important;
        padding: 15px 30px;
        position: relative;
        width: 100%;
        background: #fe152b;
      }

      .btn:hover {
        text-decoration: none;
      }

      .btn-4 {
        /* border: 1px solid; */
        overflow: hidden;
        position: relative;
      }
      .btn-4 span {
        z-index: 20;
      }
      .btn-4:after {
        background: #fff;
        content: "";
        height: 155px;
        left: -75px;
        opacity: 0.2;
        position: absolute;
        top: -50px;
        transform: rotate(35deg);
        transition: all 550ms cubic-bezier(0.19, 1, 0.22, 1);
        width: 50px;
        z-index: 10;
      }

      .btn-4:hover:after {
        left: 120%;
        transition: all 550ms cubic-bezier(0.19, 1, 0.22, 1);
      }
    }

    /* =================== button hover end =================== */

    .slick-dots-bottom {
      justify-content: start;

      li {
        width: 37px;
        height: 2px !important;
        background: transparent;

        button {
          height: 2px !important;
          background: rgba(255, 255, 255, 0.2);
        }
      }
      li.slick-active {
        background: #2e3134;
        height: 2px !important;
        button {
          height: 2px !important;
          background: #fe152b !important;
          animation: dot 3.3s linear infinite;
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
        .title {
          font-size: 42px;
          line-height: 52px;
        }

        .descr {
        }
      }
    }
  }
`;

export { BannerWrapper };

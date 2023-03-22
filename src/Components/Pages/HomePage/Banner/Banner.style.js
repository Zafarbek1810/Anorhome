import styled from "styled-components";

const BannerWrapper = styled.div`
  background-image: linear-gradient(
      90deg,
      #161a1d 46.48%,
      rgba(22, 26, 29, 0.6) 75.12%,
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

      a {
        font-family: "Figtree";
        font-style: normal;
        font-weight: 500;
        font-size: 16px;
        line-height: 19px;
        color: #ffffff;
        background: #fe152b;
        padding: 20px 45px !important;
        transition: 300ms;
        position: relative;

        svg {
          position: absolute;
          left: 0;
          top: 0;
          fill: none;
          stroke: #fff;
          stroke-dasharray: 150 480;
          stroke-dashoffset: 150;
          transition: 1s ease-in-out;
        }
      }
      a:hover {
        transition: 1s ease-in-out;
        background: #fe152b;
      }

      a:hover svg {
        stroke-dashoffset: -480;
      }

      a span {
        color: white;
        font-size: 18px;
        font-weight: 100;
      }
    }

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
          animation: dot 5s;
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

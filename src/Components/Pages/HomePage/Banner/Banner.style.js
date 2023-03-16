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
    height: 80vh !important;

    .wrap {
      height: 90vh;
      transform: translateY(10%);
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
        padding: 15px 40px !important;
      }
    }

    .slick-dots-bottom{
        justify-content: start;

        li{
            width: 37px;
            height: 2px !important;
            background: transparent;

            button{
                height: 2px !important;
                background: rgba(255, 255, 255, 0.2);
            }

        }
        li.slick-active{
            background: #2E3134;
            height: 2px !important;
            button{
                height: 2px !important;
                background: #fe152b !important;
                animation: dot 5s;
            }
        }
    }
  }

  @keyframes dot {
    0%{
        width: 0;
    }
    100%{
        width: 100%;
    }
  }

  .dots {
    display: flex;
    position: relative;
    div {
      width: 37px;
      height: 2px;
      background: rgba(255, 255, 255, 0.2);
      margin-right: 6px;
    }

    .active:after{
        content: "";
    display: block;
    right: 0;
    position: absolute;
    border: 1px solid #fe152b;
    transition: width 0.3s ease 0s;
    width: 0;
    }
    .active {
      background: #fe152b !important;
    }

    &:hover > .active:after{
        width: 100%;
        left: 0 !important;
    }
  }
`;

export { BannerWrapper };

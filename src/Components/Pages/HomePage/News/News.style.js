import styled from "styled-components";

const NewsHomeWrapper = styled.div`
  background: #fff;
  padding-top: 100px;
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
    padding: 100px 0;
    display: flex;
    gap: 30px;

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
        svg{
            margin-left: 10px;
        }
      }
    }
  }

  .btn{
    display: flex;
    justify-content: center;
    margin-bottom: 100px;
    a{
        font-family: 'Montserrat';
        font-style: normal;
        font-weight: 600;
        font-size: 18px;
        line-height: 29px;
        color: #D90429;
    }
  }

  //make responsive
    @media (max-width: 768px) {
        padding-top: 50px;
        .title{
            h3{
                font-size: 30px;
            }
        }
        .cards{
            flex-direction: column;
            gap: 50px;
            .card__img{
                height: 200px;
                span{
                    font-size: 14px;
                    padding: 5px 10px;
                }
            }
            .card__content{
                &__title{
                    font-size: 18px;
                }
                &__text{
                    font-size: 16px;
                }
                a{
                    font-size: 16px;
                }
            }
        }
        .btn{
            margin-bottom: 50px;

            a{
                font-size: 16px;
            }

        }
    }
    
`;

export default NewsHomeWrapper;

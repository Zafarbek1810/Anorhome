import styled from "styled-components";

const DetailStyle = styled.div`
  padding-left: 7.5%;

  .wrap {
    display: flex;
    gap: 30px;

    .left {
      width: 66%;
      padding: 100px 0;

      .top {
        display: flex;
        align-items: center;
        justify-content: space-between;

        h3 {
          font-family: "Montserrat", sans-serif;
          font-style: normal;
          font-weight: 700;
          font-size: 32px;
          line-height: 48px;
          color: #161a1d;
        }

        .date {
          display: flex;
          align-items: center;
          font-family: "Montserrat";
          font-style: normal;
          font-weight: 500;
          font-size: 16px;
          line-height: 20px;
          text-align: center;
          color: rgba(0, 0, 0, 0.4);
          svg {
            margin-right: 15px;
          }
        }
      }

      .subtitle {
        font-family: "Montserrat";
        font-style: normal;
        font-weight: 600;
        font-size: 16px;
        line-height: 22px;
        color: #000000;
      }

      img {
        width: 100%;
      }

      .text {
        font-family: "Montserrat";
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 22px;
        color: #2b2d42;
      }
    }

    .right {
      width: 33%;

      .cards {
        background: #161a1d;
        padding: 100px 40px 40px;

        .card {
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
            color: #FFFFFF;
          }

          &__text {
            font-family: "Montserrat";
            font-style: normal;
            font-weight: 400;
            font-size: 18px;
            line-height: 22px;
            color: #FFFFFF;
          }

          a {
            font-family: "Montserrat";
            font-style: normal;
            font-weight: 600;
            font-size: 18px;
            line-height: 29px;
            color: #D90429;
            display: flex;
            align-items: center;
            svg {
              margin-left: 10px;
            }
          }
        }
      }
    }
  }


  //make it responsive
    @media (max-width: 820px) {
        padding: 0 7.5%;
        .wrap {
            flex-direction: column;
            .left {
                width: 100%;
                padding: 50px 0;
                .top {
                    flex-direction: column;
                    align-items: flex-start;
                    h3 {
                        font-size: 24px;
                        line-height: 29px;
                    }
                    .date {
                        margin-top: 10px;
                    }
                }
                .subtitle {
                    margin-top: 20px;
                }
            }
            .right {
                width: 100%;
                .cards {
                    padding: 30px;
                    /* display: flex; */
                    /* gap: 30px; */
                    .card {
                        width: 100%;
                        margin-bottom: 50px;

                        .card__img {
                            height: 150px;
                            span {
                                font-size: 14px;
                                padding: 5px 10px;
                            }
                        }
                            
                        .card__content {
                            &__title {
                                font-size: 18px;
                                line-height: 22px;

                            }
                            &__text {
                                font-size: 14px;
                                line-height: 17px;
                            }
                            a {
                                font-size: 14px;
                                line-height: 17px;
                            }
                        }
                    }

                                
                    }
                }
            }
        }

`;

export default DetailStyle;

import styled from "styled-components";

const ServicesWrapper = styled.div`
  padding: 100px;
  background: #161a1d;
  p,
  span {
    margin: 0%;
  }
  .top {
    padding: 70px 0;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    border-bottom: 1px solid #ffffff;

    p {
      margin: 0;
      width: 30%;
      font-family: "Figtree";
      font-style: normal;
      font-weight: 700;
      font-size: 24px;
      line-height: 29px;
      letter-spacing: 2px;
      color: #ffffff;
    }

    h4 {
      margin: 0;
      width: 60%;
      text-align: end;
      font-family: "Figtree";
      font-style: normal;
      font-weight: 900;
      font-size: 56px;
      line-height: 67px;
      letter-spacing: 2px;
      color: #ffffff;
    }
  }

  .wrapper {
      .box {
        padding: 40px;
        display: flex;
        border-bottom: 1px solid #ffffff;
      .col-1 {
        width: 25%;
        position: relative;
        span {
          font-family: "Figtree";
          font-style: normal;
          font-weight: 800;
          font-size: 128px;
          line-height: 154px;
          letter-spacing: 0.1em;
          color: rgba(255, 255, 255, 0.2);
        }

        p {
          font-family: "Figtree";
          font-style: normal;
          font-weight: 800;
          font-size: 36px;
          line-height: 43px;
          letter-spacing: 0.1em;
          color: #ffffff;
          position: absolute;
          top: 25%;
          left: 0;
        }
      }
      .col-2 {
        width: 37.5%;
        height: 350px;
        padding: 0 30px;
        overflow: hidden;
        border-left: 1px solid #d9d9d9;
        border-right: 1px solid #d9d9d9;

        img {
          width: 100%;
          height: 150%;
          object-fit: cover;
        }
      }

      .col-3 {
        width: 37.5%;
        padding-left: 50px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        p {
          font-family: "Figtree";
          font-style: normal;
          font-weight: 400;
          font-size: 16px;
          line-height: 19px;
          color: #d1d1d1;
        }
        .btn {
          padding: 1rem;
          position: relative;
          a {
            padding: 1rem;
            display: inline-block;
            text-align: center;
            width: 100%;
            background-color: #fff;
            color: #fe152b;
            font-family: "Figtree";
            font-style: normal;
            font-weight: 500;
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
              border: 1px solid #fff;
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
              border: 1px solid #fff;
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
    }
  }
`;

export { ServicesWrapper };

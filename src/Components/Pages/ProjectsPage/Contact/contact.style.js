import styled from "styled-components";

const ContactWrappper = styled.div`
padding-bottom: 40px;
  background: #161a1d;
  padding-top:100px ;
  .title {
    border-top: 1px solid #fff;
    border-bottom: 1px solid #fff;

    h3 {
      font-family: 'Mulish';
font-style: normal;
font-weight: 700;
font-size: 40px;
line-height: 48px;
color: #FFFFFF;
    }
  }
  .contact {
    width: 100%;
    height: 100%;
    margin-top: 100px;
    display: flex;
    align-items: center;
    justify-content: center;
    &__info {
      background: #161a1d;
      width: 30%;
      padding: 40px;
    }
    &__box {
      padding-bottom: 40px;
      :nth-child(3) {
        padding-bottom: 0;
      }
      h4 {
        font-family: "Mulish";
        font-style: normal;
        font-weight: 600;
        font-size: 20px;
        color: #ffffff;
      }
      p {
        font-family: "Mulish";
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        color: #ffffff;
        span {
          color: #fe152b;
        }
      }
      .emailLink {
        font-family: 'Mulish';
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        color: #FFFFFF;

      }
    }
    &__icon {
      background-color: #fe152b;
      padding: 10px;
      border-radius: 50%;
    }
    &__map {
      background-color: #fff;
      width: 70%;
      height: 615px;
      iframe {
        height: 615px !important;
        border: none;
      }
    }
  }

  @media (max-width: 700px) {
    .contact{
      display: flex;
      flex-direction: column-reverse;
      &__info{
        width: 100%;
      }
      &__map{
        width: 100%;
        
      }
    }
  }
`;
export { ContactWrappper };

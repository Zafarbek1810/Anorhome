import styled from "styled-components";

const BurgerWrapper = styled.div`
  ul {
    padding: 0;
    li {
      a {
        color: #000;
        font-size: 18px !important;
        font-family: 'Figtree';
        font-weight: 700;
        transition: 300ms;

        &:hover {
          color: #f67f00 !important;
        }
      }
    }

    .callBtn {
        margin-top: 50px !important;
        width: 100% !important;
        display: block;
        border: 1px solid #000;
        a {
        color: #000 !important;
        font-family: 'Figtree';
        font-weight: 700;
        transition: 300ms;
        font-size: 18px !important;


        &:hover {
          color: #f67f00 !important;
        }
      }
    }
  }
`;

export { BurgerWrapper };

import styled from "styled-components";

const StyledContainer = styled.div`
  max-width: ${(props) => (props.width ? `${props.width}px` : "85vw")};
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  padding-left: 15px;
  padding-right: 15px;

  @media (max-width: 700px) {
    max-width: ${(props) => (props.width ? `${props.width}px` : "95vw")};
  }
`;

export { StyledContainer };

import styled from "styled-components";

const DemoStyle = styled.div`
    box-sizing: inherit;
    transition-property: all;
    transition-duration: 0.6s;
    transition-timing-function: ease;
    box-sizing: border-box;
    height: 100%;
    width: 100%;
    background: #e1332d !important;
    font-family: "Roboto", sans-serif;
    font-weight: 400;
    height: 100vh;
    
.buttons {
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: center;
  text-align: center;
  width: 100%;
}

  .btn {
    color: #fff;
    cursor: pointer;
    font-size: 16px;
    font-weight: 400;
    max-width: 160px !important;
    padding: 15px 40px;
    position: relative;
    text-decoration: none;
    text-transform: uppercase;
    width: 100%;
  }
  
  .btn:hover {
    text-decoration: none;
  }

  .btn-4 {
    border: 1px solid;
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
`;

export { DemoStyle };

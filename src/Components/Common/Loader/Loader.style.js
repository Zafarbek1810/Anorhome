import styled from "styled-components";

const LoaderWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  /* background: linear-gradient(90deg, #00b377, #00d68f); */
  background: #161A1D;
  box-shadow: inset 0px 0px 90px rgba(0, 0, 0, 0.5);
  margin: 0px;
  padding: 0px;
  z-index: 99999 !important;

  .demo {
    width: 130px;
    height: 132px;
    border-radius: 100%;
    position: absolute;
    top: 45%;
    left: calc(50% - 50px);
  }

  .logo{
    width: 300px;
    position: absolute;
    top: 80%;
    left: 50%;
    transform: translateX(-50%);
    svg{
      path:last-child{
        fill:white;
        /* display:none; */
      }
    }
  }
/* rgb(237,50,64) */
  .circle {
    width: 100%;
    height: 100%;
    position: absolute;
  }
  .circle .inner {
    width: 100%;
    height: 100%;
    border-radius: 100%;
    border: 10px solid rgba(237,50,64, 0.7);
    border-right: none;
    border-top: none;
    background-clip: padding;
    /* box-shadow: inset 0px 0px 10px rgba(237,50,64, 0.15); */
  }

  @-webkit-keyframes spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }

  @keyframes spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
  .circle:nth-of-type(0) {
    transform: rotate(0deg);
  }
  .circle:nth-of-type(0) .inner {
    -webkit-animation: spin 2s infinite linear;
    animation: spin 2s infinite linear;
  }

  .circle:nth-of-type(1) {
    transform: rotate(70deg);
  }
  .circle:nth-of-type(1) .inner {
    -webkit-animation: spin 2s infinite linear;
    animation: spin 2s infinite linear;
  }

  .circle:nth-of-type(2) {
    transform: rotate(140deg);
  }
  .circle:nth-of-type(2) .inner {
    -webkit-animation: spin 2s infinite linear;
    animation: spin 2s infinite linear;
  }

  .demo {
    -webkit-animation: spin 5s infinite linear;
    animation: spin 5s infinite linear;
  }
`;

export { LoaderWrapper };

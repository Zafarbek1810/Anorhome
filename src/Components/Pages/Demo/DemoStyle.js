import styled from "styled-components";

const DemoStyle = styled.div`
  .App {
  display: flex;
  flex-wrap: wrap;
}

.card {
  width: 100%;
  height: 50vh;
  overflow: scroll;
  display:flex;
}

.image {
  width: 33%;
  height: 100%;
  background-size: cover;
  transition: transform 0.3s ease-in-out;
  img{
    width: 100%;
  }
}

.top {
   width: 33%;
  height: 100px;
  background-color: lightblue;
}

.bottom {
   width: 33%;
  height: 100px;
  background-color: lightgreen;
}

`;

export { DemoStyle };

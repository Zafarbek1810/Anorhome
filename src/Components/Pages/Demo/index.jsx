import React from "react";
import MyLink from "../../Common/MyLink";
import { DemoStyle } from "./DemoStyle";
import Tilt from 'react-parallax-tilt';


const Demo = () => {
  return (
    <DemoStyle>
      <Tilt>
      <div >
        <h1>React Parallax Tilt 👀</h1>
      </div>
    </Tilt>
    </DemoStyle>
  );
};

export default Demo;

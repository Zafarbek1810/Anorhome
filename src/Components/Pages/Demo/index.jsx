import React from "react";
import MyLink from "../../Common/MyLink";
import { DemoStyle } from "./DemoStyle";

const Demo = () => {
  return (
    <DemoStyle>
      <section class="buttons">
          <MyLink to="/#" className="btn btn-4">
            <span>Hover</span>
          </MyLink>
      </section>
    </DemoStyle>
  );
};

export default Demo;

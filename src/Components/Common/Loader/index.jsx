import React from "react";
import { LoaderWrapper } from "./Loader.style";

const Loader = ({loading2}) => {
  return (
    <LoaderWrapper style={{
        transform: `translateY(${loading2 ? "100%" : 0})`,
        transition: "transform 0.5s ease-in-out",
      }}>
      <div class="demo" >
        <div class="circle">
          <div class="inner"></div>
        </div>
        <div class="circle">
          <div class="inner"></div>
        </div>
        <div class="circle">
          <div class="inner"></div>
        </div>
        <div class="circle">
          <div class="inner"></div>
        </div>
        <div class="circle">
          <div class="inner"></div>
        </div>
      </div>
    </LoaderWrapper>
  );
};

export default Loader;

import React from "react";
import HeaderWrapper from "./HeaderWrapper";
import MainHeader from "./sections/MainHeader/MainHeader";



const Header = ({ isFixed }) => {
  
  return (
    <HeaderWrapper>
      <MainHeader isFixed={isFixed}/>
    </HeaderWrapper>
  );
};

export default Header;

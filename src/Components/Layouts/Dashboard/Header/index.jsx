import React from 'react';
import {HeaderWrapper} from "./style";
import UserSvg from "../../../Common/Svgs/UserSvg";
import MyLink from "../../../Common/MyLink";
import {useContextSelector} from "use-context-selector";
import UserContext from "../../../../Context/UserContext";
import BottomIconSvg from "../../../Common/Svgs/BottomIconSvg";
import {useRouter} from "next/router";

const DashboardHeader = ({title, RefObj, setIsOpen}) => {
  const router = useRouter();
  const userName = useContextSelector(UserContext, ctx => ctx.state.user.name);
  const logoutContext = useContextSelector(UserContext, ctx => ctx.actions.logout);

  const handleLogout = () => {
    RefObj.current.textContent = `Ҳақиқатдан тизимдан чиқмоқчимисиз?`
    setIsOpen(true)
    new Promise((res, rej) => {
      RefObj.current.resolve = res;
      RefObj.current.reject = rej;
    })
      .then(() => {
        logoutContext();
        router.push("/login");
      })
      .catch((err) => {
        console.log(err);
      })
  }

  return (
    <HeaderWrapper>
      <div className="wrapper">
        <div className="left">
          <h3>{title}</h3>
        </div>
        <div className="right">
          <div className="lang">
            <p className="link active">УЗ</p>
            <p className="link">РУ</p>
          </div>
          <div className="user">
            <div className="exitBtn">
              <button className="exit"><BottomIconSvg/></button>
              <div className="bottom">
                <MyLink className="link" to="#" onClick={handleLogout}>Тизимдан чиқиш</MyLink>
              </div>
            </div>
            <p>{userName}</p><UserSvg/>
          </div>
        </div>
      </div>
    </HeaderWrapper>
  );
};

export default DashboardHeader;

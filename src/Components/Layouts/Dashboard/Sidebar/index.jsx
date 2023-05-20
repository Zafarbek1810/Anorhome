import React from 'react';
import {SidebarWarpper} from "./Sidebar.style";
import LogoSvg from "../../../Common/Svgs/Logo";
import MyLink from "../../../Common/MyLink";
import MaqolaAdd from "../../../Common/Svgs/MaqolaAdd";
import MaqolaList from "../../../Common/Svgs/MaqolaList";
import ExitSvg from "../../../Common/Svgs/ExitSvg";
import MediaXodimListSvg from "../../../Common/Svgs/MediaXodimListSvg";
import {useRouter} from "next/router";
import TibbiyXodimSvg from "../../../Common/Svgs/TibbiyXodimSvg";
import CreateDocSvg from "../../../Common/Svgs/CreateDocSvg";
import ArxivDocSvg from "../../../Common/Svgs/ArxivDocSvg";
import {useContextSelector} from "use-context-selector";
import UserContext from "../../../../Context/UserContext";
import SettingSvg from "../../../Common/Svgs/SettingSvg";

// TODO moderator media xodim qowiw ga kirib ketiwi mumkin,
//  har bir sahifada userni tekwiriwimiz mumkin keyinchalik,
//  hozircha muammo yo'q
const SidebarItems = [
  {
    title: "Мақола қўшиш",
    path: "/dashboard/addArticle",
    Svg: MaqolaAdd,
    role: ["MODERATOR"]
  },
  {
    title: "Мақолалар Рўйҳати",
    path: "/dashboard/listArticle",
    Svg: MaqolaList,
    role: ["MODERATOR"]
  },
  {
    title: "Медиа Ходимлар Рўйхати",
    path: "/dashboard/listMediaXodim",
    Svg: MediaXodimListSvg,
    role: ["ADMIN"]
  },
  {
    title: "Тиббий Ходимлар Рўйхати",
    path: "/dashboard/listTibbiyXodim",
    Svg: TibbiyXodimSvg,
    role: ["ADMIN"]
  },
  {
    title: "Барча Мақолалар Рўйхати",
    path: "/dashboard/listAllArticle",
    Svg: MaqolaList,
    role: ["ADMIN"]
  },
  {
    title: "Барча Ҳужжатлар Рўйхати",
    path: "/dashboard/listAllDocuments",
    Svg: ArxivDocSvg,
    role: ["ADMIN"]
  },
  {
    title: "Тиббий Ҳужжатлар Яратиш",
    path: "/dashboard/createDocument",
    Svg: CreateDocSvg,
    role: ["EMPLOYEE"]
  },
  {
    title: "Тиббий Ҳужжатлар Тарихи",
    path: "/dashboard/listDocument",
    Svg: ArxivDocSvg,
    role: ["EMPLOYEE"]
  },
  {
    title: "Созламалар",
    path: "/dashboard/setting",
    Svg: SettingSvg,
    role: ["ADMIN"]
  },
];

const Sidebar = ({RefObj, setIsOpen}) => {
  const router = useRouter();
  const userRole = useContextSelector(UserContext, ctx => ctx.state.user.role);
  const logoutContext = useContextSelector(UserContext, ctx => ctx.actions.logout);

  const NavList = SidebarItems.filter(({role}) => role.includes(userRole));

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

  const SpanLink = ({children}) => <a className="my-default-link active link">{children}</a>;

  return (
    <SidebarWarpper>
      <div className="wrapper">
        <div className="top">
          <MyLink className="logo" to="/">
            <LogoSvg/>
            <span>Бухоро вилоят ҳокимлиги соғлиқни сақлаш бошқармаси</span>
          </MyLink>

          <div className="links">
            {
              NavList.map(({title, Svg, path}, idx) => {
                let LinkOrSpan = router.pathname === path ? SpanLink : MyLink;
                return (
                  <LinkOrSpan
                    className={router.pathname === path ? "active" : "link"}
                    to={path}
                    key={idx}
                  >
                    <Svg/>
                    {title}
                  </LinkOrSpan>
                )
              })
            }

          </div>
        </div>
        <div className="bottom">
          <div className="exit">
            <MyLink className="link" to="#" onClick={handleLogout}> <ExitSvg/> Тизимдан чиқиш</MyLink>
          </div>

          <div className="created">
            Created by <MyLink className="crlink" to="https://everbestlab.com/" target="_blank">EverbestLab LLC</MyLink>
          </div>
        </div>
      </div>
    </SidebarWarpper>
  );
};

export default Sidebar;

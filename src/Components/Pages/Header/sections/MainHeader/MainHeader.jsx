import React, { useEffect, useState, useRef, useContext } from "react";
import MyLink from "../../../../Common/MyLink";
import GlobeSvg from "../../../../Common/Svgs/GlobeSvg";
import LogoSvg from "../../../../Common/Svgs/LogoSvg";
import BurgerList from "./Components/BurgerList";
import { HeaderContext } from "../../../../../Context/HeaderContext";
import { MainHeaderWrapper } from "./MainHeaderWrapper";
import useWindowDimensions from "../../../../../Hooks/useWindow";
import { Select } from "antd";
import { useRouter } from "next/router";
import { useContextSelector } from "use-context-selector";
import { ModalContext } from "../../../../../Context/ModalContext/Context";
import { useTranslation } from "react-i18next";
import i18next from "i18next";

export const LINKS = [
  {
    name: "Home",
    path: "/",
    id: 1,
  },
  {
    name: "Services",
    path: "/services",
    id: 2,
  },
  {
    name: "About Us",
    path: "/about",
    id: 3,
  },
  {
    name: "Projects",
    path: "/projects",
    id: 4,
  },
];

const MainHeader = ({ isFixed }) => {
  const { t, i18n } = useTranslation();
  const defaultLang = i18next.language;

  const [header, setHeader] = useState("header");
  const { burger, handleBurger, setBurger } = useContext(HeaderContext);
  const ref = useRef(null);
  const { width } = useWindowDimensions();
  const router = useRouter();

  useEffect(() => {
    const listenScrollEvent = () => {
      if (window.scrollY < 100) {
        return setHeader("header");
      } else if (window.scrollY > 100) {
        return setHeader("header2");
      }
    };
    const listenClickWindow = (event) => {
      const path = event.path || (event.composedPath && event.composedPath());
      if (
        path.includes(document.querySelector(".content.header")) ||
        path.includes(document.querySelector(".content.header2"))
      ) {
      } else {
        setBurger(false);
      }
    };

    window.addEventListener("scroll", listenScrollEvent);
    window.addEventListener("click", listenClickWindow);
    return () => {
      window.removeEventListener("scroll", listenScrollEvent);
      window.removeEventListener("click", listenClickWindow);
    };
  }, []);

  const handleChange = (e) => {
    localStorage.setItem("siteLang", e);
    i18n.changeLanguage(e);
  };

  const activePath = router.pathname;

  const setIsModalVisible = useContextSelector(
    ModalContext,
    (state) => state[1]
  );

  return (
    <MainHeaderWrapper ref={ref} isFixed={isFixed}>
      <div className={`content ${header}`}>
        <div className="logo">
          <MyLink to="/#" onClick={() => setBurger((p) => !p)}>
            <LogoSvg />
          </MyLink>
        </div>
        <div className="navbar-wrapper">
          <ul className="links_cont">
            <li>
              <NavLink activePath={activePath} to="/" className="item-links">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                activePath={activePath}
                to="/services"
                className="item-links"
              >
                Services
              </NavLink>
            </li>
            <li>
              <NavLink
                activePath={activePath}
                to="/about"
                className="item-links"
              >
                About Us
              </NavLink>
            </li>
            <li>
              <NavLink
                activePath={activePath}
                to="/projects"
                className="item-links"
              >
                Projects
              </NavLink>
            </li>
          </ul>
        </div>

        <div className="lang">
          <GlobeSvg />

          <Select
            placeholder="Lang"
            id="lang"
            value={defaultLang}
            getPopupContainer={trigger => trigger.parentElement}
            style={{
              width: 80,
            }}
            onChange={handleChange}
            filterOption={(input, option) =>
              (option?.label ?? "").includes(input)
            }
            filterSort={(optionA, optionB) =>
              (optionA?.label ?? "")
                .toLowerCase()
                .localeCompare((optionB?.label ?? "").toLowerCase())
            }
            options={[
              {
                value: "en",
                label: "ENG",
              },
              {
                value: "uz",
                label: "UZB",
              },
              {
                value: "ru",
                label: "RUS",
              },
            ]}
          />
        </div>
        {/* <div className="sel">
        <GlobeSvg />
          <select class="form-select" aria-label="Default select example">
            <option value="1">ENG</option>
            <option value="2">RUS</option>
            <option value="3">UZB</option>
          </select>
        </div> */}

        <div className="callBtn">
          <section class="buttons">
            <button
              className="btn btn-4"
              onClick={() => {
                setIsModalVisible((p) => !p);
              }}
            >
              <span>Call Me Now!</span>
            </button>
          </section>
        </div>

        <div
          onClick={handleBurger}
          className={`burger-btn ${burger ? "open" : "close"}`}
        >
          <span></span>
        </div>
        <BurgerList burger={burger} />
      </div>
    </MainHeaderWrapper>
  );
};

const NavLink = ({ children, className, to, activePath, ...props }) => {
  const active = activePath === to;
  return (
    <MyLink
      to={to}
      className={`item-links ${active ? "active-item-link" : ""}`}
      {...props}
    >
      {children}
    </MyLink>
  );
};

export default MainHeader;

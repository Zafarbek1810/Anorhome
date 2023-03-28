import React, { useEffect, useState, useRef, useContext } from "react";
import MyLink from "../../../../Common/MyLink";
import GlobeSvg from "../../../../Common/Svgs/GlobeSvg";
import BurgerList from "./Components/BurgerList";
import { HeaderContext } from "../../../../../Context/HeaderContext";
import { MainHeaderWrapper } from "./MainHeaderWrapper";
import useWindowDimensions from "../../../../../Hooks/useWindow";
import { Select } from "antd";
import { useRouter } from "next/router";

export const LINKS = [
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
    path: "/",
    id: 4,
  },
];
export const LINKS2 = [
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
    path: "/",
    id: 4,
  },
];

const MainHeader = ({ isFixed }) => {
  const [header, setHeader] = useState("header");
  const { burger, handleBurger, setBurger } = useContext(HeaderContext);
  const ref = useRef(null);
  const { width } = useWindowDimensions();
  const router = useRouter();

  useEffect(() => {
    const listenScrollEvent = () => {
      if (window.scrollY < 180) {
        return setHeader("header");
      } else if (window.scrollY > 180) {
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

  const handleChange = (value) => {
    console.log(`selected ${value}`);
  };
  const activePath = router.pathname;

  return (
    <MainHeaderWrapper ref={ref} isFixed={isFixed}>
      <div className={`content ${header}`}>
        <div className="logo">
          <MyLink to="/#" onClick={() => setBurger((p) => !p)}>
            <img
              src={
                width > 991
                  ? header !== "header"
                    ? `/images/logo.png`
                    : isFixed
                    ? `/images/logo.png`
                    : `/images/logo.png`
                  : `/images/logo.png`
              }
              width={100}
              height={72}
            />
          </MyLink>
        </div>
        <div className="navbar-wrapper">
          <ul className="links_cont">
            {router.pathname === "/" ? (
              LINKS.map(({ name, path, id }) => (
                <li key={id}>
                  <MyLink to={path}>
                    <div className="navs">
                      <p>{name}</p>
                    </div>
                  </MyLink>
                </li>
              ))
            ) : (
              <>
                <li>
                  <NavLink
                    activePath={activePath}
                    to="/"
                    className="item-links"
                  >
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
              </>
            )}
          </ul>
        </div>

        <div className="lang">
          <GlobeSvg />

          <Select
            defaultValue="en"
            style={{
              width: 80,
            }}
            onChange={handleChange}
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

        <div className="callBtn">
          <section class="buttons">
            <MyLink to="/#" className="btn btn-4">
              <span>Call Me Now!</span>
            </MyLink>
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

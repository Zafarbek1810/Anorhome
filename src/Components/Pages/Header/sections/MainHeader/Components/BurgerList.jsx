import React, {  useContext, useState } from "react";
import MyLink from "../../../../../Common/MyLink";
import { HeaderContext } from "../../../../../../Context/HeaderContext";
import { LINKS } from "../MainHeader";
import {BurgerWrapper} from "./style"
import GlobeSvg from "../../../../../Common/Svgs/GlobeSvg";
import { Select } from "antd";
import { useTranslation } from "react-i18next";
import { useContextSelector } from "use-context-selector";
import { ModalContext } from "../../../../../../Context/ModalContext/Context";

const BurgerList = ({ burger }) => {
  const [burgerDrop, setBurgerDrop] = useState(false);
  const { t, i18n } = useTranslation();

  const handleChange = (e) => {
    localStorage.setItem("siteLang", e);
    i18n.changeLanguage(e);
  };

  const setIsModalVisible = useContextSelector(
    ModalContext,
    (state) => state[1]
  );

  const { setBurger } = useContext(HeaderContext);
 
  return (
    <div className={`burger-list-wrapper ${burger ? "open" : "close"}`}>
        <BurgerWrapper>
      <ul className="burger-list">
        {LINKS.map(({ name, path, id }) => (
          <li key={id} className="burger-item">
              <MyLink
                onClick={() => setBurger(false)}
                to={path}
                className="burger-link"
              >
                {t(name)}
              </MyLink>
          </li>
        ))}
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
                label: "РУС",
              },
            ]}
          />
        </div>
        <div className="callBtn">
        <section class="buttons">
              <button onClick={() => {
                setIsModalVisible((p) => !p);
              }} className="btn btn-4">
                <span>{t("header.call-btn")}</span>
              </button>
            </section>
        </div>
      </ul>
    </BurgerWrapper>
    </div>
  );
};

export default BurgerList;

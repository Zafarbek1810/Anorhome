import React, {  useContext, useState } from "react";
import MyLink from "../../../../../Common/MyLink";
import { HeaderContext } from "../../../../../../Context/HeaderContext";
import { LINKS } from "../MainHeader";
import {BurgerWrapper} from "./style"
import GlobeSvg from "../../../../../Common/Svgs/GlobeSvg";
import { Select } from "antd";

const BurgerList = ({ burger }) => {
  const [burgerDrop, setBurgerDrop] = useState(false);
  const { setBurger } = useContext(HeaderContext);
  const handleChange = (value) => {
    console.log(`selected ${value}`);
  };
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
                {name}
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
      </ul>
    </BurgerWrapper>
    </div>
  );
};

export default BurgerList;

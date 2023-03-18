import React, {  useContext, useState } from "react";
import MyLink from "../../../../../Common/MyLink";
import { HeaderContext } from "../../../../../../Context/HeaderContext";
import { LINKS } from "../MainHeader";
import { BurgerWrapper } from "./style";

const BurgerList = ({ burger }) => {
  const [burgerDrop, setBurgerDrop] = useState(false);
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
                {name}
              </MyLink>
          </li>
        ))}
        <div className="callBtn">
          <MyLink to="/#">
            Call Me Now!</MyLink>
        </div>
      </ul>
    </BurgerWrapper>
    </div>
  );
};

export default BurgerList;

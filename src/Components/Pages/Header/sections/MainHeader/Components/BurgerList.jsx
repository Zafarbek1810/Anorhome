import React, {  useContext, useState } from "react";
import MyLink from "../../../../../Common/MyLink";
import { HeaderContext } from "../../../../../../Context/HeaderContext";
import { LINKS } from "../MainHeader";

const BurgerList = ({ burger }) => {
  const [burgerDrop, setBurgerDrop] = useState(false);
  const { setBurger } = useContext(HeaderContext);

  return (
    <div className={`burger-list-wrapper ${burger ? "open" : "close"}`}>
      <ul className="burger-list">
        {LINKS.map(({ name, path, id, dropMenu }) => (
          <li key={id} className="burger-item">
            {dropMenu ? (
              <>
                <div
                  onClick={() => setBurgerDrop((p) => !p)}
                  className="burger-link drop-link"
                >
                  <span>{name}</span>
                </div>
                <div
                  className="burger-drop-wrapper"
                  style={{
                    maxHeight: burgerDrop ? "200px" : 0,
                  }}
                >
                  <ul>
                    {dropMenu.map((item) => (
                      <li key={item.id}>
                        <MyLink to={item.path}>{item.title}</MyLink>
                      </li>
                    ))}
                  </ul>
                </div>
              </>
            ) : (
              <MyLink
                onClick={() => setBurger(false)}
                to={path}
                className="burger-link"
              >
                {name}
              </MyLink>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BurgerList;

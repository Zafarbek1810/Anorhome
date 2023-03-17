import React from "react";
import TopHeaderWrapper from "./TopHeaderWrapper";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faLinkedinIn,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import {
  faEnvelope,
  faLocationDot,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import MyLink from "../../../../Common/MyLink";
import Container from "../../../../Common/Container";

const TopHeader = () => {
  return (
    <TopHeaderWrapper>
        <div className="content">
          {/* <div className="left_side">
            <MyLink to="/">
              <FontAwesomeIcon icon={faTwitter} />
            </MyLink>
            <MyLink to="/">
              <FontAwesomeIcon icon={faLinkedinIn} />
            </MyLink>
            <MyLink to="/">
              <FontAwesomeIcon icon={faInstagram} />
            </MyLink>
          </div> */}
          <div className="right_side">
            <a href="tel:998999999999">
              <FontAwesomeIcon icon={faPhone} />
              +99 871-140-11-48
            </a>
            <a href="mailto:bobur@everbestlab.com">
              <FontAwesomeIcon icon={faEnvelope} />
              support@sunet.uz
            </a>
          </div>
        </div>
    </TopHeaderWrapper>
  );
};

export default TopHeader;

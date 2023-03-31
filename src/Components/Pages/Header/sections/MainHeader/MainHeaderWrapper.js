import styled from "styled-components";

const MainHeaderWrapper = styled.div`
  background-color: #fff;
  z-index: 1000;
  /* svg {
    color: #000 !important;
    flex-shrink: 0;
    width: 10px;
  } */

  .logo {
    flex-shrink: 0;
    color: #000;
    text-decoration: none;
    font-size: 24px;
    color: #000;
    letter-spacing: 10px;
    font-family: sans-serif;
    width: 14%;

    img {
      width: 100% !important;
      height: auto;
    }

    span {
      width: 80%;
      font-size: 24px;
      line-height: 18px;
      letter-spacing: 0.5px;
      font-weight: 900;
      color: #000;
      letter-spacing: 10px;
      font-family: sans-serif;
    }

    a {
      color: #000;
      text-decoration: none;
      font-family: sans-serif;
    }
  }

  .content {
    justify-content: space-between;
    .logo {
      width: 15%;
    }
    .navbar-wrapper {
      width: 60%;
    }
    .lang {
      width: 10%;
    }
    .callBtn {
      width: 15%;
    }
  }

  .header {
    background-color: transparent !important;
    position: fixed;
    left: 0;
    right: 0;
    transform: translateY(-10px);
    transition: transform 0.3s ease !important;
    z-index: 999;
    min-height: 100px !important;
    padding-top: 10px !important;

    .lang {
      display: flex;
      align-items: center;
      

     .ant-select-dropdown{
        border-radius:0 !important;
      }

      .ant-select-open {
        border: none !important;
      }
      .ant-select-selector {
        border: none !important;
        background-color: transparent !important;
        font-family: "Figtree" !important;
        font-style: normal !important;
        font-weight: 700 !important;
        font-size: 15px !important;
        line-height: 18px !important;
        color: #ffffff !important;
        &:active {
          color: red !important;
        }
      }
      .ant-select-arrow .anticon svg {
        color: #fff !important;
      }

      svg {
        width: 30px;
        fill: #fff;
      }
    }

    .callBtn {
      border: none;
      /* ============== button hover  start======================== */

      .buttons {
        display: flex;
        flex-direction: column;
        justify-content: center;
        text-align: center;
        width: 100%;
      }

      .btn {
        font-family: "Figtree";
        font-weight: 500;
        font-size: 16px;
        color: #fff;
        cursor: pointer;
        max-width: 160px !important;
        padding: 15px 15px;
        position: relative;
        width: 100%;
        background: #e5e5e5;
        border: none;
      }

      .btn:hover {
        text-decoration: none;
      }

      .btn-4 {
        /* border: 1px solid; */
        overflow: hidden;
        position: relative;
      }
      .btn-4 span {
        z-index: 20;
      }
      .btn-4:after {
        background: #fff;
        content: "";
        height: 155px;
        left: -75px;
        opacity: 0.9;
        position: absolute;
        top: -50px;
        transform: rotate(35deg);
        transition: all 550ms cubic-bezier(0.19, 1, 0.22, 1);
        width: 50px;
        z-index: 10;
      }

      .btn-4:hover:after {
        left: 120%;
        transition: all 550ms cubic-bezier(0.19, 1, 0.22, 1);
      }
    }

    /* =================== button hover end =================== */
  }

  .navs {
    p {
      color: #000;
      font-family: Nunito Sans;
      font-weight: 700;
      transition: 300ms;

      &:hover {
        color: #f67f00 !important;
      }
    }

    p.active{
      color: #fe152b !important;
    }

  }

  .header {
    position: fixed !important;
    top: 0;
    left: 0;
    right: 0;
    z-index: 5555;
    transition: 0.3s ease-out !important;
    height: 70px;
    font-family: sans-serif;

    a,
    button {
      color: black !important;
      border-color: black !important;
    }

    .logo {
      flex-shrink: 0;
      color: #000;
      text-decoration: none;
      font-size: 24px;
      color: #8073b2;
      letter-spacing: 10px;
      font-family: sans-serif;

      img {
        width: 100% !important;
      }

      a {
        color: #8073b2;
      }
    }

    .links_cont {
      
      a.active{
        color: #fe152b !important;
      }
      .navs {
        p {
          font-family: "Figtree";
          font-style: normal;
          font-weight: 400;
          font-size: 18px !important;
          line-height: 22px;
          color: #fff;
        }
      }

      .item-links{
        font-family: "Figtree";
          font-style: normal;
          font-weight: 400;
          font-size: 18px !important;
          line-height: 22px;
          color: #fff !important;
          margin-right: 40px;
          transition: 300ms;

          &:hover{
            color: #fe152b !important;
          }
      }
      .active-item-link{
        font-weight: 600 !important;
        color: #fe152b !important;
      }
    }

    .burger-btn {
      &:after,
      &:before {
        background-color: #fff;
      }

      span {
        background-color: #fff;
      }
    }
  }
  .header2 {
    background-color: #fff;
    position: fixed !important;
    top: 0;
    left: 0;
    right: 0;
    z-index: 5555;
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
    transition: 0.3s ease-out !important;
    height: 70px;
    font-family: sans-serif;

    .lang {
      display: flex;
      align-items: center;

      .ant-select-selector {
        border: none !important;
        background-color: transparent !important;
        font-family: "Figtree" !important;
        font-style: normal !important;
        font-weight: 700 !important;
        font-size: 15px !important;
        line-height: 18px !important;
        color: #000 !important;
      }
      .ant-select-arrow .anticon svg {
        color: #000 !important;
      }

      svg {
        width: 30px;
        fill: #000 !important;
      }
    }

    .callBtn {
      border: none;
      /* ============== button hover  start======================== */

      .buttons {
        display: flex;
        flex-direction: column;
        justify-content: center;
        text-align: center;
        width: 100%;
      }

      .btn {
        font-family: "Figtree";
        font-weight: 500;
        font-size: 16px;
        color: #fff !important;
        cursor: pointer;
        max-width: 160px !important;
        padding: 15px 30px;
        position: relative;
        width: 100%;
        background: #000;
        border: none !important;
      }

      .btn:hover {
        text-decoration: none;
      }

      .btn-4 {
        /* border: 1px solid; */
        overflow: hidden;
        position: relative;
      }
      .btn-4 span {
        z-index: 20;
      }
      .btn-4:after {
        background: #fff;
        content: "";
        height: 155px;
        left: -75px;
        opacity: 0.6;
        position: absolute;
        top: -50px;
        transform: rotate(35deg);
        transition: all 550ms cubic-bezier(0.19, 1, 0.22, 1);
        width: 50px;
        z-index: 10;
      }

      .btn-4:hover:after {
        left: 120%;
        transition: all 550ms cubic-bezier(0.19, 1, 0.22, 1);
      }
    }

    p {
      font-family: "Figtree";
      font-style: normal;
      font-weight: 400;
      font-size: 18px !important;
      line-height: 22px;
      /* identical to box height */

      color: #000 !important;
    }

    a,
    button {
      color: black !important;
      border-color: black !important;
    }

    .logo {
      flex-shrink: 0;
      color: #000;
      text-decoration: none;
      font-size: 24px;
      color: #8073b2;
      letter-spacing: 10px;
      font-family: sans-serif;

      a {
        color: #8073b2;
      }
    }

    .links_cont {
      
      a.active{
        color: #fe152b !important;
      }
      .navs {
        p {
          font-family: "Figtree";
          font-style: normal;
          font-weight: 400;
          font-size: 18px !important;
          line-height: 22px;
          color: #fff;
        }
      }

      .item-links{
        font-family: "Figtree";
          font-style: normal;
          font-weight: 400;
          font-size: 18px !important;
          line-height: 22px;
          color: #000 !important;
          margin-right: 40px;
          transition: 300ms;

          &:hover{
            color: #fe152b !important;
          }
      }
      .active-item-link{
        font-weight: 600 !important;
        color: #fe152b !important;
      }
    }

    .burger-btn {
      &:after,
      &:before {
        background-color: #000;
      }

      span {
        background-color: #222;
      }
    }
  }

  .content {
    padding: 0px 100px;
    display: flex;
    align-items: center;

    .links_cont {
      display: flex;
      justify-content: center;
      margin: 0;
      width: 70%;

      li {
        list-style: none;

        &:hover {
          p {
            color: #fe152b !important;
            position: relative;
          }
        }
      }
      p:after {
        content: "";
        display: block;
        height: 3px;
        left: 0%;
        top: 30px;
        position: absolute;
        background: #f67f00;
        transition: width 0.3s ease 0s;
        width: 0;
      }

      .navs {
        flex-shrink: 0;
        position: relative;
        padding: 30px 20px;
        display: flex;

        &:hover {
          .arrow-svg {
            left: 0;
            color: white;
          }
        }

        p {
          font-size: 13px;
          line-height: 1.2;
        }
      }

      a {
        text-decoration: none;
      }

      p {
        margin: 0;
        padding: 0;
      }
    }
  }

  // --------------------------- BURGER STYLES ----------------------------------
  .getBtn {
    cursor: pointer;
  }
  .header2 {
    /* .getBtn {
      &:hover {
        color: #fff !important;
        background: var(--primary);
        border-color: var(--primary) !important;
      }
    } */

    .dropdown {
      background-color: #fff;
      box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;

      ul {
        padding: 0;
      }

      &__link {
        color: #000;
        font-family: sans-serif;
      }
    }
  }

  .burger-btn {
    display: none;
    position: relative;

    cursor: pointer;
    width: 40px;
    height: 40px;

    &:after,
    &:before {
      display: block;
      position: absolute;
      width: 100%;
      height: 4px;
      left: 0;
      background-color: #000;

      content: "";
      transition: transform 0.3s ease;
    }

    &:before {
      top: 5px;
      transform-origin: left top;
    }

    &:after {
      transform-origin: left bottom;
      bottom: 5px;
    }

    span {
      width: 100%;
      height: 4px;
      background-color: #000;
      transition: transform 0.3s ease;
    }
  }

  .burger-list-wrapper {
    display: none;
  }

  @media (max-width: 1024px) {
    .callBtn {
      display: none;
    }
    .lang {
      display: none !important;
    }
    .logo {
      width: 30% !important;
    }
    li {
      list-style: none;
    }
    a {
      text-decoration: none;
    }
    .content {
      padding: 0 30px;
      background-color: #fff;
    }
    .header {
      /* background-color: transparent; */
      padding-top: 35px;
    }

    .header2 {
      .burger-btn {
        display: flex;
        align-items: center;
        justify-content: center;

        span {
          background-color: #000 !important;
        }
        &::before {
          background-color: #000 !important;
        }
        &::after {
          background-color: #000 !important;
        }
      }
    }

    .navbar-wrapper {
      display: none !important;
    }

    .burger-btn {
      display: flex;
      align-items: center;
      justify-content: center;

      span {
        background-color: #fff !important;
      }
      &::before {
        background-color: #fff !important;
      }
      &::after {
        background-color: #fff !important;
      }
    }

    .getBtn {
      display: none;
    }

    .burger-list-wrapper {
      height: calc(100vh - 59px);
      position: absolute;
      top: 100%;
      left: 0;
      display: flex;
      flex-direction: column;
      background-color: #fff;
      padding: 15px;
      min-width: 300px;
      box-shadow: rgba(0, 0, 0, 0.15) 3px 3px 5px;

      a {
        color: #222;
      }

      overflow: auto;

      .burger-list {
        display: flex;
        flex-direction: column;
      }

      .burger-link {
        cursor: pointer;
        display: block;
        color: #222;
        padding: 6px 0;
        font-size: 15px;

        &:hover {
          color: var(--primary) !important;
        }
      }

      .burger-getBtn {
        border-color: #222;
        justify-content: center;
        color: #222;
      }

      .drop-link {
        span {
          display: inline-block;
          margin-right: 10px;
        }

        svg {
          transition: all 0.3s ease;
        }
      }

      .burger-drop-wrapper {
        overflow: hidden;
        transition: max-height 0.3s ease;

        li {
          margin-left: 15px;

          a {
            cursor: pointer;
            display: block;
            color: #222;
            padding: 6px 0;
            font-size: 15px;

            &:hover {
              color: var(--primary) !important;
            }
          }
        }
      }

      transition: left 0.5s ease;

      &.close {
        left: -100%;
      }

      &.open {
        left: 0;
      }
    }
  }

  @media (max-width: 700px) {
    .logo {
      width: 50% !important;
    }
  }
`;

export { MainHeaderWrapper };

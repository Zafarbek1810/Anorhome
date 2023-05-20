import React, {useRef, useState} from 'react';
import {Wrapper} from "./style";
import Sidebar from "./Sidebar";
import DashboardHeader from "./Header";
import ConfirmModal from "../../Molecules/ConfirmModal";
import {ModalContextProvider} from "../../../Context/ModalContext";

const DashboardLayout = ({children, title}) => {
  const RefObj = useRef({resolve(){}, reject(){}});
  const [modalIsOpen, setIsOpen] = useState(false);

  return (
    <>
      <Wrapper>
        <div className="layout__sidebar">
          <Sidebar RefObj={RefObj} setIsOpen={setIsOpen}/>
        </div>
        <div className="layout__right">
          <div className="layout__top">
            <DashboardHeader title={title} RefObj={RefObj} setIsOpen={setIsOpen}/>
          </div>
          <main className="layout__main">
            {children}
          </main>
        </div>
      </Wrapper>
      <ModalContextProvider
        RefObj={RefObj}
        modalIsOpen={modalIsOpen}
        setIsOpen={setIsOpen}
      >
        <ConfirmModal>
          {RefObj.current.textContent}
        </ConfirmModal>
      </ModalContextProvider>
    </>
  );
};

export default DashboardLayout;

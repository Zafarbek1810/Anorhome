import React from "react"; 
import { useContextSelector } from "use-context-selector";
import { Modal } from "antd";
import { ModalWrapper } from "./ContactModal.style";
import { ModalContext } from "../../../Context/ModalContext/Context";


function MyModal({ children }) {
  const [isModalVisible, setIsModalVisible] = useContextSelector(
    ModalContext,
    (state) => state,
  );
  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <ModalWrapper>
      <Modal visible={isModalVisible} onOk={handleOk} onCancel={handleCancel} width={600} >
        {children}
      </Modal>
    </ModalWrapper>
  );
}

export default MyModal;

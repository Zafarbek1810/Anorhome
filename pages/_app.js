import { useEffect } from 'react';
import { HeaderProvider } from '../src/Context/HeaderContext'
import '../styles/globals.css'
import Modal from "../src/Components/Common/ContactModal"
import FormModal from "../src/Components/Common/ContactModal/FormModal"
import "aos/dist/aos.css";
import { ModalProvider } from '../src/Context/ModalContext/Context'; 


function MyApp({ Component, pageProps }) {
  

  return (
    <HeaderProvider>
    <Component {...pageProps} />
      <ModalProvider>
        <Modal>
          <FormModal />
        </Modal>
      </ModalProvider>
    </HeaderProvider>

  )

}

export default MyApp

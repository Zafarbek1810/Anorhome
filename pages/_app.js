import { HeaderProvider } from '../src/Context/HeaderContext'
import '../styles/globals.css'
import Modal from "../src/Components/Common/ContactModal"
import FormModal from "../src/Components/Common/ContactModal/FormModal"
import "aos/dist/aos.css";
import { ModalProvider } from '../src/Context/ModalContext/Context'; 
import Script from 'next/script'


function MyApp({ Component, pageProps }) { 

  return (
    <HeaderProvider>
    <Component {...pageProps} />
      <ModalProvider>
        <Modal>
          <FormModal />
        </Modal>
      </ModalProvider>
          <Script src="//code.jivosite.com/widget/guz7xA8JEU" async /> 
    </HeaderProvider>

  )

}

export default MyApp

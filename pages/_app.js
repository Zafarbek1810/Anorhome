import { HeaderProvider } from '../src/Context/HeaderContext'
import '../styles/globals.css'
import Modal from "../src/Components/Common/ContactModal"
import FormModal from "../src/Components/Common/ContactModal/FormModal"
import "aos/dist/aos.css";
import { ModalProvider } from '../src/Context/ModalContext/Context';
import MyTawk from '../src/Components/Common/Tawk';


function MyApp({ Component, pageProps }) {
  return (
    <HeaderProvider>
      <ModalProvider>
        <Component {...pageProps} />
    <MyTawk />
        <Modal>
          <FormModal />
        </Modal>
      </ModalProvider>
    </HeaderProvider>

  )

}

export default MyApp

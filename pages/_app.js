import { useEffect } from 'react';
import { HeaderProvider } from '../src/Context/HeaderContext'
import '../styles/globals.css'
import Modal from "../src/Components/Common/ContactModal"
import FormModal from "../src/Components/Common/ContactModal/FormModal"
import "aos/dist/aos.css";
import { ModalProvider } from '../src/Context/ModalContext/Context';
import MyTawk from '../src/Components/Common/Tawk';


function MyApp({ Component, pageProps }) {
 

  useEffect(()=>{
    (function(d, w, c) {
      w.ChatraID = 'PBvLdNYPuo2dux3ib';
      var s = d.createElement('script');
      w[c] = w[c] || function() {
          (w[c].q = w[c].q || []).push(arguments);
      };
      s.async = true;
      s.src = 'https://call.chatra.io/chatra.js';
      if (d.head) d.head.appendChild(s);
  })(document, window, 'Chatra');
},[])

  return (
    <HeaderProvider>
<<<<<<< HEAD
    <Component {...pageProps} />
    {/* <MyTawk /> */}
=======
      <ModalProvider>
        <Component {...pageProps} />
    <MyTawk />
        <Modal>
          <FormModal />
        </Modal>
      </ModalProvider>
>>>>>>> 2f0bbd565f2385304c6dcf6b5d285398025864fd
    </HeaderProvider>

  )

}

export default MyApp

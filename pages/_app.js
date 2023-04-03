import { HeaderProvider } from '../src/Context/HeaderContext'
import '../styles/globals.css'
import Modal from "../src/Components/Common/ContactModal"
import FormModal from "../src/Components/Common/ContactModal/FormModal"
import "aos/dist/aos.css";
import { ModalProvider } from '../src/Context/ModalContext/Context'; 
import Script from 'next/script'
import { useEffect, useLayoutEffect, useState } from 'react';
import Loader from '../src/Components/Common/Loader';


function MyApp({ Component, pageProps }) { 
  const [loading, setLoading] = useState(true)
  const [loading2, setLoading2] = useState(false)

  // useLayoutEffect(() => {
  //   setTimeout(() => {
  //     setLoading(false)
  //   }, 2000)
  // }, [])

  useEffect(() => {
    setTimeout(()=>{
      setTimeout(() => {
        setLoading(false);
      }, 1000);
      setLoading2(true);
    }, 1500)
  }, [])

  return (
    <HeaderProvider>
    <Component {...pageProps} />
    {loading && <Loader loading2={loading2}/>}
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

import { useEffect } from 'react';
import Script from 'next/script';
import i18n from "i18next";
import { useTranslation, initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import HttpApi from "i18next-http-backend";
import Modal from "../src/Components/Common/ContactModal";
import { HeaderProvider } from '../src/Context/HeaderContext';
import { ModalProvider } from '../src/Context/ModalContext/Context';
import { useState } from 'react';
import Loader from '../src/Components/Common/Loader';
import FormModal from "../src/Components/Common/ContactModal/FormModal";
import AOS from "aos"
import "aos/dist/aos.css";
import 'react-toastify/dist/ReactToastify.css';
import '../styles/globals.css'
import { useRouter } from 'next/router';
import { ToastContainer } from 'react-toastify';
import { UserContextProvider } from '../src/Context/UserContext';
import 'react-loading-skeleton/dist/skeleton.css'

if (typeof window === undefined) {
  var window = {};
}

const lang = window?.localStorage?.getItem("siteLang") || "ru";
console.log(lang);

i18n
  .use(initReactI18next)
  .use(LanguageDetector)
  .use(HttpApi)
  .init({
    supportedLngs: ["ru", "en", "uz"],
    lng: lang,
    fallbackLng: "ru",
    detectionL: {
      order: ["htmlTag", "cookie", "localStorage", "subdomain", "path"],
      caches: ["cookie"],
    },
    ns: ["translation"],
    backend: {
      loadPath: "/assets/locales/{{lng}}/{{ns}}.json",
    },
    react: { useSuspense: true },
  });


function MyApp({ Component, pageProps }) {
  const [loading, setLoading] = useState(true)
  const [loading2, setLoading2] = useState(false)
  const [jivo, setJivo] = useState(false)
  const router = useRouter();
  // const [scrollPosition, setScrollPosition] = useState(0);

  // useLayoutEffect(() => {
  //   setTimeout(() => {
  //     setLoading(false)
  //   }, 2000)
  // }, [])

  // console.log(window);

  // useEffect(() => {
  //   const handleRouteChange = () => {
  //     setScrollPosition(window.scrollY);
  //   };

  //   router.events.on('routeChangeStart', handleRouteChange);

  //   return () => {
  //     router.events.off('routeChangeStart', handleRouteChange);
  //     console.log();
  //   };
  // }, [router.events]);

  // useEffect(() => {
  //   window.scrollTo(0, scrollPosition);
  // }, [scrollPosition]);

useEffect(() => {
    AOS.init({ duration: 1500, once: true  });
    AOS.refresh();
  }, [router.pathname]);

  useEffect(()=>{
    setTimeout(() => {
      setJivo(true)
    }, 15000);
  }, [])

  useEffect(() => {
    setTimeout(() => {
      setTimeout(() => {
        setLoading(false);
      }, 1500);
      setLoading2(true);
    }, 1500)
  }, [])

  const {
    i18n: { language },
    i18n,
  } = useTranslation();

  useEffect(() => {
    i18n.changeLanguage(localStorage.getItem("siteLang")) || "ru";
  }, []);

  return (
    <UserContextProvider>
    <ModalProvider>
      <HeaderProvider>
        <Component {...pageProps} />
        {loading && <Loader loading2={loading2} />}
        <ToastContainer
            position="top-right"
            autoClose={3000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
          />
        <Modal>
          <FormModal />
        </Modal> 
        {jivo && <Script src="//code.jivo.ru/widget/dqFEUXxryd" async />}
      </HeaderProvider>
    </ModalProvider>
    </UserContextProvider>

  )

}

export default MyApp

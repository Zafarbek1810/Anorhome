import { useEffect } from 'react';
import Script from 'next/script';
import i18n from "i18next";
import { useTranslation, initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import HttpApi from "i18next-http-backend";
import Modal from "../src/Components/Common/ContactModal";
import { HeaderProvider } from '../src/Context/HeaderContext';
import { ModalProvider } from '../src/Context/ModalContext/Context'; 
import {  useState } from 'react';
import Loader from '../src/Components/Common/Loader';
import FormModal from "../src/Components/Common/ContactModal/FormModal";

import "aos/dist/aos.css";

import '../styles/globals.css'

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

  const {
    i18n: { language },
    i18n,
  } = useTranslation();

  useEffect(() => {
    i18n.changeLanguage(localStorage.getItem("siteLang")) || "ru"; 
  }, []);

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

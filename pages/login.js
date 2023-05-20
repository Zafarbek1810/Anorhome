import React from 'react';
// import {serverSideTranslations} from 'next-i18next/serverSideTranslations';
import Head from 'next/head';
import LoginPage from "../src/Components/Pages/LoginPage";

const Login = () => {
  return (
    <>
      <Head>
        <meta name="description" content="Соғлиқни сақлаш - давлат сиёсатининг енг муҳим йўналишларидан."/>
        <meta name="viewport" content="width=device-width, user-scalable=no"></meta>
        <link rel="shortcut icon" href="/favicon.ico"/>
        <title>ANORHOME</title>
      </Head>
      <LoginPage/>
    </>
  );
};

export default Login;

// export async function getStaticProps({locale}) {
//   return {
//     props: {
//       ...(await serverSideTranslations(locale, ['common'])),
//     },
//   };
// }

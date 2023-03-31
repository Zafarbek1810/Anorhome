import { useEffect } from 'react';
import { HeaderProvider } from '../src/Context/HeaderContext'
import '../styles/globals.css'

  
import "aos/dist/aos.css";
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
    <Component {...pageProps} />
    {/* <MyTawk /> */}
    </HeaderProvider>

  )
  
}

export default MyApp

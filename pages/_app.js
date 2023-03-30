import { HeaderProvider } from '../src/Context/HeaderContext'
import '../styles/globals.css'

  
import "aos/dist/aos.css";
import MyTawk from '../src/Components/Common/Tawk';


function MyApp({ Component, pageProps }) {
  return (
    <HeaderProvider>
    <Component {...pageProps} />
    <MyTawk />
    </HeaderProvider>

  )
  
}

export default MyApp

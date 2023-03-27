import { HeaderProvider } from '../src/Context/HeaderContext'
import '../styles/globals.css'

  
import "aos/dist/aos.css";


function MyApp({ Component, pageProps }) {
  return (
    <HeaderProvider>
    <Component {...pageProps} />
    </HeaderProvider>

  )
  
}

export default MyApp

import '../styles/globals.css'
import Gnb from "@components/gnb";

function MyApp({ Component, pageProps }) {
  
  return (
    <div>
      <Gnb/>
      <Component {...pageProps} />
    </div>
  )
}

export default MyApp

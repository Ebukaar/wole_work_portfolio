import "@/styles/globals.css";
import Navbar from "@/components/Navbar";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import Footer from "@/components/Footer";
config.autoAddCss = false;


export default function App({ Component, pageProps }) {
  return (
    <>
      <Navbar />

      {/* <Component {...pageProps} />; */}
      <Footer/>
    </>
  );
}


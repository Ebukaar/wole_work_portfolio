import "@/styles/globals.css";
import Navbar from "@/components/Navbar";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import Footer from "@/components/Footer";
import { useRouter } from "next/router";
import '../styles/App.css';
config.autoAddCss = false;

export default function App({ Component, pageProps }) {
  const router = useRouter();

  //Check if the current route is the login page
  const isLoginPage = router.pathname === "/login";

  return (
    <>
      {!isLoginPage && <Navbar />}
      <Component {...pageProps} />
      {!isLoginPage && <Footer />}
    </>
  );
}

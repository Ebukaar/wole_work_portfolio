import "@/styles/globals.css";
import Navbar from "@/components/Navbar";
import FirebaseClient from "./firebase/config";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Navbar />
      <FirebaseClient/>
      {/* <Component {...pageProps} />; */}
    </>
  );
}


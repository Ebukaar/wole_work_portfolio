import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { auth } from "../firebase/config";
import Spinner from '../components/spinner'; 

const withAuth = (Component) => {
  return (props) => {
    const router = useRouter();
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
      const unsubscribe = auth.onAuthStateChanged((user) => {
        if (!user) {
          router.push("/login");
        } else {
          setIsLoading(false); // User is authenticated, stop loading
        }
      });

      // Cleanup the listener on unmount
      return () => unsubscribe();
    }, [router]);

    // Render a spinner if it's loading
    if (isLoading) {
      return <Spinner />; 
    }

    return <Component {...props} />;
  };
};

export default withAuth;

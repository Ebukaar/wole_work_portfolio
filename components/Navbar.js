import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { auth } from '../firebase/config.js';
import LogoutButton from "./LogoutButton.js";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [user, setUser] = useState(null);

  const router = useRouter();

  // This effect runs once when the component mounts and sets up an auth state observer
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setUser(user); // User is signed in, update the state
      } else {
        setUser(null); // User is signed out, update the state
      }
    });

    // Cleanup the observer when the component unmounts
    return () => unsubscribe();
  }, []);

  return (
    <nav className="bg-gray-800 text-white py-4 overflow-visible">
      <div className="container mx-auto flex justify-between items-center px-6 md:px-0"> 
        <div className="text-2xl font-medium text-teal pl-6"> 
          LABIRAN & ASSOCIATES
        </div>

        <button
          className="md:hidden flex items-center px-4 py-3 border rounded text-white border-white" 
          onClick={() => setIsSidebarOpen(true)}
        >
          <svg
            className="fill-current h-4 w-4"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>

        <ul className="hidden md:flex items-center font-light space-x-4 px-1.5">
            {/* For larger Screens */}
          <li className="group relative">
            <a href="#" className="relative inline-block transition">
              Home
            <span className="absolute h-0.5 bg-white w-full left-0 bottom-0 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
            </a>
          </li>
          <li className="group relative">
            <a href="#" className="relative inline-block transition">
              About
            <span className="absolute h-0.5 bg-white w-full left-0 bottom-0 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>  
            </a>
          </li>
          <li className="group relative">
            <a href="#" className="relative inline-block transition">
              Gallery
              <span className="absolute h-0.5 bg-white w-full left-0 bottom-0 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>    
            </a>
          </li>
          <li className="relative group">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white bg-transparent hover:text-hover-yellow px-1 py-1 transition focus:outline-none align-middle m-0 p-0"
            >
              Work
            </button>
            {isOpen && (
              <ul className="absolute left-2 mt-0 w-30 space-y-1.5 bg-gray-800 text-white rounded shadow-lg border border-gray-700 z-10">
                <li>
                  <a
                    href="#"
                    className="block px-4 py-2 hover:text-hover-yellow transition"
                  >
                    Projects
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block px-4 py-2 hover:text-hover-yellow transition"
                  >
                    Articles
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block px-4 py-2 hover:text-hover-yellow transition"
                  >
                    PDFs
                  </a>
                </li>
              </ul>
            )}
          </li>
          <li className="group relative" >
            <a href="#" className="relative inline-block transition">
              Contact Us
              <span className="absolute h-0.5 bg-white w-full left-0 bottom-0 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>  
            </a>
          </li>
          {user && ( // This checks if a user is authenticated before rendering the LogoutButton
            <li>
              <LogoutButton />
            </li>
          )}
        </ul>


        {isSidebarOpen && (
          <div className="fixed top-0 right-0 w-1/2 h-full bg-gray-800 text-white z-20">
            <button
              className="absolute top-0 right-0 p-6 text-4xl"
              onClick={() => setIsSidebarOpen(false)}
            >
              &times;
            </button>
            <ul className="flex flex-col justify-between h-4/5 mt-20 pr-5 pl-10 text-lg">
                {/* For medium and small screens */}
              <li>
                <a href="#" className="transition">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className=" transition">
                  About
                </a>
              </li>
              <li>
                <a href="#" className=" transition">
                  Gallery
                </a>
              </li>
              <li>
                <a href="#" className=" transition">
                  Projects
                </a>
              </li>
              <li>
                <a href="#" className=" transition">
                  Articles
                </a>
              </li>
              <li>
                <a href="#" className=" transition">
                  PDFs
                </a>
              </li>
              <li>
                <a href="#" className=" transition">
                  Contact Us
                </a>
              </li>
              {user && ( // This checks if a user is authenticated before rendering the LogoutButton
              <li className="mt-6">
                <LogoutButton setIsSidebarOpen={setIsSidebarOpen} /> {/* Passing setIsSidebarOpen to close sidebar on logout */}
              </li>
            )}
            </ul>
          </div>
        )}

        {isSidebarOpen && (
          <div
            className="fixed top-0 left-0 w-full h-full bg-black opacity-50 z-10"
            onClick={() => setIsSidebarOpen(false)}
          ></div>
        )}
      </div>
    </nav>
  );
}

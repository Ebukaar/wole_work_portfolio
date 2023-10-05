import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

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

        <ul className="hidden md:flex items-center font-light space-x-4">
            {/* For larger Screens */}
          <li>
            <a href="#" className="hover:text-hover-yellow transition">
              Home
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-hover-yellow transition">
              About
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-hover-yellow transition">
              Gallery
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
          <li>
            <a href="#" className="hover:text-hover-yellow transition">
              Contact Us
            </a>
          </li>
        </ul>


        {isSidebarOpen && (
          <div className={`fixed top-0 right-0 w-1/2 h-full bg-gray-800 text-white z-20 transform transition-transform ease-in-out ${isSidebarOpen ? 'translate-x-0' : 'translate-x-full'}`}>
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

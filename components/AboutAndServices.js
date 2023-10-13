import React from "react";

function AboutAndServices() {
  return (
    // <div className="container mx-auto px-6 md:px-0 py-12 bg-gray-800">
    <div className="mx-auto px-6 md:px-0 py-12 bg-gray-800">
      {/* Card-like container for About and Services - NEW */}
      {/* <div className="py-6 px-8 bg-gray-900 shadow-xl rounded-lg"> */}
      {/* {" "} */}
      {/* Added shadow-xl and rounded-lg */}
      {/* About Us Section */}
      <div className="mb-16 text-center">
        <h2 className="text-3xl font-medium text-white mb-6 relative group hover:underline">
          <span className="relative inline-block">
            About Us
            <span className="absolute h-0.5 bg-white w-full left-0 bottom-0 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
          </span>
        </h2>
        <p className="text-white">
          We are professional engineers organised to provide comprehensive and
          integrated services in Civil and Structural Engineering. Our Principal
          Consultants have acquired a wealth of experience and specialised
          knowledge of various engineering structures and processes, ranging
          through the from conceptual, design and construction phases. The
          company uses analytical skills, flexibility and imagination to produce
          integral designs that are innovative and financially considerate.
          Inherent in our approach are professional objectivity and
          thoroughness.
        </p>
      </div>
      {/* Services Section */}
      <div className="mb-16 text-center">
        <h2 className="text-3xl font-medium text-white mb-6 relative group hover:underline">
          <span className="relative inline-block">
            Our Services
            <span className="absolute h-0.5 bg-white w-full left-0 bottom-0 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
          </span>
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 px-5 shadow-gray-700/50">
        {/* First Card */}
        <div className="bg-gray-700 shadow-2xl rounded-xl p-6">
          <div className="mb-4">
            {/* Replace with your image component */}
            {/* <img src="path_to_your_image" alt="Service 1" /> */}
          </div>
          <h3 className="text-xl font-medium text-white mb-2 relative group hover:underline">
            <span className="relative inline-block">
              DESIGN STUDIES
              {/* Underline Element */}
              <span className="absolute h-0.5 bg-white w-full left-0 bottom-0 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
            </span>
          </h3>
          <ul className="text-white custom-list-style">
            <li className="hover:text-gray-500 transition">
              Conceptual Design
            </li>
            <li className="hover:text-gray-500 transition">
              Technical Feasibility
            </li>
            <li className="hover:text-gray-500 transition">
              Economic Feasibility
            </li>
            <li className="hover:text-gray-500 transition">
              Research and Development
            </li>
            <li className="hover:text-gray-500 transition">Detailed Design</li>
            <li className="hover:text-gray-500 transition">
              Specification Writing
            </li>
            <li className="hover:text-gray-500 transition">
              Preparation of Contract Documents
            </li>
          </ul>
        </div>

        {/* Second Card */}
        <div className="bg-gray-700 shadow-2xl rounded-xl p-6">
          <div className="mb-4">
            {/* Replace with your image component */}
            {/* <img src="path_to_your_image" alt="Service 2" /> */}
          </div>
          <h3 className="text-xl font-medium text-white mb-2 relative group hover:underline">
            <span className="relative inline-block">
              CONSTRUCTION SERVICE
              {/* Underline Element */}
              <span className="absolute h-0.5 bg-white w-full left-0 bottom-0 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
            </span>
          </h3>

          <ul className="text-white custom-list-style">
            <li className="hover:text-gray-500 transition">
              Tendering and Evaluation
            </li>
            <li className="hover:text-gray-500 transition">
              Construction Management
            </li>
            <li className="hover:text-gray-500 transition">
              Project Development and Management
            </li>
            <li className="hover:text-gray-500 transition">
              Contract Administration
            </li>
            <li className="hover:text-gray-500 transition">
              Structural Assessment
            </li>
            <li className="hover:text-gray-500 transition">Arbitration</li>
          </ul>
        </div>
      </div>
      {/* </div> */}
    </div>
  );
}

export default AboutAndServices;

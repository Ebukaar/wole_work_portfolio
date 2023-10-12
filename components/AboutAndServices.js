import React from 'react';


function AboutAndServices() {
  return (
    <div className="container mx-auto px-6 md:px-0 py-12">

      {/* About Us Section */}
      <div className="mb-16 text-center">
        <h2 className="text-3xl font-medium text-gray-800 mb-6">About Us</h2>
        <p className="text-gray-600">
          We are professional engineers organised to provide comprehensive and integrated services in Civil and Structural Engineering. Our Principal Consultants have acquired a wealth of experience and specialised knowledge of various engineering structures and processes, ranging through the from conceptual, design and construction phases. The company uses analytical skills, flexibility and imagination to produce integral designs that are innovative and financially considerate. Inherent in our approach are professional objectivity and thoroughness.
        </p>
      </div>

      {/* Services Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* First Card */}
        <div className="bg-white shadow-lg rounded p-6">
          <div className="mb-4">
            {/* Replace with your image component */}
            {/* <img src="path_to_your_image" alt="Service 1" /> */}
          </div>
          <h3 className="text-xl font-medium text-gray-800 mb-2">DESIGN STUDIES</h3>
          <ul className="text-gray-600 custom-list-style">
            <li>Conceptual Design</li>
            <li>Technical Feasibility</li>
            <li>Economic Feasibility</li>
            <li>Research and Development</li>
            <li>Detailed Design</li>
            <li>Specification Writing</li>
            <li>Preparation of Contract Documents</li>
          </ul>
        </div>

        {/* Second Card */}
        <div className="bg-white shadow-lg rounded p-6">
          <div className="mb-4">
            {/* Replace with your image component */}
            {/* <img src="path_to_your_image" alt="Service 2" /> */}
          </div>
          <h3 className="text-xl font-medium text-gray-800 mb-2">CONSTRUCTION SERVICE</h3>
          <ul className="text-gray-600 custom-list-style">
            <li>Tendering and Evaluation</li>
            <li>Construction Management</li>
            <li>Project Development and Management</li>
            <li>Contract Administration</li>
            <li>Structural Assessment</li>
            <li>Arbitration</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default AboutAndServices;

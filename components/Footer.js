import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faTwitter, faLinkedin, faYoutube } from '@fortawesome/free-brands-svg-icons';

export default function Layout({ children }) {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow">
        {children}
      </main>

      <Footer />
    </div>
  );
}

function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-12 px-6 md:px-0">
      <div className="container mx-auto flex flex-wrap justify-between items-start">

        <div className="w-full md:w-2/5 mb-8 md:mb-0">
          <h3 className="text-2xl font-semibold mb-6">LABIRAN
          <span className="text-teal"> & ASSOCIATES</span></h3>
          {/* <div className="flex space-x-4">
            <a href="#" className="text-white hover:text-teal-400">Home</a>
            <a href="#" className="text-white hover:text-teal-400">About</a>
            <a href="#" className="text-white hover:text-teal-400">Gallery</a>
            <a href="#" className="text-white hover:text-teal-400">Projects</a>
            <a href="#" className="text-white hover:text-teal-400">Articles</a>
            <a href="#" className="text-white hover:text-teal-400">PDFs</a>
          </div> */}
          <p className="mt-6 text-gray-400">LABIRAN & ASSOCIATES © 2023</p>
        </div>

        <div className="w-full md:w-1/3 mb-8 md:mb-0">
          <div className="flex items-center mb-4">
            <FontAwesomeIcon icon={faMapMarkerAlt} className="mr-3" />
            <p><span className="font-semibold">444 S. Cedros Ave</span> Solana Beach, California</p>
          </div>
          <div className="flex items-center mb-4">
            <FontAwesomeIcon icon={faPhone} className="mr-3" />
            <p>+1.555.555.5555</p>
          </div>
          <div className="flex items-center">
            <FontAwesomeIcon icon={faEnvelope} className="mr-3" />
            <a href="mailto:support@company.com" className="hover:text-teal-400">support@company.com</a>
          </div>
        </div>

        <div className="w-full md:w-1/4">
          <p className="mb-6">About the company</p>
          <p className="text-gray-400 mb-6">Lorem ipsum dolor sit amet, consectateur adispicing elit. Fusce euismod convallis velit, eu auctor lacus vehicula sit amet.</p>
          <div className="flex space-x-4 text-2xl">
            <a href="#"><FontAwesomeIcon icon={faFacebook} className="hover:text-teal-400" /></a>
            <a href="#"><FontAwesomeIcon icon={faTwitter} className="hover:text-teal-400" /></a>
            <a href="#"><FontAwesomeIcon icon={faLinkedin} className="hover:text-teal-400" /></a>
            <a href="#"><FontAwesomeIcon icon={faYoutube} className="hover:text-teal-400" /></a>
          </div>
        </div>

      </div>
    </footer>
  );
}

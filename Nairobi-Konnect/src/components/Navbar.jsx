import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faEnvelope, faInfoCircle, faCogs, faSignInAlt } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const [isAboutModalOpen, setIsAboutModalOpen] = useState(false);

  const handleNavigation = (path) => {
    console.log("Navigating to", path);
    window.location.href = path;
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle('dark', !darkMode);
    localStorage.setItem('darkMode', !darkMode);
  };

  useEffect(() => {
    const savedDarkMode = localStorage.getItem('darkMode') === 'true';
    setDarkMode(savedDarkMode);
    if (savedDarkMode) {
      document.documentElement.classList.add('dark');
    }
  }, []);

  return (
    <nav className="fixed top-0 z-50 w-full p-4 bg-blue-600 dark:bg-gray-800">
      <div className="container flex items-center justify-between mx-auto">
        <div className="flex items-center">
          <img src="Logo" alt="Nairobi-Konnect Logo" className="h-10 mr-2" />
          <button onClick={() => handleNavigation('/home')} className="px-3 py-2 text-sm font-medium text-white rounded-md hover:bg-blue-700 dark:hover:bg-gray-700">
            <FontAwesomeIcon icon={faHome} className="mr-2" />
            Home
          </button>
          <button onClick={() => setIsContactModalOpen(true)} className="px-3 py-2 text-sm font-medium text-white rounded-md hover:bg-blue-700 dark:hover:bg-gray-700">
            <FontAwesomeIcon icon={faEnvelope} className="mr-2" />
            Contact Us
          </button>
          <button onClick={() => setIsAboutModalOpen(true)} className="px-3 py-2 text-sm font-medium text-white rounded-md hover:bg-blue-700 dark:hover:bg-gray-700">
            <FontAwesomeIcon icon={faInfoCircle} className="mr-2" />
            About Us
          </button>
          <button onClick={() => handleNavigation('/services')} className="px-3 py-2 text-sm font-medium text-white rounded-md hover:bg-blue-700 dark:hover:bg-gray-700">
            <FontAwesomeIcon icon={faCogs} className="mr-2" />
            Services
          </button>
          <button onClick={() => handleNavigation('/login')} className="px-3 py-2 text-sm font-medium text-white rounded-md hover:bg-blue-700 dark:hover:bg-gray-700">
            <FontAwesomeIcon icon={faSignInAlt} className="mr-2" />
            Login
          </button>
        </div>
      </div>

      {isAboutModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-800 bg-opacity-75">
          <div className="w-full max-w-lg p-4 bg-white rounded-md shadow-lg dark:bg-gray-700">
            <h2 className="mb-4 text-xl font-bold">About Us</h2>
            <p className="mb-4"> Nairobi-Konnect is a comprehensive platform designed to simplify travel and accommodation planning for residents and visitors in Nairobi. Our goal is to connect you with the best services and experiences the city has to offer.</p>
            <button onClick={() => setIsAboutModalOpen(false)} className="px-4 py-2 text-white bg-blue-600 rounded-md dark:bg-gray-600">
              Close
            </button>
          </div>
        </div>
      )}

      {isContactModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-800 bg-opacity-75">
          <div className="w-full max-w-lg p-4 bg-white rounded-md shadow-lg dark:bg-gray-700">
            <h2 className="mb-4 text-xl font-bold">Contact Us</h2>
            <p className="mb-4"> For any inquiries or support, please email us at support@nairobi-konnect.com or call us at (+1)123-456-789.</p>
            <button onClick={() => setIsContactModalOpen(false)} className="px-4 py-2 text-white bg-blue-600 rounded-md dark:bg-gray-600">
              Close
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

const User = () => {
  return (
    <div className="pt-16">
      <Navbar />
      <div className="flex flex-col items-center min-h-screen gradient-background">
        <h1 className="mt-16 text-5xl font-bold text-center text-white lg:mt-0">
          Services Available
        </h1>
        <div className="flex flex-wrap justify-center gap-5 mt-14">
          <UserCard
            img="https://media.cnn.com/api/v1/images/stellar/prod/230202121817-basigo-electric-bus-nairobi-kenya-2.jpg?c=original"
            title="Buses"
            para="Need a ride around Nairobi, use our app to book and reserve a seat."
            route="/bus"
          />
          <UserCard
            img="https://nnmedia.nation.africa/uploads/2019/07/City-Market-1320x740.jpg"
            title="Stalls"
            para="Need to shop, browse through and order what you'd like."
            route="/stalls"
          />
        </div>
      </div>
    </div>
  );
};

function UserCard(props) {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate(props.route);
  };

  return (
    <div className="w-full p-5 transition-transform transform cursor-pointer lg:w-1/2 xl:w-1/3 hover:scale-105">
      <div className="overflow-hidden bg-white rounded-lg shadow-md h-72">
        <img className="object-cover w-full h-48" src={props.img} alt="img" />
        <div className="p-6">
          <h2 className="mb-3 text-xl font-semibold text-center">{props.title}</h2>
          <p className="mb-5 text-sm text-gray-700">{props.para}</p>
          <div className="flex justify-center">
            <button
              onClick={handleButtonClick}
              className="px-4 py-2 font-bold text-white bg-blue-400 rounded hover:bg-blue-500"
            >
              Go to {props.title}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
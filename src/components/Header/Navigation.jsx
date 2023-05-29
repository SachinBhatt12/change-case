import React, { useState, useEffect } from 'react';
import { NavHashLink } from 'react-router-hash-link';
import { NavLink } from 'react-router-dom';
import { FaTimes } from 'react-icons/fa';
import { GiHamburgerMenu } from 'react-icons/gi';
import { BiUserCircle } from 'react-icons/bi';
import recyclerLogo from '../../assets/logo.png';
import navigationItems from './NavigationItems.json';

function Navigation() {
  const [activeTab, setActiveTab] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [authToken, setAuthToken] = useState(localStorage.getItem('AuthToken'));

  useEffect(() => {
    setAuthToken(localStorage.getItem('AuthToken'));
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  const handleLogin = () => {
    window.location.href = '/';
  };

  const handleLogout = () => {
    localStorage.removeItem('AuthToken');
    localStorage.removeItem('profile');
    setAuthToken(null);
    // Additional logout logic
  };

  return (
    <div>
      <header className='px-14 fixed drop-shadow-xl w-full mainBgCard'>
        <div className='p-2 flex justify-between'>
          <NavLink to='/'>
            <div className='logo flex items-center'>
              <img src={recyclerLogo} alt='companyLogo' className='w-44 h-10' />
            </div>
          </NavLink>
          <div className='flex justify between'>
            <ul className={`md:flex md:items-center sm:transform origin-top transition-all duration-2000 ease-linear md:w-auto w-full ${isMenuOpen ? '' : 'hidden'}`}>
              {navigationItems.map((item, index) => (
                <div key={index} className={`m-2 text-xl md:text-lg sm:text-sm pl-4 items-center ${activeTab === index ? 'active border-b-2 border-green-500' : ''}`}>
                  <NavHashLink key={index} to={item.path} onClick={() => handleTabClick(index)} smooth>
                    <li className=''>{item.label}</li>
                  </NavHashLink>
                </div>
              ))}
              <div className='flex items-center'>
                {authToken ? (
                  <button type='submit' className='border-2 px-4 py-2 rounded-lg mb-2 text-red-500 hover:text-white hover:bg-red-500 flex items-center' onClick={handleLogout}>
                    <BiUserCircle className='mr-2' size={24} />
                    Logout
                  </button>
                ) : (
                  <button type='submit' className='border-2 px-4 py-2 rounded-lg mb-2 text-green-500 hover:text-white hover:bg-green-500 flex items-center' onClick={handleLogin}>
                    <BiUserCircle className='mr-2' size={24} />
                    Login
                  </button>
                )}
              </div>
            </ul>
            {/* Hamburger menu start */}
            <div className='md:hidden flex justify-end'>
              <button type='submit' onClick={toggleMenu}>
                {isMenuOpen ? <FaTimes /> : <GiHamburgerMenu />}
              </button>
            </div>
            {/* Hamburger menu end */}
          </div>
        </div>
      </header>
    </div>
  );
}

export default Navigation;

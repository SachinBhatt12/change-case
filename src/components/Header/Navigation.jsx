import React, { useState, useEffect } from 'react';
import { NavHashLink } from 'react-router-hash-link';
import { NavLink, useNavigate } from 'react-router-dom';
import { FaTimes } from 'react-icons/fa';
import { GiHamburgerMenu } from 'react-icons/gi';
import { BiUserCircle, BiChevronDown } from 'react-icons/bi';
import { BsBoxArrowInRight } from 'react-icons/bs';
import recyclerLogo from '../../assets/logo.png';
import navigationItems from './NavigationItems.json';

export default function Navigation() {
  const [activeTab, setActiveTab] = useState(0);
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openList, setOpenList] = useState(false);
  const [authToken, setAuthToken] = useState('');

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleOptionsToggle = () => {
    setOpenList(!openList);
  };

  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  const handleLogin = () => {
    navigate('/');
  };

  const handleLogout = () => {
    localStorage.removeItem('AuthToken');
    localStorage.removeItem('profile');
    localStorage.removeItem('userId');
    setAuthToken('');
    navigate('/');
    // Additional logout logic
  };

  useEffect(() => {
    setAuthToken(localStorage.getItem('AuthToken'));
  }, [authToken]);

  return (
    <div>
      <header className='px-14 fixed drop-shadow-xl w-full mainBgCard'>
        <div className='flex justify-between'>
          <NavLink to='/'>
            <img src={recyclerLogo} alt='companyLogo' className='w-44 py-2 h-auto' />
          </NavLink>
          <div className='justify-between'>
            <ul className={`md:flex md:items-center sm:transform origin-top transition-all duration-2000 ease-linear md:w-auto w-full ${isMenuOpen ? '' : 'hidden'}`}>
              {navigationItems.map((item, index) => (
                <div key={index} className={`text-2xl md:text-lg sm:text-sm py-3 px-4 items-center ${activeTab === index ? 'active border-b-4 text-green-500 border-green-500' : ''}`}>
                  <NavHashLink key={index} to={item.path} onClick={() => handleTabClick(index)} smooth>
                    <li className=''>{item.label}</li>
                  </NavHashLink>
                </div>
              ))}
            </ul>
          </div>
          <div className='flex justify-end'>
            {authToken ? (
              <button type='submit' className='border-1 px-4 py-2 rounded-lg mb-2  flex items-center' onClick={handleOptionsToggle}>
                <BiChevronDown />
                Akash
                <BiUserCircle className='mr-2' size={24} />
              </button>
            ) : (
              <NavLink to='/'>
                <button type='submit' className='border-2 px-4 py-2 rounded-lg mb-2 flex items-center' onClick={handleLogin}>
                  <BiUserCircle className='mr-2' size={24} />
                  Login
                </button>
              </NavLink>
            )}
            {openList && (
              <div className='relative'>
                <ul className='absolute top-4 cursor-pointer right-10 border-2 p-5 shadow-xl ml-2 '>
                  <NavLink to='user'>
                    <li className='border-b-2 text-xl'>Profile</li>
                  </NavLink>
                  <li className='text-xl flex mt-1'>
                    <button type='submit' onClick={handleLogout} className=' text-left px-4 py-1 rounded-lg flex'>
                      Logout
                      <BsBoxArrowInRight className='pr-5' />
                    </button>
                  </li>
                </ul>
              </div>
            )}
          </div>
          {/* Hamburger menu start */}
          <div className='md:hidden flex justify-end'>
            <button type='submit' onClick={toggleMenu}>
              {isMenuOpen ? <FaTimes /> : <GiHamburgerMenu />}
            </button>
          </div>
          {/* Hamburger menu end */}
        </div>
      </header>
    </div>
  );
}

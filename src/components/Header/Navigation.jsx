import React, { useState } from 'react';
import { NavHashLink } from 'react-router-hash-link';
import { NavLink } from 'react-router-dom';
import { FaTimes } from 'react-icons/fa';
import { GiHamburgerMenu } from 'react-icons/gi';
import recyclerLogo from '../../assets/logo.png';

function Navigation() {
  const [activeTab, setActiveTab] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  return (
    <div>
      <header className='px-14 h-20 py-1 fixed drop-shadow-xl w-full mainBgCard'>
        <div className='p-2 flex justify-between'>
          <NavLink to='/'>
            <div className='logo flex items-center'>
              <img src={recyclerLogo} alt='companyLogo' className='w-44 h-10' />
            </div>
          </NavLink>
          <div className='flex justify between'>
            <ul className={`md:flex md:items-center sm:transform origin-top transition-all duration-2000 ease-linear md:w-auto w-full ${isMenuOpen ? '' : 'hidden'}`}>
              <NavHashLink to='/#herobar' onClick={() => handleTabClick(0)}>
                <li className={`m-2 text-xl pl-4 items-center ${activeTab === 0 ? 'active border-b-2 border-green-600' : ''}`}>Home</li>
              </NavHashLink>
              <NavHashLink to='/#whyUs' smooth onClick={() => handleTabClick(1)}>
                <li className={`m-2 text-xl pl-4 items-center ${activeTab === 1 ? 'active border-b-2 border-green-500' : ''}`}>Why Us</li>
              </NavHashLink>
              <NavHashLink to='/#household' smooth onClick={() => handleTabClick(2)}>
                <li className={`m-2 text-xl pl-4 items-center ${activeTab === 2 ? 'active border-b-2 border-green-500' : ''}`}>Services</li>
              </NavHashLink>
              <NavHashLink to='/#customerReviews' smooth onClick={() => handleTabClick(3)}>
                <li className={`m-2 text-xl pl-4 items-center ${activeTab === 3 ? 'active border-b-2 border-green-500' : ''}`}>Reviews</li>
              </NavHashLink>
              <NavHashLink to='/#ourstory' onClick={() => handleTabClick(4)}>
                <li className={`m-2 text-xl pl-4 items-center ${activeTab === 4 ? 'active border-b-2 border-green-500' : ''}`}>Our Story</li>
              </NavHashLink>
              <NavLink to='/scraprates' onClick={() => handleTabClick(5)}>
                <li className={`m-2 text-xl pl-4 items-center ${activeTab === 5 ? 'active border-b-2 border-green-500' : ''}`}>Scrap Rates</li>
              </NavLink>
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

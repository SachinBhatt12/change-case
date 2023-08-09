import React, { useState, useEffect, useRef } from 'react';
import { NavHashLink } from 'react-router-hash-link';
import { NavLink, useNavigate } from 'react-router-dom';
import { FaTimes } from 'react-icons/fa';
import { GiHamburgerMenu } from 'react-icons/gi';
import { BiUserCircle, BiChevronDown } from 'react-icons/bi';
// import { BsBoxArrowInRight } from 'react-icons/bs';
import recyclerLogo from '../../assets/logo.png';
import navigationItems from './NavigationItems.json';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUserDetails } from '../../redux/features/userDetailsSlice';

export default function Navigation() {
  const [activeTab, setActiveTab] = useState(0);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const profRef = useRef(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openList, setOpenList] = useState(false);
  const [authToken, setAuthToken] = useState('');
  const authtoken = localStorage.getItem('AuthToken');

  const userid = localStorage.getItem('userid');
  
  const handleClickOutside = (event) => {
    if (profRef.current && !profRef.current.contains(event.target) && event.target.id !== 'prof') {
      setOpenList(false);
    }
  };
  useEffect(() => {
    dispatch(fetchUserDetails(userid))?.then((response) => {});
  }, []);
  const { loading, data:userData, error } = useSelector((state) => state.userSlice);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleProfileClick = () => {
    setOpenList(false);
  };

  const handleOptionsToggle = () => {
      setOpenList(!openList);
  };

  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  const handleLogin = () => {
    navigate('/');
    // setAuthToken('user');
  };

  const handleLogout = () => {
    if (localStorage.getItem('AuthToken')) {
      localStorage.removeItem('AuthToken');
      localStorage.removeItem('profile');
      localStorage.removeItem('username');
      localStorage.removeItem('userid');
      setAuthToken('');
      navigate('/');
      setOpenList(false);
    }
  };
  const handleOrder = () => {
    setOpenList(false);
  };
  useEffect(() => {
    const storedToken = localStorage.getItem('AuthToken');
    if (storedToken) {
      setAuthToken(storedToken);
    } else {
      setAuthToken(null);
    }


    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const protectUserProfile = () => {
    if (authtoken === null) {
      return (
        <NavLink to='/'>
          <li className='border-b-2 text-lg text-center'>
            <button type='submit' onClick={handleProfileClick}>
              Profile
            </button>
          </li>
        </NavLink>
      );
    }
    return (
      <NavLink to='/user'>
        <li className='border-b-2 text-lg normal-case text-center'>
          <button type='submit' onClick={handleProfileClick}>
            Profile
          </button>
        </li>
      </NavLink>
    );
  };

  return (
    <div>
      <header className='pb-2  md:py-1 fixed drop-shadow-xl w-full mainBgCard h-16'>
        <div className='flex justify-between items-center relative'>
          <NavLink to='/'>
            <img src={recyclerLogo} alt='companyLogo' className='ml-0 w-44 py-1 md:py-2 sm:py-1 sm:ml-2 md:ml-10 h-auto' />
          </NavLink>
          <div className='justify-between'>
            <ul
              className={`absolute top-14 -right-[30px] w-[150px] rounded-md bg-[#fff] transform origin-top transition-all duration-2000 ease-linear lg:top-0 lg:right-[120px] lg:normal-case lg:bg-inherit lg:flex lg:items-center lg:w-auto ${
                isMenuOpen ? '' : 'hidden'
              }`}
            >
              {navigationItems.map((item, index) => (
                <div key={index} className={`text-sm md:text-lg sm:text-sm py-3 px-4 items-center ${activeTab === index ? 'active border-b-4 text-green-500 border-green-500' : ''}`}>
                  <NavHashLink key={index} to={item.path} onClick={() => handleTabClick(index)} smooth>
                    <li className=''>{item.label}</li>
                  </NavHashLink>
                </div>
              ))}
              <div className='flex items-center' />
            </ul>
          </div>
          <div className=' h-10 sm:flex sm:justify-end '>
            {authtoken ? (
              <button type='submit' className='border-2 px-4 py-1 rounded-lg flex items-center' onClick={ handleOptionsToggle}>
                <BiChevronDown />
                <p className='px-1'>{userData?.data?.name}</p>
                <BiUserCircle className='mr-2' size={24} />
                
              </button>
            ) : (
              <NavHashLink to="#herobar" smooth>
              <button type='submit' className='border-2 p-1 md:px-4 md:py-1 rounded-lg flex items-center' onClick={handleLogin}>
                <BiUserCircle className='mr-2' size={24} />
                Login
              </button>
              </NavHashLink>
            )}
            {openList && (
              <div className='relative' ref={profRef}>
                <ul className='absolute w-40  md:top-10 cursor-pointer bg-white rounded-md right-0  border-2 p-3 shadow-xl ml-2 text-center'>
                  <li className='p-1'>{protectUserProfile()}</li>
                  <li className='text-lg flex p-1 justify-center border-b-2'>
                    <NavLink to='myorders'>
                      <button type='submit' onClick={handleOrder} className='px-1 rounded-lg flex'>
                        My Orders
                        {/* <BsBoxArrowInRight className='pr-5' /> */}
                      </button>
                    </NavLink>
                  </li>
                  <li className='text-lg  flex justify-center p-1'>
                    <button type='submit' onClick={handleLogout} className=' '>
                      Logout
                      {/* <BsBoxArrowInRight className='pr-5' /> */}
                    </button>
                  </li>
                </ul>
              </div>
            )}
          </div>
          {/* Hamburger menu start */}
          <div className='h-14 pr-2 lg:hidden flex justify-end'>
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

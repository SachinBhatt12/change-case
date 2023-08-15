import React, { useState, useEffect, useRef } from 'react';
import { NavHashLink } from 'react-router-hash-link';
import { NavLink, useNavigate } from 'react-router-dom';
import {BsBox2} from 'react-icons/bs'
import {HiOutlineLogout} from 'react-icons/hi'
import {FaRegUser} from 'react-icons/fa'
import { Sling as Hamburger } from 'hamburger-react'
import recyclerLogo from '../../assets/logo.png';
import navigationItems from './NavigationItems.json';
import { useDispatch, useSelector } from 'react-redux';
import HamburgerItems from './HamburgerItems';
import { fetchUserDetails } from '../../redux/features/userDetailsSlice';
import { BiUserCircle } from 'react-icons/bi';

export default function Navigation() {
  const [hamburgerToggle,setHamburgerToggle]=useState(false);
  const [activeTab, setActiveTab] = useState(0);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const profRef = useRef(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openList, setOpenList] = useState(false);
  const [authToken, setAuthToken] = useState(localStorage.getItem('AuthToken'));
  const userid = localStorage.getItem('userid');
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
  });

  function extractLetters(input) {
    const words = input?.split(" ");
    const firstLetter = words[0][0];
    if (words.length === 1) {
      return `${firstLetter}`;
    }
    const lastWord = words[words.length - 1][0];
    return `${firstLetter}${lastWord }`;
  }
  const handleClickOutside = (event) => {
    if (profRef.current && !profRef.current.contains(event.target) && event.target.id !== 'prof') {
      setOpenList(false);
    }
  };
  useEffect(() => {
    dispatch(fetchUserDetails(userid))?.then((response) => {});  
  }, [dispatch,userid]); 
  const { loading, data:userData, error } = useSelector((state) => state.userSlice);
  if(userData){
    var name=((extractLetters(userData?.data?.name)).toUpperCase())
  }
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
  };
  function mobileMenu() {
    setHamburgerToggle(!hamburgerToggle);
  }
  const handleLogout = () => {
    if (localStorage.getItem('AuthToken')) {
      localStorage.removeItem('AuthToken');
      localStorage.removeItem('profile');
      localStorage.removeItem('username');
      localStorage.removeItem('userid');
      name=''
      setAuthToken('');
      navigate('/');
      setOpenList(false);
    }
  };
  const handleOrder = () => {
    setOpenList(false);
  };
 
  const protectUserProfile = () => {
    if (authToken === null) {
      return (
        <NavLink to='/'>
          <li className=' text-lg text-left '>
            <button type='submit' onClick={handleProfileClick}>
              Profile
            </button>  
          </li>
        </NavLink>
      );
    }
    return (
      <NavLink to='/user'>
        <li className=' text-lg pt-2 flex  normal-case text-left'>
        <FaRegUser className='mx-2 mr-3 mt-1'/>
          <button type='submit' onClick={handleProfileClick}>
           My Profile
          </button>
          
        </li>
      </NavLink>
    );
  };
  return (
    <div>
      <div className={ `rounded-lg  bg-white fixed right-0 top-16 items-center p-2 z-50  w-56   shadow-lg md:hidden 
      ${hamburgerToggle?'transform translate-x-0':'translate-x-full transition-transform duration-300 ease-cubic-bezier'}`}>
         <HamburgerItems  setHamburgerToggle={setHamburgerToggle} setOpenList={setOpenList}/>
      </div>
      <header className=''>
        <nav className='w-full flex fixed z-50 justify-between py-2 bg-white shadow-lg'>
          <img src={recyclerLogo} alt=""  className=' mt-2 w-30 h-10'/>
               <div className='flex'>
          <ul className={`hidden md:flex    justify-between`}>
          {navigationItems.map((item, index) => (
                <div key={index} className={`text-sm hover:bg-green-50 rounded-md  md:text-lg md:px-[15px] sm:text-sm py-3 px-4 items-center ${activeTab === index ? 'active border-b-4 text-green-500 border-green-500' : ''}`}>
                  <NavHashLink key={index} to={item.path} onClick={() => handleTabClick(index)} smooth>
                    <li className=''>{item.label}</li>
                  </NavHashLink>
                </div>
              ))}
          </ul>
          {authToken? (
              <div className='font-semibold hidden md:flex lg:flex border-2 cursor-pointer hover:text-green-600 hover:bg-white  duration-500 h-14 w-14 hover:shadow-xl border-green-600 mr-10 bg-green-50 rounded-full justify-center items-center' onClick={ handleOptionsToggle}>
                <p className=' px-2  text-xl'>{name}</p>
              </div>
            ) : (
              <NavHashLink to="#herobar" smooth>
              <button type='submit' className='border-2 my-1 mx-2 p-1 md:px-4 md:py-2 md:flex rounded-lg hidden items-center' onClick={handleLogin}>
                <BiUserCircle className='mr-2 ' size={24} />
                Login
              </button>
              </NavHashLink>
            )}
            </div>
             {openList && (
              <div className='hidden md:flex  absolute top-4 right-0 ' ref={profRef}> 
                <ul className='absolute w-44    md:top-16 cursor-pointer bg-white rounded-xl   right-10  border-2  shadow-xl  text-center'>
                <div class="absolute top-0 right-[19px] transform -translate-x-2/2 -translate-y-1/2 rotate-45 w-4 h-4 bg-white border-l border-t border-gray-300"></div>
                  <li className={` hover:bg-green-50 py-2 px-4  ${!authToken?'hidden ':'lg:flex'}  `}>{protectUserProfile()}</li>
                  <li className='hover:bg-green-50 text-lg flex p-1 px-4   py-2 '>
                  <BsBox2 className='mx-2 mr-3 mt-1'/>
                    <NavLink to='myorders' >
                      <button type='submit' onClick={handleOrder} className=' rounded-lg flex'>
                        My Orders
                      </button>
                    </NavLink>
                  </li>
                  <li className='hover:bg-green-50 text-lg px-4  flex pb-4 py-2'>
                  <HiOutlineLogout size={24} className='mx-2'/>
                    <button type='submit' onClick={handleLogout} className=' '>
                      Logout
                    </button>
                  </li>
                </ul>
              </div>
            )}
          <div className="md:hidden" onClick={mobileMenu}>
           <Hamburger toggled={hamburgerToggle}/>
          </div>
        </nav>      
      </header>
    </div>
  );
}

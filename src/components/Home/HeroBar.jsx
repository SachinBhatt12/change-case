import React, { useState ,useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import sideImage from '../../assets/illutratin.svg';
import SignupForm from './signup/SignupForm';
import SignInForm from './login/SignInForm';

function HeroBar(props) {
  const location = useLocation();
  const [loginForm, setLoginForm] = useState(true);
  const handleNewUser = () => {
    setLoginForm(!loginForm);
  };
  return (
    <div className='w-full mb-20' id='herobar'>
      <div className='w-11/12 inline-block justify-center'>
        <div className=' flex flex-col justify-around lg:flex-row'>
          <div className='w-full lg:pt-24 md:pt-20 sm:pt-20 pt-16'>
            <h1 className='text-2xl lg:text-4xl text-start mt-10 text-center mb-10 font-bold'>
              Small Actions, Big Impact:
              <br />
              <span className='text-2xl lg:text-4xl text-green-500 text-4xl'>Recycle with Us</span>
            </h1>
            <div className='w-full lg:hidden'>
              <img src={sideImage} alt='' className='lg:w-11/12 md:w-80 sm:1/2' />
            </div>
            <div className='mt-8 flex lg:w-10/12 md:w-2/4'>
              {localStorage.AuthToken !== null ? (
                <div className='signup border-2 p-5 shadow-xl rounded-lg w-full' id='signup'>
                  {loginForm ? <SignInForm handleNewUser={handleNewUser} /> : <SignupForm handleNewUser={handleNewUser} />}
                </div>
              ) : (
                <div>
                  <p className='text-lg text-left'>We will collect your scrap and will help you to know the worth of your scrap</p>
                  <NavLink to='/scraprates'>
                    <button type='submit' className='primaryButton mt-10'>sell Scrap</button>
                  </NavLink>
                </div>
              )}
            </div>
          </div>
          <div className='lg:w-full hidden md:inline lg:mt-20'>
            <img src={sideImage} alt='' className='lg:w-10/12 md:w-1/2 pt-12' />
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroBar;
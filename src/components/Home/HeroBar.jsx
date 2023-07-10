import React, { useState } from 'react';
import sideImage from '../../assets/illutratin.svg';
import SignupForm from './signup/SignupForm';
import SignInForm from './login/SignInForm';

function HeroBar() {
  const [loginForm, setLoginForm] = useState(true);
  const handleNewUser = () => {
    setLoginForm(!loginForm);
  };
  return (
    <div className='w-full mb-32' id='herobar'>
      <div className='w-full flex flex-col py-4 justify-around lg:flex-row'>
        <div className='w-full lg:w-6/12 lg:pt-24 lg:ml-32'>
          <h1 className='text-3xl mt-16 sm:mt-16 text-center md:text-4xl lg:text-left py-2 mb-10'>
            Small Actions, Big Impact:
            <br />
            <span className='text-green-500 text-4xl md:text-5xl'>Recycle with Us</span>
          </h1>
          <div className='w-full lg:hidden'>
            <img src={sideImage} alt='' className='pt-12 w-11/12 m-auto lg:h-auto' />
          </div>
          <div className='mt-8 flex justify-center w-4/5 m-auto md:w-9/12 md:m-auto lg:justify-start lg:mt-6 lg:p-3'>
            {localStorage.AuthToken !== null ? (
              <div className='signup border-2 p-10 shadow-xl rounded-lg w-full' id='signup'>
                {loginForm ? <SignInForm handleNewUser={handleNewUser} /> : <SignupForm handleNewUser={handleNewUser} />}
              </div>
            ) : (
              ''
            )}
          </div>
        </div>
        <div className='w-full hidden lg:w-7/12 lg:inline lg:mt-36'>
          <img src={sideImage} alt='' className='pt-12 w-11/12 m-auto lg:h-auto' />
        </div>
      </div>
    </div>
  );
}

export default HeroBar;

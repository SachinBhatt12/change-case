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
        <div className='w-full lg:w-4/12 lg:pt-40 lg:ml-32'>
          <h1 className='text-4xl text-center lg:text-left py-2 mb-10'>
            Small Actions, Big Impact:
            <br />
            <span className='text-green-500 text-5xl'>Recycle with Us</span>
          </h1>
          <div className='flex justify-center lg:justify-start lg:mt-6 lg:p-3'>
            {localStorage.AuthToken !== null ? (
              <div className='signup border-2 p-10 shadow-xl rounded-lg w-full' id='signup'>
                {loginForm ? <SignInForm handleNewUser={handleNewUser} /> : <SignupForm handleNewUser={handleNewUser} />}
              </div>
            ) : (
              ''
            )}
          </div>
        </div>
        <div className='w-full lg:w-auto'>
          <img src={sideImage} alt='' className='pt-36 w-full lg:h-auto' />
        </div>
      </div>
    </div>
  );
}

export default HeroBar;

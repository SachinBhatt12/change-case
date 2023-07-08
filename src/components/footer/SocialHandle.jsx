import React from 'react';
import {
  FaLinkedin, FaFacebook, FaTwitter, FaInstagram,
} from 'react-icons/fa';

function SocialHandle() {
  return (
    <div className='flex justify-center items-center text-white'>
      <div className='w-[85px] text-sm lg:w-[110px] lg:text-lg'>
        <h1> Follow us on : </h1>
      </div>
      <div className='px-2'>
        <FaLinkedin />
      </div>
      <div className='px-2'>
        <FaFacebook />
      </div>
      <div className='px-2'>
        <FaTwitter />
      </div>
      <div className='px-2'>
        <FaInstagram />
      </div>
    </div>
  );
}

export default SocialHandle;

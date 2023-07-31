import React from 'react';
import {
  FaLinkedin, FaFacebook, FaTwitter, FaInstagram,
} from 'react-icons/fa';

function SocialHandle() {
  return (
    <div className='flex justify-center items-center text-white'>
      <div className='text-sm lg:text-lg'>
        <h1> Follow us on : </h1>
      </div>
      <div className='ml-2'>
        <FaLinkedin />
      </div>
      <div className='ml-2'>
        <FaFacebook />
      </div>
      <div className='ml-2'>
        <FaTwitter />
      </div>
      <div className='ml-2'>
        <FaInstagram />
      </div>
    </div>
  );
}

export default SocialHandle;

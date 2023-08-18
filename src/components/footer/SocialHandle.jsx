import React from 'react';
import {
  FaLinkedin, FaFacebook, FaTwitter, FaInstagram,
} from 'react-icons/fa';
import { NavLink } from 'react-router-dom';

function SocialHandle() {
  return (
    <div className='flex justify-center items-center text-white'>
      <div className='text-sm lg:text-lg'>
        <h1> Follow us on : </h1>
      </div>
      <NavLink to='https://www.linkedin.com/company/pando-india-software-consultants/'>
        <div className='ml-2 cursor-pointer'>
          <FaLinkedin />
        </div>
      </NavLink>
      <NavLink to='https://www.facebook.com/people/Pando-India-Software-Consultants/100084361683435/'>
        <div className='ml-2 cursor-pointer'>
          <FaFacebook />
        </div>
      </NavLink>
      {/* <div className='ml-2'>
        <FaTwitter />
      </div>
      <div className='ml-2'>
        <FaInstagram />
      </div> */}
    </div>
  );
}

export default SocialHandle;

import React from 'react';
import { GrMail } from 'react-icons/gr';
import { FaPhone } from 'react-icons/fa';

function ContactUs() {
  return (
    <div className='text-white text-sm md:text-lg'>
      <h1 className='text-start font-medium mb-5 text-2xl'>Contact Us</h1>
      <h3 className='flex mb-5'>
        <GrMail style={{ display: 'inline-block' }} />
        {' '}
        <span style={{ display: 'inline-block' }} className='px-2'>
          info@kabadijee.com
        </span>
      </h3>
      <h3 className='flex mb-5'>
        <FaPhone />
        {' '}
        <span style={{ display: 'inline-block' }} className='px-2'>
          {' '}
          +911203132615
        </span>
      </h3>
    </div>
  );
}

export default ContactUs;

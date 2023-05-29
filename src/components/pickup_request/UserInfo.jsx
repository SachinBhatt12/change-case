/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';

function UserInfo() {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
      {/* <label htmlFor='name' className='font-semibold text-xl'>
        Name:
        <span>johny richard</span>
      </label> */}
      <label htmlFor='email' className='font-semibold text-xl'>
        Email-Id:
        <span>johny.richard@gmail.com</span>
      </label>
      <label htmlFor='mobile' className='font-semibold text-xl'>
        Mobile Number:
        <span>+91 9876543210</span>
      </label>
    </div>
  );
}

export default UserInfo;

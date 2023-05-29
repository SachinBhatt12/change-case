/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

function UserInfo() {
  // const userid = localStorage.getItem('userid');
  // const dispatch = useDispatch();
  // const { loading, data: userDetails, error } = useSelector((state) => state.userData);
  // useEffect(() => {
  //   dispatch(userDetails(userid))?.then((response) => {});
  // });
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

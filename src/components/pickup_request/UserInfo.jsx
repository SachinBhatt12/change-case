/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUserDetails } from '../../redux/features/userDetailsSlice';

function UserInfo() {
  const userid = localStorage.getItem('userid');
  const dispatch = useDispatch();
  const { loading, data: userSlice, error } = useSelector((state) => state.userSlice);
  const userDetailsData = userSlice?.data;
  useEffect(() => {
    dispatch(fetchUserDetails(userid)).then((response) => {
    });
  }, [dispatch, userid]);
  if (loading) {
    // return <div>Loading...</div>;
  }

  if (error) {
    return (
      <div>
        Error:
        {error}
      </div>
    );
  }
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
      {/* <label htmlFor='name' className='font-semibold text-xl'>
        Name:
        <span>johny richard</span>
      </label> */}
      <label htmlFor='email' className='font-semibold text-xl'>
        Email-Id:
        {' '}
        <span>{userDetailsData?.email}</span>
      </label>
      <label htmlFor='mobile' className='font-semibold text-xl'>
        Mobile Number:
        {' '}
        <span>{userDetailsData?.phone_number}</span>
      </label>
    </div>
  );
}

export default UserInfo;

/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useEffect, useState } from 'react';
import { FiEdit3 } from 'react-icons/fi';
import { BiWalletAlt } from 'react-icons/bi';
import { BsThreeDotsVertical } from 'react-icons/bs';
import { NavLink, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import Backbtn from '../BackBtn';
import { fetchUserDetails } from '../../redux/features/userDetailsSlice';
import Loader from '../Loader';
import { initialUserState, updateUser } from '../../redux/features/UpdateUser';

function UserProfile() {
  const navigate = useNavigate();
  const userid = localStorage.getItem('userid');
  const dispatch = useDispatch();
  const { loading, data: userSlice, error } = useSelector((state) => state.userSlice);
  const userDetailsData = userSlice?.data;
  const [userForm, setUserForm] = useState(userDetailsData);
  const handleInputChange = (e) => {
    setUserForm((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };
  const handleRedirect = () => {
    navigate('/scraprates');
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    const { payload: response } = await dispatch(updateUser(userForm));
    if (response.status === 200) {
      toast.success('User Details updated successfully');
      localStorage.setItem('username', response?.data?.name);
      handleRedirect();
    }
  };
  useEffect(() => {
    dispatch(fetchUserDetails(userid))?.then((response) => {
      if(response.payload) {
        setUserForm(response.payload.data);
      }
      // console.log(">>>>>>>>>>>>>",response);
    });
  }, [dispatch, userid]);
  if (loading) {
    return (
      <div>
        <Loader />
      </div>
    );
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
    <div className='bg-gray-100 h-screen'>
      <div className='flex pt-20'>
        <div className=''>
          <Backbtn />
        </div>
        <div className='bg-white m-2 mr-7 mt-10 z-10 w-full p-20'>
          <div className='flex justify-between '>
            <h3 className='flex name text-2xl'>
              {' '}
              <span>
                {userDetailsData?.name}
                <FiEdit3 />
              </span>
            </h3>
            <NavLink to='/wallet'>
              <button type='submit' className='flex text-center primaryButton'>
                Your Wallet
                {' '}
                <BiWalletAlt />
              </button>
            </NavLink>
          </div>
          <form action='' className='pt-10 text-xl' onSubmit={(FormData) => handleSubmit(FormData)}>
            <div className='grid grid-cols-1 sm:grid-cols-2 gap-4 text-left'>
              <div>
                <label htmlFor='Name'>Name</label>
                <br />
                <input type='text' className='inputCommonCss w-full' id='Name' name='name' value={userForm?.name} onChange={handleInputChange} placeholder='Enter your name' />
              </div>

              <div>
                <label htmlFor='email' className=''>
                  Email Id
                </label>
                <br />
                <input type='email' className='inputCommonCss w-full' id='email' name='email' onChange={handleInputChange} value={userForm?.email} placeholder='Enter your email' />
              </div>

              <div>
                <label htmlFor='phone'>Phone</label>
                <br />
                <input type='text' className='inputCommonCss w-full' id='phone_number' name='phone_number' value={userForm?.phone_number} placeholder='Enter your phone number' disabled />
              </div>
              <div>
                <label htmlFor='email' className=''>
                  upiId
                </label>
                <br />
                <input type='email' className='inputCommonCss w-full' id='upiId' name='upiId' onChange={handleInputChange} value={userForm?.upiId} placeholder='Enter your UPIID' />
              </div>
            </div>
            <button type='submit' className='primaryButton justify-end mt-10'>
              Submit
            </button>
          </form>
        </div>
      </div>
      
    </div>
  );
}

export default UserProfile;

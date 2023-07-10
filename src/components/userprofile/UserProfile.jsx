/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useEffect, useState } from 'react';
import { FiEdit3 } from 'react-icons/fi';
import { BiWalletAlt } from 'react-icons/bi';
import { BsThreeDotsVertical } from 'react-icons/bs';
import { NavLink, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
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
    dispatch(fetchUserDetails(userid))?.then((response) => {});
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
        <div className='bg-white m-10 z-10 w-screen  p-20'>
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
            <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
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
      <div className='table m-20 lb-20 my-3'>
        <h2 className='text-2xl font-bold my-5'>Current Order</h2>
        <table>
          <thead className='text-xl'>
            <tr>
              <th className='px-16 text-center'>Order Id</th>
              <th className='px-16 text-center'>Customer</th>
              <th className='px-16 text-center'>Category</th>
              <th className='px-16 text-center'>Quantity</th>
              <th className='px-16 text-center'>Pickup Date</th>
              <th className='px-16 text-center'>Time</th>
              <th className='px-16 text-center'>Status</th>
            </tr>
          </thead>
          <tbody>
            <tr className='bg-white py-10 mt-10'>
              <td className='py-5 text-center'>#12345</td>
              <td className='py-5 text-center'>Akash Singh</td>
              <td className='py-5 text-center'>NewsPaper</td>
              <td className='py-5 text-center'>less than 250 gm</td>
              <td className='py-5 text-center'>09-March-2023</td>
              <td className='py-5 text-center'>10:30Am</td>
              <td className='py-5 text-center'>Requested</td>
              <td className='py-5 text-center'>
                <BsThreeDotsVertical />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <ToastContainer />
    </div>
  );
}

export default UserProfile;

/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { FiEdit3 } from 'react-icons/fi';
import { BiWalletAlt } from 'react-icons/bi';
import { BsThreeDotsVertical } from 'react-icons/bs';
import Backbtn from '../BackBtn';
import { NavLink } from 'react-router-dom';

function UserProfile() {
  return (
    <div className='bg-gray-100 h-screen'>
      <div className='flex pt-20'>
        <div className=''>
          <Backbtn />
        </div>
        <div className='bg-white m-20 w-screen p-20'>
          <div className='flex justify-between '>
            <h3 className='flex name text-2xl'>
              Akash Singh
              {' '}
              <span>
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
          <form action='' className='pt-10 text-xl'>
            <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
              <div>
                <label htmlFor='Name'>Name</label>
                <br />
                <input type='text' className='inputCommonCss w-full' id='Name' name='Name' placeholder='Enter your name' />
              </div>
              <div>
                <label htmlFor='Address'>Address</label>
                <br />
                <input type='text' className='inputCommonCss w-full' id='Address' name='Address' placeholder='Enter your Address' />
              </div>
              <div>
                <label htmlFor='email' className=''>
                  Email Id
                </label>
                <br />
                <input type='email' className='inputCommonCss w-full' id='email' name='email' placeholder='Enter your email' />
              </div>
              <div>
                <label htmlFor='phone'>Phone</label>
                <br />
                <input type='text' className='inputCommonCss w-full' id='phone' name='phone' placeholder='Enter your phone number' />
              </div>
            </div>
            <button type='submit' className='primaryButton justify-end mt-10'>
              Submit
            </button>
          </form>
        </div>
      </div>
      <div className='table m-20 my-3'>
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
    </div>
  );
}

export default UserProfile;

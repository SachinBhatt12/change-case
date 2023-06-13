import React from 'react';
import { BiWallet } from 'react-icons/bi';
import { AiOutlinePlus } from 'react-icons/ai';

import { NavLink } from 'react-router-dom';
import Backbtn from '../BackBtn';
import TransactionTable from './TransactionTable';

const redeemHeading = ['Transaction Id', 'Date', 'Time', 'Amount'];
const creditHeading = ['Pickup Id', 'Date', 'Time', 'Amount'];
function Wallet() {
  return (
    <div className='bg-gray-100 h-auto'>
      <div className='flex pt-20'>
        <div className=''>
          <Backbtn />
        </div>
        <div className='bg-white m-20 w-screen p-20'>
          <div className='flex justify-between '>
            <div className=''>
              <button type='submit' className='bg-green-600 text-5xl text-white rounded-full p-10'>
                <BiWallet />
              </button>
            </div>
            <div className='relative flex-col justify-between'>
              <NavLink to='/transfertobank'>
                <button type='submit' className='border-green-600 border-2 px-20 text-green-600 py-2'>
                  Transfer to Bank Account
                </button>
              </NavLink>
              <div className='justify-end absolute bottom-1 right-1'>
                <NavLink to='' className='flex relative text-green-600'>
                  <AiOutlinePlus className='absolute top-1 -left-4' />
                  Account Info
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='table m-48 my-3'>
        <TransactionTable name='Redeem Transactions' heading={redeemHeading} />
        <TransactionTable name='Credit Transactions' heading={creditHeading} />
      </div>
    </div>
  );
}

export default Wallet;

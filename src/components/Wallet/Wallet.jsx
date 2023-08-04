import React, { useEffect, useState } from 'react';
import { BiWallet } from 'react-icons/bi';
import { AiOutlinePlus } from 'react-icons/ai';
import { NavLink } from 'react-router-dom';
import Backbtn from '../BackBtn';
import TransactionTable from './TransactionTable';
import { getWalletDetails } from '../../redux/api';


const redeemHeading = ['Transaction Id', 'Date', 'Time', 'Amount'];
const creditHeading = ['Pickup Id', 'Date', 'Time', 'Amount'];
function Wallet() {

  const [walletAmount, setWalletAmount] = useState(null);

  useEffect(() => {
    const userid = localStorage.getItem('userid');

    getWalletDetails().then((response) => {
      const userDetail = response.data;
      const matchingUser = userDetail.find((item) => item.user.toString() === userid);
    
      if (matchingUser) {
        const walletAmount = matchingUser.wallet_amount;
        setWalletAmount(walletAmount);
      } else {
        console.log("User ID not found in response data.");
      }
    });
  }, []);
  return (
    <div className='bg-gray-100 h-auto'>
      <div className='flex pt-20'>
        <div className=''>
          <Backbtn />
        </div>
        <div className='bg-white m-20 w-screen p-10 rounded-lg'>
          <div className='flex justify-between'>
            <div className='flex'>
              <button type='submit' className='bg-green-600 text-5xl text-white rounded-full p-10'>
                <BiWallet />
              </button>
              <div className='mt-5 ml-8'>
              <p className='text-2xl text-[#000000bf]'>Wallet Balance</p>
              <p className='mt-5 text-4xl text-start text-[#00000099]'>{walletAmount}</p>
              </div>
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
      <div className='table m-48 my-3 text-start'>
        <TransactionTable name='Redeem Transactions' heading={redeemHeading} />
        <TransactionTable name='Credit Transactions' heading={creditHeading} />
      </div>
    </div>
  );
}

export default Wallet;

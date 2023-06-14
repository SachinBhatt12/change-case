/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import Backbtn from '../BackBtn';

function TransferToBank() {
  return (
    <div className='bg-gray-100 h-screen'>
      <div className='flex pt-20'>
        <div className=''>
          <Backbtn />
        </div>
        <div className=' m-20 w-screen p-20'>
          <form action='' className='pt-10 text-xl'>
            <div className='grid grid-cols-1 justify-center sm:grid-cols-2 gap-4'>
              <div>
                <label htmlFor='Name'>Account number *</label>
                <br />
                <input type='text' className='h-16 w-96 bg-gray-200 border-2 rounded-xl p-5 mt-3' id='Name' name='Name' placeholder='Enter your name' />
              </div>
              <div>
                <label htmlFor='Address'>IFSC Code *</label>
                <br />
                <input type='text' className='h-16 w-96 bg-gray-200 border-2 rounded-xl p-5 mt-3' id='Address' name='Address' placeholder='Enter your Address' />
              </div>
              <div>
                <label htmlFor='email' className=''>
                  Branch name *
                </label>
                <br />
                <input type='email' className='h-16 w-96 bg-gray-200 border-2 rounded-xl p-5 mt-3' id='email' name='email' placeholder='Enter your email' />
              </div>
              <div>
                <label htmlFor='phone'>Account holder name *</label>
                <br />
                <input type='text' className='h-16 w-96 bg-gray-200 border-2 rounded-xl p-5 mt-3' id='phone' name='phone' placeholder='Enter your phone number' />
              </div>
            </div>
            <div className='flex justify-center'>
              <button type='submit' className='text-center rounded-2xl text-2xl p-5 text-white px-32 bg-green-400  justify-center mt-20'>
                Redeem to your Account
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default TransferToBank;

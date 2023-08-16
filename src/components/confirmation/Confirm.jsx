import React, { useState } from 'react';
import ConfirmPick from '../../assets/confirm_pickup.png';
import { fetchUserDetails } from '../../redux/features/userDetailsSlice';
import OrderDetailsTable from './OrderDetailsTable';

export function Confirm() {
  const [UserDetails, setUserDetails] = useState({});
  return (
    <div className='bg-white '>
      {/* upper block */}
      <div className='w-full flex flex-col md:flex-row lg:px-44 md:px-10 px-2 py-8   md:items-start md:justify-between bg-[#DCFFF1] pt-28'>
        <div className='flex flex-col'>
            <div className='px-2'>
            <h1 className='font-semibold text-left  text-3xl'>Yehh ! Pickup is Requested</h1>
          <p className=' py-5 text-left text-xl'>Thankyou, for Choosing Kabadijee </p>
            </div>
         
          <div className='text-left px-2 pb-10 ' ><button className='border-2 border-green-600 px-2 py-2 rounded-lg text-green-600'>Go to Home page</button></div>
          
        </div>
        <div className='flex justify-center  '>
          <div className='flex '>
            <img src={ConfirmPick} alt='' className='w-60' />
          </div>
        </div>
      </div>

      {/* lower block */}

      <div>
        <div className='w-full flex justify-center'>
        <div className='w-full flex mx-4 md:mx-20 lg:mx-40 xl:mx-52 2xl:mx-80  my-4 bg-[#F3F3F3] px-2  py-2 rounded-md'>
          <div className='rounded-sm bg-white mx-2 my-2'>
            <img src={ConfirmPick} className='w-32 h-20' alt='' />
          </div>

          <div className='w-full flex px-1 py-4'>
            <div className='w-full flex flex-wrap justify-between items-center '>
                <h4 className='px-5 font-bold'>Newspaper</h4>
            <p className='px-5'>less than 50 kg</p>
            </div>
            
          </div>
        </div>
        </div>
        {/*  */}
        <div className='w-full  flex justify-center'>
          <OrderDetailsTable />
        </div>
      </div>
    </div>
  );
}

import React from 'react';

function OrderDetailsTable({ pickupSuccessData , UserDetails}) {
  const username = localStorage.getItem('username');
  return (
    <>
    <div className='w-full mx-4 md:mx-20 lg:mx-40 xl:mx-52 2xl:mx-80  my-2 bg-[#F3F3F3] px-6 mb-20 py-2 rounded-md'>
      <div>
      <p className='text-xl md:px-16 md:py-2 md:pb-4  text-left font-bold  '>Order Details</p>
      </div> 
      <hr  className='md:mb-6 bg-[#E8E8E8]'/>   
<div className='md:px-20 md:pb-10 '>
      <div className='flex justify-between'>
        <div><p className=' text-[#474747]'>Order Id</p></div>
        <div><p className='text-[#8A8A8A]'>#15</p></div>
      </div>

      <div className='flex justify-between'>
        <div><p className='text-[#474747]'>Name</p></div>
        <div><p className='text-[#8A8A8A]'>Vikas</p></div>
      </div>

      <div className='flex  justify-between items-center '>
        <div className=''><p className='text-left text-[#474747]'>Pickup address</p></div>
        <div className='flex flex-wrap '>
          <p className='text-right text-[#8A8A8A]'>nandgram nandgram nandgram nandgram nandgram 
          nandgram nandgram nandgram 
          nandgram nandgram nandgram nandgram  </p>
          </div>
      </div>
      <div className='flex justify-between items-center'>
        <div className='text-[#474747]'><p className='text-[#474747]'>city</p></div>
        <div className=''><p className='text-[#8A8A8A]'>Ghaziabad</p></div>
      </div>
      <div className='flex justify-between items-center'>
        <div className=''><p className='text-[#474747]'>State</p></div>
        <div className=''><p className='text-[#8A8A8A]'>Uttar-Pradesh</p></div>
      </div>
      <div className='flex justify-between'>
        <div><p className='text-[#474747]'>Pincode</p></div>
        <div><p className='text-[#8A8A8A]'>201001</p></div>
      </div>
      <div className='flex justify-between'>
        <div><p className='text-[#474747]'>Pickup date</p></div>
        <div><p className='text-[#8A8A8A]'>20/20/20</p></div>
      </div>

      <div className='flex justify-between'>
        <div><p className='text-[#474747]'>time</p></div>
        <div><p className='text-[#8A8A8A]'>19:20</p></div>
      </div>
      <div className='flex justify-between'>
        <div><p className='text-[#474747]'>Pickup OTP</p></div>
        <div><p className='text-[#8A8A8A]'>2521</p></div>
      </div>

     </div>
  
    </div>
      {/* <h5 className='text-xl text-start mt-5 font-semibold'>Provide this OTP to the vendor for confirm Pickup</h5> */}
      </>
  );
}

export default OrderDetailsTable;

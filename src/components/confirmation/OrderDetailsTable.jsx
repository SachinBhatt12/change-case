import React from 'react';

function OrderDetailsTable({ pickupSuccessData , UserDetails}) {
  const username = localStorage.getItem('username');
  return (
    <div>
    <div className='grid grid-cols-2'>
      <table>
        <tbody>
          <tr className='py-2'>
            <th className='text-left'>Order Id</th>
            <td>
              #
              {pickupSuccessData?.id}
            </td>
          </tr>
          <tr className='py-2'>
            <th className='text-left'>Name</th>
            <td>{UserDetails.name}</td>
          </tr>
          <tr className='py-2'>
            <th className='text-left pr-32'>Pickup address</th>
            <td>
              <div className='inline-block'>
                {pickupSuccessData?.flat_number}
                ,
                {pickupSuccessData?.area}
                ,
                {pickupSuccessData?.landmark}
                ,
                {pickupSuccessData?.city}
                ,
                {pickupSuccessData?.state},{pickupSuccessData?.pincode}
              </div>
            </td>
          </tr>
          <tr className='py-2'>
            <th className='text-left'>Pickup Date</th>
            <td>{pickupSuccessData?.pickup_date}</td>
          </tr>
          <tr className='py-2'>
            <th className='text-left'>Time</th>
            <td>{pickupSuccessData.pickup_time}</td>
          </tr>
          <h5 className='text-xl text-start mt-5 font-semibold'>Provide this OTP to the vendor for confirm Pickup</h5>
          <tr className='py-2'>
            <th className='text-left'>Pickup OTP</th>
            <td>{UserDetails.pickup_otp}</td>
          </tr>
        </tbody>
      </table>
    </div>
      {/* <h5 className='text-xl text-start mt-5 font-semibold'>Provide this OTP to the vendor for confirm Pickup</h5> */}
      </div>
  );
}

export default OrderDetailsTable;

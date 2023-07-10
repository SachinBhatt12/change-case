import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ConfirmPick from '../../assets/confirm_pickup.png';
import Backbtn from '../BackBtn';
import OrderDetailsTable from './OrderDetailsTable';
import Loader from '../Loader';
import Error from '../Error';

function ConfirmPickup() {
  const pickupReturnData = useLocation();
  const pickupSuccess = pickupReturnData?.state?.pickupData;
  const pickupSuccessItemId = pickupSuccess.items;
  const { loading, data: scrapData, error } = useSelector((state) => state.scrapDetails);
  const scrapDetails = scrapData?.data;
  if (loading) {
    <Loader />;
  } else if (error) {
    <Error />;
  }
  const filteredData = scrapDetails?.filter((item) => pickupSuccessItemId?.includes(item.id));

  return (
    <div className='pt-14 scroll-smooth'>
      <div className='bg-teal-100   '>
        <div className='container flex justify-around'>
          <div className='py-10 px-20 justify-center'>
            <Backbtn />
            <h1 className='font-semibold px-20 text-4xl'>Yehh ! Pickup is Requested</h1>
            <p className='px-20 py-5 text-xl'>Thankyou, for Choosing Kabadijee </p>
            <NavLink to='/'>
              <button type='submit' className=' p-2  px-10 mt-10 mx-20 hover:bg-green-500 hover:text-white hover:border-white self-center border-green-600 border-2'>
                Go to Home page
              </button>
            </NavLink>
          </div>
          <div className='py-10 justify-end'>
            <img src={ConfirmPick} alt='' />
          </div>
        </div>
      </div>
      <div className='bg-white'>
        <div className='flex px-56 py-20'>
          <div className='bg-zinc-100 p-10 w-auto'>
            <h2 className='text-2xl py-5'>Order Details</h2>
            <hr />
            <OrderDetailsTable pickupSuccessData={pickupSuccess} />
          </div>
          <div className='mx-10 w-96'>
            <h2 className='text-xl'>Order Summary</h2>
            {filteredData?.map((item, index) => (
              <div className='flex bg-slate-100 mt-4' key={index}>
                <div className='img'>
                  <img src={item.image_url} className='w-32 h-20' alt='' />
                </div>
                <div className='data px-1 py-4'>
                  <h4 className='px-5 font-bold'>{item.item_name}</h4>
                  <p className='px-5'>
                    {item.rate}
                    kg
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ConfirmPickup;

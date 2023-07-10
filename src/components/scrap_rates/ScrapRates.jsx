import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchScrap } from '../../redux/features/scraprateSlice';
import Error from '../Error';
import Loader from '../Loader';

function ScrapRates() {
  const authtoken = localStorage.getItem('AuthToken');
  const dispatch = useDispatch();
  const { loading, data: scrapData, error } = useSelector((state) => state.scrapDetails);
  if (loading) {
    <Loader />;
  } else if (error) {
    <Error />;
  }

  const scrapRateData = scrapData?.data;

  useEffect(() => {
    // eslint-disable-next-line no-unused-vars
    dispatch(fetchScrap())?.then((response) => {});
  }, [dispatch]);

  const renderPickupButton = () => {
    if (authtoken === null) {
      return (
        <NavLink to='/'>
          <button type='submit' className='w-full border-2 text-green-500 hover:text-white hover:bg-green-600 bg-white p-1 focus:bg-green-600'>
            Pickup Request
          </button>
        </NavLink>
      );
    }
    return (
      <NavLink to='/pickuprequest'>
        <button type='submit' className='w-full border-2 text-green-500 hover:text-white hover:bg-green-600 bg-white p-1 focus:bg-green-600'>
          Pickup Request
        </button>
      </NavLink>
    );
  };

  return (
    <div className=' ml-28 pt-28 px-4 rounded'>
      <h1 className='text-center text-3xl'>Scrap Rates</h1>
      <div className='flex flex-wrap justify-items-startp'>
        {scrapRateData?.map((item, index) => (
          <div key={index} className='card justify-center w-52 p-4 bg-white m-10 rounded-md border-2 shadow-xl bg-center sm:w-52'>
            <div className='p-4'>
              <img src={item.image_url} className='w-25 h-25' alt={item?.item_name} />
            </div>
            <div className='name text-center'>
              <h3 className=' font-bold text-xl'>{item?.item_name}</h3>
              <p>
                Price :
                {item?.rate}
                {' '}
                Rs kg
              </p>
            </div>
            <div className='justify center p-4'>{renderPickupButton()}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ScrapRates;

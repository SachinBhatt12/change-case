import React, { useEffect } from 'react';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchScrap } from '../../redux/features/scraprateSlice';
import Error from '../Error';
import Loader from '../Loader';

const useScrollToTop = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, [location]);
};

function ScrapRates() {
  const navigate = useNavigate();
  useScrollToTop();

  const authtoken = localStorage.getItem('AuthToken');
  const dispatch = useDispatch();
  const { loading, data: scrapData, error } = useSelector((state) => state.scrapDetails);
  if (loading) {
    <Loader />;
  } else if (error) {
    <Error />;
  }

  const scrapRateData = scrapData?.data;

  const handleOnClick = (item) => {
    navigate('/pickuprequest', { state: { pickupData: item } });
  };

  useEffect(() => {
    // eslint-disable-next-line no-unused-vars
    dispatch(fetchScrap())?.then((response) => {});
  }, [dispatch]);

  const renderPickupButton = (item) => {
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
      <div onClick={() => handleOnClick(item)}>
        <button type='submit' className='w-full border-2 text-green-500 hover:text-white hover:bg-green-600 bg-white p-1 focus:bg-green-600'>
          Pickup Request
        </button>
      </div>
    );
  };

  return (
    <div className='m-auto sm:ml-24 pt-28 px-4 rounded '>
      <h1 className='text-center text-3xl'>Scrap Rates</h1>
      <div className='flex flex-wrap justify-items-startp gap-2'>
        {scrapRateData?.map((item, index) => (
          <div key={index} className='card justify-center w-48 p-4 bg-white m-1 rounded-md border-2 shadow-xl bg-center sm:w-56 sm:m-5'>
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
            <div className='justify center p-4'>{renderPickupButton(item)}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ScrapRates;

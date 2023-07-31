import React, { useEffect } from 'react';
import { NavLink, useLocation ,useNavigate} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchScrap } from '../../redux/features/scraprateSlice';
import Error from '../Error';
import Loader from '../Loader';


const useScrollToTop = () => {
  const location = useLocation();
 
  useEffect(() => {
    window.scrollTo({ top: 0 })
  }, [location]);
};

function ScrapRates() {
  const navigate=useNavigate();
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
  }

 

  useEffect(() => {
    // eslint-disable-next-line no-unused-vars
    dispatch(fetchScrap())?.then((response) => { });
  }, [dispatch]);

  const renderPickupButton = (item) => {
    if (authtoken === null) {
      return (
        <NavLink to='/'>
          <button type='submit' className='w-full border-2 border-green-500 text-green-500 hover:text-white hover:bg-green-600 bg-white p-1'>
            Pickup Request
          </button>
        </NavLink>
      );
    }
    return (
      <NavLink to='/pickuprequest'>
        <button type='submit' className='w-full border-2 border-green-500 rounded-xl py-2 font-medium text-green-500 hover:text-white hover:bg-green-600 bg-white p-1 focus:bg-green-600'>
          Pickup Request
        </button>
      </div>
    );
  };

  return (
    <div className='w-full text-center mb-20'>
      <div className='w-11/12 inline-block'>
    <div className='grid grid-cols-1 sm:grid-cols-3 gap-5 pt-28 px-4'>
      <h1 className='col-span-full text-center text-4xl font-medium mb-10'>Scrap Rates</h1>
      {scrapRateData?.map((item, index) => (
        <div key={index} className='bg-white rounded-3xl border-2 shadow-xl'>
          <div className='w-full flex justify-center p-3'>
            <img src={item.image_url} className='w-full' alt={item?.item_name} />
          </div>
          <div className='name text-center'>
            <h3 className='font-bold text-xl'>{item?.item_name}</h3>
            <p className='mt-2'>
              Price: {item?.rate} Rs/kg
            </p>
          </div>
          <div className='justify-center p-4'>{renderPickupButton()}</div>
        </div>
      ))}
    </div>
    </div>
    </div>
  );
}

export default ScrapRates;

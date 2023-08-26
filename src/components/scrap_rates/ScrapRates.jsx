import React, { useEffect } from 'react';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { NavHashLink } from 'react-router-hash-link';
import { fetchScrap } from '../../redux/features/scraprateSlice';
import Error from '../Error';
import Loader from '../Loader';
import two_ton from '../../assets/two_ton.png';
import top_load from '../../assets/top_load.png';
import tablet from '../../assets/tablet.png';
import steel from '../../assets/steel.png';
import stablizer from '../../assets/stablizer.png';
import split_one_ton from '../../assets/split_one_ton.png';
import plastic_cooler from '../../assets/plastic_cooler.png';
// import plastic_bottle from '../../assets/plastic_bottle.png';
import newspaper from '../../assets/newspaper.png';
import motor from '../../assets/motor.png';
import microwave from '../../assets/microwave.png';
import lcd_monitor from '../../assets/lcd_monitor.png';
import iron from '../../assets/iron.png';
import iron_cooler from '../../assets/iron_cooler.png';
import inverter from '../../assets/inverter.png';
// import household from '../../assets/household.png';
// import household_element from '../../assets/household_element.png';
import glass from '../../assets/glass.png';
import geyser from '../../assets/geyser.png';
import fridge from '../../assets/fridge.png';
import ctr_monitor from '../../assets/ctr_monitor.png';
import cpu from '../../assets/cpu.png';
import copper from '../../assets/copper.jpg';
import cardboard from '../../assets/cardboard.png';
import car from '../../assets/car.jpg';
import brass from '../../assets/brass.png';
import bottles from '../../assets/bottles.png';
import books from '../../assets/books.png';
import bike from '../../assets/bike.png';
import Aluminium from '../../assets/Aluminium.png';
// nnn
import ceiling from '../../assets/ceiling.png';
import heavy_e_waste from '../../assets/heavy_e_waste.png';
import crt from '../../assets/crt.png';

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
        <NavHashLink to='/#herobar'>
          <button type='submit' className='w-full border-2 py-1 font-medium border-green-500 text-green-500 hover:text-white hover:bg-green-600 bg-white focus:bg-green-600 rounded-lg'>
            Pickup Request
          </button>
        </NavHashLink>
      );
    }
    return (
      <div onClick={() => handleOnClick(item)}>
        <button type='submit' className='w-full border-2 py-1 font-medium border-green-500 text-green-500 hover:text-white hover:bg-green-600 bg-white focus:bg-green-600 rounded-lg'>
          Pickup Request
        </button>
      </div>
    );
  };
  return (
    <div className='w-full text-center'>
      <div className='w-11/12 mx-auto pt-28 px-4'>
        <h1 className='text-center text-5xl text-[#3E3E3E] '>Scrap Rates</h1>
        <div className='pt-20 mb-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-2 justify-items-center'>
          {scrapRateData?.map((item, index) => (
            <div key={index} className=' w-72 sm:w-64 md:w-72 lg:w-72 justify-center p-4 my-4 bg-white rounded-md border-2 shadow-xl bg-center'>
              <div className='h-80'>
                <div className='flex justify-center align-middle'>
                  <img src={item.image_url} className='h-48 w-76' alt={item?.item_name} />
                </div>
                <div className='name text-center'>
                  <h3 className='font-bold text-xl mt-2'>{item?.item_name}</h3>
                  <p className='mt-2'>
                    Price: Rs
                    {item?.rate}
                  </p>
                </div>
              </div>
              <div className='justify-center p-2 mt-2'>{renderPickupButton(item)}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ScrapRates;

import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import newspaper from '../../assets/newspaper.png';
import books from '../../assets/books.png';
import cardboard from '../../assets/cardboard.png';
import PlasticBottle from '../../assets/pastic_bottle.png';
import iron from '../../assets/iron.png';
import glass from '../../assets/glass.png';
import { fetchScrap } from '../../redux/features/scraprateSlice';

const scrapitems = [
  { src: newspaper, item_name: 'Newspaper' },
  { src: books, item_name: 'Books' },
  { src: glass, item_name: 'Glass' },
  { src: cardboard, item_name: 'CardBoard' },
  { src: iron, item_name: 'Iron' },
  { src: PlasticBottle, item_name: 'Plastic and Bottles' },
];

function ScrapRates() {
  const authtoken = localStorage.getItem('AuthToken');
  const dispatch = useDispatch();
  const { loading, data: scrapData, error } = useSelector((state) => state.scrapDetails);

  console.log(scrapData);

  useEffect(() => {
    dispatch(fetchScrap()).then((response) => {
      const { payload: data } = response;
      // console.log(data, 'data from response');
    });
  }, [dispatch]);

  const renderPickupButton = () => {
    if (authtoken === '') {
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
    <div className='font-bold ml-28 pt-28 px-4 rounded'>
      <h1 className='text-center text-3xl'>Scrap Rates</h1>
      <div className='flex flex-wrap justify-items-startp'>
        {scrapitems.map((item, index) => (
          <div key={index} className='card min-h-0 justify-center w-1/6 p-4 bg-white m-10 rounded-md border-2 shadow-xl bg-center'>
            <div className='p-4'>
              <img src={item.src} className='w-25 h-25' alt={item.name} />
            </div>
            <div className='name text-center'>
              <h3 className='text-xl'>{item.name}</h3>
              <p>Price :Rs kg</p>
            </div>
            <div className='justify center p-4'>{renderPickupButton()}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ScrapRates;

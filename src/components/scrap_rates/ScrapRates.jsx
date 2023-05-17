import React from 'react';
import { NavLink } from 'react-router-dom';
import newspaper from '../../assets/newspaper.png';
import books from '../../assets/books.png';
import cardboard from '../../assets/cardboard.png';
import PlasticBottle from '../../assets/pastic_bottle.png';
import iron from '../../assets/iron.png';
import glass from '../../assets/glass.png';

const scrapitems = [
  { src: newspaper, name: 'Newspaper' },
  { src: books, name: 'Books' },
  { src: cardboard, name: 'CardBoard' },
  { src: PlasticBottle, name: 'Plastic and Bottles' },
  { src: iron, name: 'Iron' },
  { src: glass, name: 'Glass' },
];

function ScrapRates() {
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
              <p>price :Rs kg</p>
            </div>
            <div className='justify center p-4'>
              <NavLink to='/pickuprequest'>
                <button type='submit' className='w-full border-2 text-green-500 hover:text-white hover:bg-green-600 bg-white p-1 focus:bg-green-600 '>
                  Pickup Request
                </button>
              </NavLink>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ScrapRates;

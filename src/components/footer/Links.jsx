import React from 'react';
import UsefulLinks from './Links.json';

function Links() {
  return (
    <div className='text-white text-2xl w-28'>
      <h1 className='font-medium'>Links</h1>
      {UsefulLinks?.map((link, index) => (
        <ul key={index} className='text-lg'>
          <li className='pt-3 text-sm md:text-lg cursor-pointer'>{link.label}</li>
        </ul>
      ))}
    </div>
  );
}

export default Links;

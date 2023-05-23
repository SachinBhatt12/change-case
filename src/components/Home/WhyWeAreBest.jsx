import React from 'react';
import { NavLink } from 'react-router-dom';
import element from '../../assets/element.svg';
import check from '../../assets/check.png';
import WeAreTheBest from '../../assets/we_are_the_best.svg';

const checkboxes = [
  { label: 'Best Price' },
  { label: 'Digital weighing process' },
  { label: 'Hassle-free pickup' },
  { label: '9 AM to 7 PM support helpline' },
  { label: 'Best Price' },
  { label: 'Digital weighing process' },
];

function WhyWeAreBest() {
  const handleNavlink = () => {
    window.scrollTo(0, 0);
  };
  return (
    <div className='container' id='whyUs'>
      <div className='grid grid-cols-1 sm:grid-cols-2 gap-8 p-5 sm:p-20'>
        <div className='w-full h-72 sm:h-auto'>
          <img src={WeAreTheBest} className='mx-auto h-full' alt='why we are the best' />
        </div>
        <div className='flex flex-col justify-between relative'>
          <div className='self-end md:self-auto absolute right-2 -top-5'>
            <img src={element} alt='star design' />
          </div>
          <h1 className='text-center md:text-left text-4xl font-semibold'>Why we are the best</h1>
          <p className='py-5 text-md'>
            Kabadi Jee removes
            {' '}
            junk
            {' '}
            from your home without any difficulty. We add a technological example to get rid of scrap in exchange for valuable money. The Kabadi Jee offers its customers an
            environmental report detailing their ecological impact in numbers once the discarded materials are dropped off at the appropriate recycling facilities.
          </p>
          <div className='checkboxes w-full md:w-80'>
            {checkboxes.map((checkbox, index) => (
              <div key={index} className='flex items-center gap-2'>
                <img src={check} className='py-1' alt='' />
                <span className='text-xl'>{checkbox.label}</span>
              </div>
            ))}
          </div>
          <div className='button pt-8'>
            <NavLink to='/scraprates'>
              <button type='submit' onClick={handleNavlink} className='getstarted'>
                Get Started
              </button>
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WhyWeAreBest;

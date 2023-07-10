import React from 'react';
import { NavLink } from 'react-router-dom';
import element from '../../assets/element.svg';
import check from '../../assets/check.png';
import WeAreTheBest from '../../assets/we_are_the_best.svg';

const checkboxes = [
  { label: 'Job Creation' },
  { label: 'Environmental Sustainability' },
  { label: 'Economic Benefits' },
  { label: 'Waste Reduction' },
  { label: 'Resource Conservation' },
  { label: 'Community Engagement' },
];

function WhyWeAreBest() {
  const handleNavlink = () => {
    window.scrollTo(0, 0);
  };
  return (
    <div className='w-full m-auto mb-32 grid sm:w-full md:w-full lg:w-full' id='whyUs'>
      <div className='grid md:grid-cols-2 gap-10'>
        <div className='w-10/12 m-auto md:m-auto'>
          <img src={WeAreTheBest} className='mx-auto w-full' alt='why we are the best' />
        </div>
        <div className='gfgvs m-6 grid justify-between relative sm:w-11/12 md:m-5'>
          <div className='self-end md:self-auto absolute right-2 -top-5 -z-10'>
            <img src={element} alt='star design' />
          </div>
          <h1 className='w-full text-center text-4xl font-semibold'>Why we are the best</h1>
          <p className='w-full py-5 text-xl md:w-full'>
            Kabadi Jee removes junk from your home without any difficulty. We add a technological example to get rid of scrap in exchange for valuable money. The Kabadi Jee offers its customers an
            environmental report detailing their ecological impact in numbers once the discarded materials are dropped off at the appropriate recycling facilities.
          </p>
          <div className='checkboxes w-auto grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2'>
            {checkboxes.map((checkbox, index) => (
              <div key={index} className='w-auto flex items-center gap-2'>
                <img src={check} className='py-1' alt='' />
                <span className='text-xl text-left'>{checkbox.label}</span>
              </div>
            ))}
          </div>
          <div className='button pt-8'>
            <NavLink to='/scraprates'>
              <button type='submit' onClick={handleNavlink} className='getstarted rounded-xl pl-14 pr-14 w-[300px] sm:w-11/12'>
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

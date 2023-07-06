/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import household from '../../assets/household.svg';
import HouseholdElement from '../../assets/household_element.svg';

function ServiceForHouseHold() {
  return (
    <div className='mt-48' id='household'>
      <h1 className='text-5xl text-center my-10'>Our Services for Household & Cooperates</h1>
      <div className='text-white flex justify-evenly bg-gray-500'>
        <div className='container pt-10 px-10 flex-col justify-center items-center md:flex-row'>
          <div className='image w-80 ml-12 flex justify-center'>
            <img className='w-full' src={household} alt='' />
          </div>
          <br />
          <div className='content relative w-11/12'>
            <div className='img absolute -top-5 -right-24'>
              <img src={HouseholdElement} alt='household element' />
            </div>
            <div className='subcontent pt-20'>
              <h2 className='text-center text-4xl mb-5 md:text-end'>HouseHolds</h2>
              <p className='text-center w-auto mb-5 md:text-end md:'>
                Any item that is left over or wasted after doing routine domestic tasks is referred to as household scrap. This can include outdated clothing, damaged furniture, discarded electronics,
                and other non-essential household items. It's crucial to properly dispose of household scrap in order to protect the environment and maintain public safety and health. We " Kabadi Jee
                ” will help you in minimizing your household scrap.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ServiceForHouseHold;

import React from 'react';

function CarouselItem({ customerReviews }) {
  return (
    <div className='grid justify-around m-10 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-1'>
      {customerReviews.map((review, index) => (
        <div key={index} className=''>
          <div className='border-2 py-10 w-80 px-10 shadow-lg text-left rounded-2xl p-4 h-full'>
            <div className='flex items-center mb-4'>
              <img src={review.src} alt='profile' className='w-12 h-12 rounded-full mr-4' />
              <div className='namedetail'>
                <h3 className='text-xl font-bold'>{review.name}</h3>
                <p className='text-xl'>{review.userType}</p>
              </div>
            </div>
            <div className='comment'>
              <p className='text-sm italic'>
                &quot;
                {review.text}
                &quot;
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default CarouselItem;

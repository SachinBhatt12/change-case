import React from 'react';

function TransactionTable(props) {
  const { name, heading } = props;
  return (
    <>
      {' '}
      <div className='w-full text-center'>
        <div className='w-11/12 inline-block'>
          <h2 className='text-2xl py-5 text-start font-bold'>{name}</h2>
          <hr className='border-1 mb-5'></hr>
          <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
            <table className='w-full text-sm text-left text-gray-500 dark:text-gray-400'>
              <thead className='text-xs text-gray-700 uppercase bg-gray-50 gray:bg-gray-700 dark:text-gray-400'>
                <tr className=''>
                  {heading?.map((head, index) => (
                    <th key={index} scope="col" className="px-6 py-3 text-black" >{head}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td />
                  <td />
                  <td />
                  <td />
                  <td />
                  <td />
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}

export default TransactionTable;

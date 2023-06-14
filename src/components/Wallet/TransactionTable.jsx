import React from 'react';

function TransactionTable(props) {
  const { name, heading } = props;
  return (
    <>
      {' '}
      <div className=''>
        <h2 className='text-xl py-5'>{name}</h2>
        <hr />
        <div className='table'>
          <table>
            <thead>
              <tr className='m-10'>
                {heading?.map((head, index) => (
                  <th key={index} className='pr-96 py-10'>{head}</th>
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
    </>
  );
}

export default TransactionTable;

/* eslint-disable camelcase */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Loader from '../Loader';
import Error from '../Error';
import { customerOrderDetails } from '../../redux/features/customerorderslice';

function MyOrders() {
  const dispatch = useDispatch();
  const userid = localStorage.getItem('userid');
  const { loading, data: customerOrderdata, error } = useSelector((state) => state.customerdetails);
  if (loading) {
    <Loader />;
  } else if (error) {
    <Error />;
  }

  const myorders = customerOrderdata?.data;
  const groupedData = myorders.reduce((result, item) => {
    const pickup_date = item.pickuprequest__pickup_date;
    if (!result[pickup_date]) {
      result[pickup_date] = [];
    }
    result[pickup_date].push(item);
    return result;
  }, {});
  console.log(groupedData);

  useEffect(() => {
    // eslint-disable-next-line no-unused-vars
    dispatch(customerOrderDetails(userid))?.then((response) => {});
  }, [dispatch]);

  return (
    <div>
      <div className='m-auto sm:ml-24 pt-28 px-4 rounded '>
        <div className='table'>
          <h2 className='text-2xl text-left'>Live Orders</h2>
          <table>
            <thead>
              <tr>
                <th className='p-12'>Order Id</th>
                <th className='p-12'>Customer</th>
                <th className='p-12'>Category</th>
                <th className='p-12'>Quantity</th>
                <th className='p-12'>Pickup Date</th>
                <th className='p-12'>Time</th>
                <th className='p-12'>Pickup OTP</th>
                <th className='p-12'>Status</th>
              </tr>
            </thead>
          </table>
        </div>
        <div className=''>
          <h2 className='text-2xl text-left '>Order History</h2>
          <table>
            <thead>
              <tr>
                <th className='p-12'>Order Id</th>
                <th className='p-12'>Pickup Date</th>
                <th className='p-12'>Time</th>
                <th className='p-12'>Pickup Category</th>
                <th className='p-12'>Pickup Quantity</th>
                <th className='p-12'>Paid Amount</th>
                <th className='p-12'>Payment Method</th>
              </tr>
            </thead>
            <tbody>
                {groupedData.map((item,index)=>{
                    return (
                        <td>{item.}</td>
                        <td>{item.}</td>
                        <td>{item.}</td>
                        <td>{item.}</td>
                        <td>{item.}</td>
                        <td>{item.}</td>
                        <td>{item.}</td>
                    )
                })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default MyOrders;

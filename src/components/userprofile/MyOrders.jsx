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

  if (myorders) {
    const requestedList = [];
    var completedList = [];

    myorders.forEach((value) => {
      if (value.pickuprequest__status === 'requested') {
        requestedList.push(value); // Add to requestedList if the status is 'requested'
      } else if (value.pickuprequest__status === 'completed') {
        completedList.push(value); // Add to completedList if the status is 'completed'
      }
    });

    var groupedData = requestedList?.reduce((result, item) => {
      const pickup_date = item?.pickuprequest__pickup_date;
      if (!result[pickup_date]) {
        result[pickup_date] = [];
      }
      result[pickup_date].push(item);
      return result;
    }, {});
  }
  console.log('->', groupedData);
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
            <tbody>
              {groupedData
                && Object.keys(groupedData).map((groupName, index) => (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{groupedData[groupName][0].name}</td>
                    <td>
                      {/* Use another nested map to display the item details */}
                      {groupedData[groupName].map((item, itemIndex) => (
                        <div key={itemIndex}>{item.pickuprequest__pickuprequestitem__item_id__item_name}</div>
                      ))}
                    </td>
                    <td>
                      {groupedData[groupName].map((item, itemIndex) => (
                        <div key={itemIndex}>{item.pickuprequest__pickuprequestitem__weight}</div>
                      ))}
                    </td>
                    <td>{groupedData[groupName][0].pickuprequest__pickup_date}</td>
                    <td>{groupedData[groupName][0].pickuprequest__pickup_time}</td>
                    <td>{groupedData[groupName][0].pickuprequest__confirm_otp}</td>
                    <td>{groupedData[groupName][0].pickuprequest__status}</td>
                  </tr>
                ))}
            </tbody>
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
                <th className='p-12'>Pickup OTP</th>
              </tr>
            </thead>
            <tbody>
              {completedList
                && completedList.map((item, index) => {
                  const paidAmount = item.pickuprequest__pickuprequestitem__weight * item.pickuprequest__pickuprequestitem__item_id__rate;
                  return (
                    <tr key={index}>
                      <td>{index + 1}</td>
                      <td>{item.pickuprequest__pickup_date}</td>
                      <td>{item.pickuprequest__pickup_time}</td>
                      <td>{item.pickuprequest__pickuprequestitem__item_id__item_name}</td>
                      <td>{item.pickuprequest__pickuprequestitem__weight}</td>
                      <td>{paidAmount}</td>
                      <td>UPI</td>
                      <td>{item.pickuprequest__confirm_otp}</td>
                    </tr>
                  );
                })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default MyOrders;

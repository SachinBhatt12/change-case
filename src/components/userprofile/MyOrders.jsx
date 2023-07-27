/* eslint-disable camelcase */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Loader from '../Loader';
import Error from '../Error';
import { customerOrderDetails } from '../../redux/features/customerorderslice';
import { fetchOrderList } from '../../redux/features/fetchOrderSlice';

function MyOrders() {
  const dispatch = useDispatch();
  useEffect(() => {
    // eslint-disable-next-line no-unused-vars
    dispatch(fetchOrderList())?.then((response) => {
      // console.log('red', response);
    });
  }, [dispatch]);
  const userid = localStorage.getItem('userid');

  const { loading, data: orderData, error } = useSelector((state) => state.orderDetails);
  if (loading) {
    <Loader />;
  } else if (error) {
    <Error />;
  }

var Id=localStorage.getItem("userid");
const myItem=orderData?.filter((item)=>{
  return item.user_id==Id;
})
if (myItem) {
    var requestedList = [];

    var completedList = [];

    myItem.forEach((item) => {
      if (item.order_status === "completed" || item.order_status === "complete") {
        completedList.push(item);
      } else {
        requestedList.push(item);
      }
    });
  }
  
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

              {
                requestedList?.map((data, index) => (

                  <tr key={index}>
                    <td>{data.order_id}</td>
                    <td>{data.user__name}</td>
                    <td>{data.orderitems__item_id__item_name===null?data.pickuprequestitem__item_id__item_name:data.orderitems__item_id__item_name}</td>
                    <td>{data.orderitems__quantity===null?data.pickuprequestitem__weight:data.orderitems__quantity}</td>
                    <td>{data.pickup_date}</td>
                    <td>{data.pickup_time}</td>
                    <td>{data.confirm_otp}</td>
                    <td>{data.order_status === null ? "Requested" : data.order_status === "onhold" ? "Allocated" : data.order_status}</td>
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

              {
                completedList?.map((data, index) => {
                  return (
                    <tr key={index}>
                    <td>{data.user_id}</td>
                    <td>{data.pickup_date}</td>
                  
                    <td>{data.pickup_time}</td>
                    <td>{data.orderitems__item_id__item_name}</td>
                    <td>{data.orderitems__quantity}</td>
                    <td>{data.total_amount}</td>
                    <td>{"UPI"}</td>
                    <td>{data.confirm_otp}</td>
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

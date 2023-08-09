/* eslint-disable camelcase */
import React, { useEffect,useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Loader from '../Loader';
import Error from '../Error';
import { customerOrderDetails } from '../../redux/features/customerorderslice';
import { fetchOrderList } from '../../redux/features/fetchOrderSlice';
import { fetchUserDetails } from '../../redux/features/userDetailsSlice';

function MyOrders() {
  const [userOtp,setUserOtp]=useState();
  const userid = localStorage.getItem('userid');
  const dispatch = useDispatch();
  useEffect(() => {
    // eslint-disable-next-line no-unused-vars
    dispatch(fetchOrderList())?.then((response) => {
    });
  }, [dispatch]);
  useEffect(() => {
    dispatch(fetchUserDetails(userid))?.then((response) => {
      setUserOtp(response.payload.data.pickup_otp);
    });
  }, []);
  const { loading, data: orderData, error } = useSelector((state) => state.orderDetails);
  if (loading) {
    <Loader />;
  } else if (error) {
    <Error />;
  }
  var Id = localStorage.getItem('userid');
  const myItem = orderData?.filter((item) => {
    return item.user_id == Id;
  });

  if (myItem) {
    var requestedList = [];
    var completedList = [];

    myItem.forEach((item) => {
      if (item.order_status === 'completed' || item.order_status === 'complete') {
        completedList.push(item);
      } else {
        requestedList.push(item);
      }
    });
  }

  var newRequestedList = requestedList
    ? Object.values(requestedList).reduce((accumulator, data) => {
      if (accumulator[data.created_at]) {
        // If the id already exists in the accumulator, merge the data
        accumulator[data.created_at] = {
          ...accumulator[data.created_at],
          pickuprequestitem__item_id__item_name: [...accumulator[data.created_at].pickuprequestitem__item_id__item_name, data.pickuprequestitem__item_id__item_name],
          pickuprequestitem__weight:[...accumulator[data.created_at].pickuprequestitem__weight,data.pickuprequestitem__weight]
        };
      } else {
        // If the id doesn't exist in the accumulator, add a new entry
        accumulator[data.created_at] = { ...data };
        accumulator[data.created_at].pickuprequestitem__item_id__item_name = [data.pickuprequestitem__item_id__item_name];
        accumulator[data.created_at].pickuprequestitem__weight = [data.pickuprequestitem__weight];
      }
      return accumulator;
    }, [])
    : [];
  var newCompletedList = completedList
    ? Object.values(completedList).reduce((accumulator, data) => {
      if (accumulator[data.created_at]) {
        // If the id already exists in the accumulator, merge the data
        accumulator[data.created_at] = {
          ...accumulator[data.created_at],
          pickuprequestitem__item_id__item_name: [...accumulator[data.created_at].pickuprequestitem__item_id__item_name, data.pickuprequestitem__item_id__item_name],
          pickuprequestitem__weight:[...accumulator[data.created_at].pickuprequestitem__weight,data.pickuprequestitem__weight]
        };
      } else {
        // If the id doesn't exist in the accumulator, add a new entry
        accumulator[data.created_at] = { ...data };
        accumulator[data.created_at].pickuprequestitem__item_id__item_name = [data.pickuprequestitem__item_id__item_name];
        accumulator[data.created_at].pickuprequestitem__weight = [data.pickuprequestitem__weight];
      }
      return accumulator;
    }, [])
    : [];
  useEffect(() => {
    // eslint-disable-next-line no-unused-vars
    dispatch(customerOrderDetails(userid))?.then((response) => {
    });
  }, [dispatch]);
  return (
    <div>
      <div className='w-full text-center'>
        <div className='w-11/12 inline-block'>
          <div className='flex justify-between'>
          <h2 className="text-2xl text-left mt-24  font-bold mb-10">Live Orders</h2>
          <p className='text-2xl text-left mt-24'>Otp for All the Order <span  className="text-2xl text-left mt-24  font-bold mb-10">{userOtp}</span></p>
          </div>
         
          <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
          
            <table className='w-full text-sm text-left text-gray-500 dark:text-gray-400'>
              <thead className='text-xs text-gray-700 uppercase bg-gray-50 gray:bg-gray-700 dark:text-gray-400'>
                <tr className=''>
                  <th scope="col" className="px-6 py-3 text-black">Order Id</th>
                  <th scope="col" className="px-6 py-3 text-black">Customer</th>
                  <th scope="col" className="px-6 py-3 text-black">Category</th>
                  <th scope="col" className="px-6 py-3 text-black">Quantity</th>
                  <th scope="col" className="px-6 py-3 text-black">Pickup Date</th>
                  <th scope="col" className="px-6 py-3 text-black">Time</th>
                  <th scope="col" className="px-6 py-3 text-black">Status</th>
                </tr>
              </thead>
              <tbody>
                {

                  Object.entries(newRequestedList).reverse().map(([index, data], idx) => (
                    <tr key={index} className={`${
                      idx % 2 === 0 ? 'bg-white-100' : 'bg-green-50'
                    } border-b`}>
                      <td className="px-6 py-4 text-[#000000a6] font-medium">{data.id}</td>
                      <td className="px-6 py-4 text-[#000000a6] font-medium">{data.user__name}</td>
                      <td className="px-6 py-4 text-[#000000a6] font-medium">
                        <ul>
                          {data.pickuprequestitem__item_id__item_name.map((itemName, idx) => (
                            <li key={idx}>
                              {itemName}
                            </li>
                          ))}
                        </ul>
                      </td>
                      <td className="px-6 py-4 text-[#000000a6] font-medium">
                      <ul>
                          {data.pickuprequestitem__weight.map((itemWeight, idx) => (
                            <li key={idx}>
                              {itemWeight}
                            </li>
                          ))}
                        </ul>
                        </td>
                      <td className="px-6 py-4 text-[#000000a6] font-medium">{data.pickup_date}</td>
                      <td className="px-6 py-4 text-[#000000a6] font-medium">{data.pickup_time}</td>
                      <td className={`px-6 py-4 text-[#000000a6] font-medium`}>
                        {data.order_status === null ? 'Requested' : data.order_status === 'onhold' ? 'Allocated' : data.order_status}</td>
                    </tr>
                  ))
                }
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div className='w-full text-center mb-10'>
        <div className='w-11/12 inline-block'>
          <h2 className="text-2xl text-left mt-24 text-center font-bold mb-10">Order History</h2>
          <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className='w-full text-sm text-left text-gray-500 dark:text-gray-400'>
          <thead className='text-xs text-gray-700 uppercase bg-gray-50 gray:bg-gray-700 dark:text-gray-400'>
            <tr>
              <th scope="col" className="px-6 py-3 text-black">Order Id</th>
              <th scope="col" className="px-6 py-3 text-black">Pickup Date</th>
              <th scope="col" className="px-6 py-3 text-black">Time</th>
              <th scope="col" className="px-6 py-3 text-black">Pickup Category</th>
              <th scope="col" className="px-6 py-3 text-black">Pickup Quantity</th>
              <th scope="col" className="px-6 py-3 text-black">Paid Amount</th>
              <th scope="col" className="px-6 py-3 text-black">Payment Method</th>
            </tr>
          </thead>
          <tbody>
            {
              Object.entries(newCompletedList).reverse().map(([index, data], idx) => (
                <tr key={index} className={`${
                  idx % 2 === 0 ? 'bg-white-100' : 'bg-green-50'
                } border-b`} >
                  <td className="px-6 py-4 text-[#000000a6] font-medium">{data.id}</td>
                  <td className="px-6 py-4 text-[#000000a6] font-medium">{data.pickup_date}</td>
                  <td className="px-6 py-4 text-[#000000a6] font-medium">{data.pickup_time}</td>
                  <td className="px-6 py-4 text-[#000000a6] font-medium">
                    <ul>
                      {data.pickuprequestitem__item_id__item_name.map((itemName, idx) => (
                        <li key={idx}>
                          {itemName}
                        </li>
                      ))}
                    </ul>
                  </td>
                  <td className="px-6 py-4 text-[#000000a6] font-medium">
                  <ul>
                          {data.pickuprequestitem__weight.map((itemWeight, idx) => (
                            <li key={idx}>
                              {itemWeight}
                            </li>
                          ))}
                        </ul> 
                        </td>               
                  <td className="px-6 py-4 text-[#000000a6] font-medium">{data.total_amount}</td>
                  <td className="px-6 py-4 text-[#000000a6] font-medium">{"UPI"}</td>
                </tr>
              ))
            }
          </tbody>
        </table>
        </div>
        </div>
        </div>
      </div>
  );
}
export default MyOrders;

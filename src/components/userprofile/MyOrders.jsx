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
    });
  }, [dispatch]);
  const userid = localStorage.getItem('userid');

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
          };
        } else {
          // If the id doesn't exist in the accumulator, add a new entry
          accumulator[data.created_at] = { ...data };
          accumulator[data.created_at
          ].pickuprequestitem__item_id__item_name = [data.pickuprequestitem__item_id__item_name];
        }
        return accumulator;
      }, [])
    : [];

  var newCompletedList = completedList
    ? Object.values(completedList).reduce((accumulator, data) => {
        if (accumulator[data.id]) {
          // If the id already exists in the accumulator, merge the data
          accumulator[data.id] = {
            ...accumulator[data.id],
            pickuprequestitem__item_id__item_name: [...accumulator[data.id].pickuprequestitem__item_id__item_name, data.pickuprequestitem__item_id__item_name],
          };
        } else {
          // If the id doesn't exist in the accumulator, add a new entry
          accumulator[data.id] = { ...data };
          accumulator[data.id].pickuprequestitem__item_id__item_name = [data.pickuprequestitem__item_id__item_name];
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
      <div className="m-auto sm:ml-24 pt-28 px-4 rounded ">
        <div className="table">
          <h2 className="text-2xl text-left">Live Orders</h2>
          <table>
            <thead>
              <tr className=''>
                <th className="p-12">Order Id</th>
                <th className="p-12">Customer</th>
                <th className="p-12">Category</th>
                <th className="p-12">Quantity</th>
                <th className="p-12">Pickup Date</th>
                <th className="p-12 pr-20">Time</th>
                <th className="p-12">Status</th>
              </tr>
            </thead>
            <tbody>
              {
               
                Object.entries(newRequestedList ).map(([index, data]) => (
                  <tr key={index} className=''>
                    <td className="p-12">{data.id}</td>
                    <td className="p-12">{data.user__name}</td>
                    <td  className="p-5">
                    <ul>
                      {data.pickuprequestitem__item_id__item_name.map((itemName, idx) => (
                        <li  key={idx}>
                          {itemName}
                        </li>
                      ))}
                    </ul>
                  </td>
                  <td className="p-12">{data.orderitems__quantity === null ? data.pickuprequestitem__weight : data.orderitems__quantity}</td>
                  <td className="p-12">{data.pickup_date}</td>
                  <td className="p-12">{data.pickup_time}</td>
                  <td className={`p-12`}>
                    {data.order_status === null ? 'Requested' : data.order_status === 'onhold' ? 'Allocated' : data.order_status}</td>
                    </tr>
                ))
              }
            </tbody>
          </table>
        </div>
        <div className="">
          <h2 className="text-2xl text-left ">Order History</h2>
          <table>
            <thead>
              <tr>
                <th className="p-12">Order Id</th>
                <th className="p-12">Pickup Date</th>
                <th className="p-12">Time</th>
                <th className="p-12">Pickup Category</th>
                <th className="p-12">Pickup Quantity</th>
                <th className="p-12">Paid Amount</th>
                <th className="p-12">Payment Method</th>
              </tr>
            </thead>
            <tbody>
            {  
               Object.entries(newCompletedList).map(([index, data]) => (
                 <tr key={index} >
                   <td>{data.id}</td>
                   <td>{data.user__name}</td>
                   <td >
                   <ul>
                     {data.pickuprequestitem__item_id__item_name.map((itemName, idx) => (
                       <li  key={idx}>
                         {itemName}
                       </li>
                     ))}
                   </ul>
                 </td>
                 <td>{data.orderitems__quantity === null ? data.pickuprequestitem__weight : data.orderitems__quantity}</td>
                 <td>{data.pickup_date}</td>
                 <td>{data.pickup_time}</td>
                 <td>{data.order_status === null ? 'Requested' : data.order_status === 'onhold' ? 'Allocated' : data.order_status}</td>
                   </tr>
               ))
             }
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default MyOrders;

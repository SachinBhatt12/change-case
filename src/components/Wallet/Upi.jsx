import React from 'react'
import { MdOutlineCancel } from "react-icons/md";
import { useDispatch, useSelector } from 'react-redux';
import { fetchUserDetails } from '../../redux/features/userDetailsSlice';
import { useEffect, useState } from "react";

function Upi(props) {
    const userid = localStorage.getItem('userid');
  const dispatch = useDispatch();
  const [upiId, setUpiId] = useState('');

  useEffect(() => {
    dispatch(fetchUserDetails(userid));
  }, [dispatch]);

  const userDetails = useSelector((state) => state.userSlice.data);

  useEffect(() => {
    if (userDetails && userDetails.data.upiId) {
      setUpiId(userDetails.data.upiId);
    }
  }, [userDetails]);

    return (
        <div>
            <div className="fixed z-50 inset-0 flex bg-opacity-50 bg-gray-300 justify-center items-center">
                <div className="bg-white relative p-10 w-1/2 m-48">
                    <MdOutlineCancel
                        className="absolute top-0 right-0 cursor-pointer"
                        style={{ color: "black" }}
                        size={32}
                        onClick={() => props.setShowPopup(false)}
                    />
                    <div>
                        <h1 className="text-2xl text-center font-bold mb-10 text-black">
                            Payment
                        </h1>
                        <label htmlFor="email address" className="text-black font-semibold">
                            UPI Id
                        </label>
                        <br />
                        <input
                            type="email"
                            name="upiId"
                            className="inputCommonCss w-1/2 bg-white text-black"
                            placeholder="Enter UPI Id"
                            value={upiId}
                            required
                            readOnly
                        />
                        </div>
                        <div className='mt-10'>
                        <label htmlFor="email address" className="text-black font-semibold">
                            Amount
                        </label>
                        <br />
                        <input
                            type="email"
                            name="upi"
                            className="inputCommonCss w-1/2 bg-white text-black"
                              value={props.amount}
                            required
                            readOnly
                        />

                        <div className="flex justify-center mt-10">
                            <button
                                type="submit"
                                className="rounded-xl px-10 py-2 bg-[#27AE76] text-white"
                                onClick={() => handleClick()}
                            >
                                Pay
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Upi
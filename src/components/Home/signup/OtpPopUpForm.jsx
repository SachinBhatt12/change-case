import React, { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { Navigate } from "react-router-dom";
import { verifyOtp } from "../../../redux/api";
function OtpPopUpForm(props) {
  let currentOtpIndex = 0;
  const [redirect, setRedirect] = useState(false);
  const [otp, setOtp] = useState(new Array(4).fill(null));
  const [activeOtpIndex, setActiveOtpIndex] = useState(0);
  const dispatch = useDispatch();

  const [count, setCount] = useState(2);
  const inputRef = useRef(null);
  const newOtp = otp.join('');

  const handleChange = (event) => {
    event.preventDefault();
    const { value } = event.target;
    newOtp[currentOtpIndex] = value.substring(value.length - 1);
    if (!value) {
      setActiveOtpIndex(currentOtpIndex - 1);
    } else {
      setActiveOtpIndex(currentOtpIndex);
    }
    setOtp(newOtp);
    setActiveOtpIndex(currentOtpIndex + 1);
  };
  const handleKeyPress = ({ key }, index) => {
    currentOtpIndex = index;
    if (key === "Backspace" || key === "ArrowLeft") {
      const previousIndex = index - 1;
      if (previousIndex >= 0) {
        currentOtpIndex = previousIndex;
        setActiveOtpIndex(currentOtpIndex);
      }
    }
    if (key === "Esc") {
      setShowPopup(false);
    }
  };

  const handleSubmit = async (id=props.id,newOtp=otp.join('')) => {
    console.log(newOtp)
    try {
      const response = await verifyOtp(id, newOtp); // Pass newOtp as argument
      console.log(response);
      if (response?.message === "Successfully verified the user.") {
        props.setShowPopup(false);
      }
    } catch (error) {
      console.log(error);
      // Handle the error here
    }
  };
  const handleRedirect = () => {
    window.location.href = "/scraprates";
  };

  const ResendOtp = (e) => {
    props.setShowPopup(false);
    if (count > 0) {
      setCount(count - 1);
    }
  };
  useEffect(() => {
    if (activeOtpIndex === 4) {
      handleSubmit(props.id,newOtp);
    }
    if (inputRef.current !== null) {
      inputRef.current.focus();
    }
  }, [activeOtpIndex]);

  return (
    <>
      <div className="fixed z-50 inset-0 overflow-y-auto bg-black bg-opacity-50 flex -flex-col justify-center items-center ">
        <div className="bg-white p-10 rounded-xl">
          <div className="flex">
            <h1 className="mx-auto text-xl font-bold justify-center">
              Otp Verification
            </h1>
            <p className="ml-auto">Attempts Left {count}</p>
          </div>
          <h3 className="py-3 text-lg">
            Otp sent to phone number +91 {props.mobile}
          </h3>
          <form onSubmit={(event) => handleSubmit(props.id, otp.join(''))}>
            <div className="flex justify-center pb-10">
              {otp.map((value, index) => {
                return (
                  <div key={index}>
                    <input
                      ref={index === activeOtpIndex ? inputRef : null}
                      type="number"
                      name="otp1"
                      className="otpText"
                      onChange={handleChange}
                      onKeyDown={({ key }) => handleKeyPress({ key }, index)}
                      value={otp[index]}
                    />
                  </div>
                );
              })}
            </div>
          </form>
          <div className="flex justify-between my-3">
            <p className="text-gray-500">The Otp is valid for 15 minutes</p>
            <button
              className="text-blue-600 border-2 p-0.5"
              onClick={ResendOtp}
            >
              Resend Otp
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
export default OtpPopUpForm;

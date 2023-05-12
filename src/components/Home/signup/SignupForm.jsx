import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, useNavigate } from "react-router-dom";
import { register } from "../../../redux/features/authSlice";
import OtpPopUpForm from "./OtpPopUpForm";

function SignupForm() {
  const [FormData, setFormData] = useState({
    email: "",
    phone_number: "",
  });
  const { email, phone_number } = FormData;
  const [showPopup, setShowPopup] = useState(false);
  let [id, setId] = useState("");
  const dispatch = useDispatch();
  // const navigate = useNavigate();

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...FormData, [name]: value });
  };
  const handlePopup = () => {
    setShowPopup(true);
  };
  const handleSubmit = async (event, FormData) => {
    event.preventDefault();
    try {
      if (email && phone_number) {
        const { payload: response } = await dispatch(register({ FormData }));
        console.log(response.message);
        setId(response.id);
        setShowPopup(true);
      }
    } catch (e) {
      console.log(e);
    }
  };
  const isFormValid = email && phone_number;
  return (
    <>
      <div>
        {showPopup && (
          <>
            <div className="">
              <OtpPopUpForm
                mobile={FormData.phone_number}
                id={id}
                setShowPopup={setShowPopup}
              />
            </div>
          </>
        )}
        <div className="form">
          <form className="" onSubmit={(e) => handleSubmit(e, FormData)}>
            <div className="py-2">
              <input
                className="inputCommonCss"
                type="email"
                name="email"
                value={FormData.email}
                onChange={handleInputChange}
                placeholder="Enter your Email Id"
              />
            </div>
            <div className="py-2">
              <input
                className="inputCommonCss"
                type="Number"
                name="phone_number"
                value={FormData.phone_number}
                onChange={handleInputChange}
                placeholder="Mobile Number"
              />
            </div>

            <div className="py-4 align-middle">
              <button
                className={isFormValid ? "primaryButton" : "disabledButton"}
                type="submit"
                disabled={!isFormValid}
              >
                Sign Up
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
export default SignupForm;

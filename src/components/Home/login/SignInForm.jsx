import React, { useState } from "react";
import { useDispatch } from "react-redux";
// import { login } from "../../../action";
// import { initialLoginState } from "../../../reducer/login";
import OtpPopUpForm from "../signup/OtpPopUpForm";
const initialLoginState = {
  mobile:""
}
function SignInForm() {
  const [signInData, setSignInData] = useState(initialLoginState);
  const [showPopup, setShowPopup] = useState(false);
  const dispatch = useDispatch();
  const onHandleChange = (event) => {
    const { name, value } = event.target;
    setSignInData({ ...signInData, [name]: value });
  };
  const handlePopup = ()=>{
    setShowPopup(true)
  }
  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(login(FormData));
  };
  return (
    <>
      <div>
      {showPopup && (
              <>
              <div className="">
              <OtpPopUpForm mobile={signInData.mobile} setShowPopup={setShowPopup}/>
              </div>
              </>
            )}
        <div className="pt-10 relative">
          <form onSubmit={handleSubmit.bind(this)}>
            <div className="py-2 ">
              <input
                type="number"
                className="inputCommonCss px-2 w-full"
                name="mobile"
                value={signInData.number}
                onChange={onHandleChange}
                placeholder="Mobile Number"
              />
            </div>
            <div className="signIn">
              <button onClick={handlePopup} className="primaryButton block w-full text-white hover:bg-green-600 mt-4  focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                Get OTP
              </button>
            </div>
           
          </form>
        </div>
      </div>
    </>
  );
}

export default SignInForm;
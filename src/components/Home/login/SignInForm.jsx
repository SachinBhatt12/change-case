import React, { useState } from "react";
import { useDispatch } from "react-redux";
import OtpPopUpForm from "../signup/OtpPopUpForm";
import { toast } from "react-toastify";
import { loginUser } from "../../../redux/features/authSlice";
const initialLoginState = {
  phone_number: "",
};
function SignInForm({ handleNewUser }) {
  const [signInData, setSignInData] = useState(initialLoginState);
  const [showPopup, setShowPopup] = useState(false);
  let [id, setId] = useState("");

  const { phone_number } = signInData;
  const dispatch = useDispatch();
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setSignInData({ ...FormData, [name]: value });
  };
  const handlePopup = () => {
    setShowPopup(true);
  };
  const handleSubmit = async (event, signInData) => {
    event.preventDefault();
    try {
      if (phone_number) {
        const { payload: response } = await dispatch(loginUser({ signInData }));
        setId(response.data.id);
        toast.success(`OTP Sent Successfully`);
        setShowPopup(true);
      }
    } catch (e) {
      toast.warn(`Check Credientials Mobile  Number is not registered`);
    }
  };
  const isFormValid = signInData.phone_number.length === 10;
  return (
    <>
      <div>
        {showPopup && (
          <>
            <div className="">
              <OtpPopUpForm
                mobile={signInData.phone_number}
                id={id}
                setShowPopup={setShowPopup}
              />
            </div>
          </>
        )}
        <h3 className="text-xl">Login</h3>
        <div className="pt-10 relative" id="login">
          <form onSubmit={(e) => handleSubmit(e, signInData)}>
            <div className="py-2 ">
              <input
                type="number"
                className="inputCommonCss px-2 w-full"
                name="phone_number"
                value={signInData.phone_number}
                onChange={handleInputChange}
                placeholder="Mobile Number"
              />
            </div>
            <div className="signIn">
              <button
                className={isFormValid ? "primaryButton" : "disabledButton"}
                type="submit"
                disabled={!isFormValid}
                onClick={handlePopup}
              >
                Get OTP
              </button>
            </div>
          </form>
          <button
            onClick={() => handleNewUser(false)}
            className="text-blue-600"
          >
            New User
          </button>
        </div>
      </div>
    </>
  );
}

export default SignInForm;

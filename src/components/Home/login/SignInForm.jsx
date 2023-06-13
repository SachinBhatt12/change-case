import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import OtpPopUpForm from '../signup/OtpPopUpForm';
import { loginUser } from '../../../redux/features/authSlice';

const initialLoginState = {
  phone_number: '',
};
function SignInForm({ handleNewUser }) {
  const [signInData, setSignInData] = useState(initialLoginState);
  const [showPopup, setShowPopup] = useState(false);
  const [id, setId] = useState('');

  // eslint-disable-next-line camelcase
  const { phone_number } = signInData;
  const dispatch = useDispatch();
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setSignInData({ ...FormData, [name]: value });
  };
  // eslint-disable-next-line no-shadow
  const handleSubmit = async (event, signInData) => {
    event.preventDefault();
    try {
      // eslint-disable-next-line camelcase
      if (phone_number) {
        const { payload: response } = await dispatch(loginUser({ signInData }));
        if (response?.data?.status !== 200) {
          toast.error(`${response.data.phone_number}`);
        } else {
          toast.success('OTP Sent Successfully');
          setId(response?.data?.id);
          setShowPopup(true);
        }
      }
    } catch (e) {
      toast.warn('Check Credientials Mobile  Number is not registered');
    }
  };
  const isFormValid = signInData.phone_number.length === 10;
  return (
    <div className='relative h-72'>
      {showPopup && (
        <div className=''>
          <OtpPopUpForm mobile={signInData.phone_number} id={id} setShowPopup={setShowPopup} />
        </div>
      )}
      <h3 className='text-2xl'>Login</h3>
      <div className='pt-10 relative' id='login'>
        <form onSubmit={(e) => handleSubmit(e, signInData)}>
          <div className='py-2 '>
            <input type='number' className='inputCommonCss px-2 w-full' name='phone_number' value={signInData.phone_number} onChange={handleInputChange} placeholder='Mobile Number' />
          </div>
          <div className='py-5 justify-end flex'>
            <button className={isFormValid ? 'primaryButton w-full' : 'disabledButton w-full'} type='submit' disabled={!isFormValid}>
              Get OTP
            </button>
          </div>
        </form>
        <div className='flex justify-end'>
          <button type='submit' onClick={() => handleNewUser(false)} className='text-blue-600 py-5'>
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
}

export default SignInForm;

import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Layout } from './components/Layout/Layout';
import Home from './components/Home/Home';
import ScrapRates from './components/scrap_rates/ScrapRates';
import PickupRequest from './components/pickup_request/PickupRequest';
import ConfirmPickup from './components/confirmation/ConfirmPickup';
// import ProtectedRoutes from './components/Home/protectedroute/ProtectedRoutes';
import UserProfile from './components/userprofile/UserProfile';
import Error from './components/Error';
import Wallet from './components/Wallet/Wallet';
import TransferToBank from './components/Wallet/TransferToBank';
import MyOrders from './components/userprofile/MyOrders';
import SignInForm from './components/Home/login/SignInForm';
// import ProtectedRoutes from './components/Home/protectedroute/ProtectedRoutes';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<Home />} />
        <Route path='/scraprates' element={<ScrapRates />} />

        <Route path='/pickuprequest' element={<PickupRequest />} />

        <Route path='/confirmpickup' element={<ConfirmPickup />} />
        <Route path='/user' element={<UserProfile />} />
        <Route path='/wallet' element={<Wallet />} />
        <Route path='/transfertobank' element={<TransferToBank />} />
        <Route path='/myorders' element={<MyOrders />} />
        <Route path='*' element={<Error />} />
      </Route>
    </Routes>
  );
}

export default App;

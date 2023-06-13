import { Route, Routes } from 'react-router-dom';
import { Layout } from './components/Layout/Layout';
import Home from './components/Home/Home';
import ScrapRates from './components/scrap_rates/ScrapRates';
import PickupRequest from './components/pickup_request/PickupRequest';
import ConfirmPickup from './components/confirmation/ConfirmPickup';
import UserProfile from './components/userprofile/UserProfile';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<Home />} />
        <Route path='/scraprates' element={<ScrapRates />} />
        <Route path='/pickuprequest' element={<PickupRequest />} />
        <Route path='/confirmpickup' element={<ConfirmPickup />} />
        <Route path='/user' element={<UserProfile />} />
      </Route>
    </Routes>
  );
}

export default App;

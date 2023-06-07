import { useState, useEffect } from 'react';
import { Navigate } from 'react-router-dom';

export function useAuth() {
  const [auth, setAuth] = useState(false);

  useEffect(() => {
    const checkAuthentication = () => {
      const authToken = localStorage.getItem('AuthToken');
      if (authToken) {
        setAuth(true);
      } else {
        setAuth(false);
        // Redirect the user to the login page
          <Navigate to='/login' />;
      }
    };

    checkAuthentication();
  }, []);

  return { auth };
}

import { useState, useEffect } from 'react';
import { getToken, removeToken } from '../lib/auth';

const useAuth = () => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);

  useEffect(() => {
    const token = getToken();
    setIsAuthenticated(!!token);
  }, []);

  const logout = () => {
    removeToken();
    setIsAuthenticated(false);
  };

  return {
    isAuthenticated,
    logout,
  };
};

export default useAuth;

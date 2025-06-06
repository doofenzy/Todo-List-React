import { useMutation } from '@tanstack/react-query';
import api from '../lib/api';
import { setToken } from '../lib/auth';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

interface LoginInput {
  username: string;
  password: string;
}

interface LoginResponse {
  token: string;
}

interface ApiError {
  response?: {
    data?: {
      message?: string;
      errors?: { message: string }[];
    };
  };
  message?: string;
}

const useLogin = () => {
  const navigate = useNavigate();
  const [showError, setShowError] = useState(false);

  const mutation = useMutation<LoginResponse, ApiError, LoginInput>({
    mutationFn: async (userData: LoginInput) => {
      const res = await api.post<LoginResponse>('/auth/login', userData);
      return res.data;
    },
    onSuccess: (data) => {
      setToken(data.token);

      setTimeout(() => {
        navigate('/home');
      }, 2000);
    },
    onError: (error) => {
      const message =
        error.response?.data?.message || error.message || 'Signup failed';
      console.error('Signup failed:', message);
      setTimeout(() => {
        setShowError(false);
      }, 6000);
    },
  });

  return {
    ...mutation,
    showError,
  };
};

export default useLogin;

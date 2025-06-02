import { useMutation } from '@tanstack/react-query';
import api from '../lib/api';
import { useState } from 'react';

interface SignupInput {
  username: string;
  email: string;
  password: string;
}

interface SignupResponse {
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

const useSignup = () => {
  const [showSuccess, setShowSuccess] = useState(false);

  const mutation = useMutation<SignupResponse, ApiError, SignupInput>({
    mutationFn: async (userData: SignupInput) => {
      const res = await api.post<SignupResponse>('/auth/signup', userData);
      return res.data;
    },
    onSuccess: () => {
      setShowSuccess(true);
      setTimeout(() => {
        setShowSuccess(false);
      }, 6000);
    },
    onError: (error) => {
      const message =
        error.response?.data?.message || error.message || 'Signup failed';
      console.error('Signup failed:', message);
      setTimeout(() => {
        setShowSuccess(false);
      }, 6000);
    },
  });
  return { ...mutation, showSuccess, setShowSuccess };
}; 

export default useSignup;

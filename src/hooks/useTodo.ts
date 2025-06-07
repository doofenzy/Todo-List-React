import { useQuery } from '@tanstack/react-query';
import api from '../lib/api';

const useTodo = () => {
  return useQuery({
    queryKey: ['todos'],
    queryFn: async () => {
      const res = await api.get('/todo');

      return res.data;
    },
    refetchOnWindowFocus: false,
    retry: false,
  });
};

export default useTodo;

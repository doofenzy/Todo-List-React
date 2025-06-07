import { useQueryClient, useMutation } from '@tanstack/react-query';
import api from '../lib/api';

interface Todo {
  title: string;
}

const useCreateTodo = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (todo: Todo) => {
      const res = await api.post('/todo', todo);
      return res.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['todos'] });
    },
  });
};

export default useCreateTodo;

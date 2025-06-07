import { Input } from '../components/ui/input';
import { Button } from '../components/ui/button';
import useCreateTodo from '../hooks/useCreateTodo.ts';
import { useState } from 'react';

const FormTodo = () => {
  const createTodo = useCreateTodo();
  const [todo, setTodo] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!todo.trim()) return;
    createTodo.mutate({ title: todo });
    setTodo('');
  };

  return (
    <form className="flex w-full" onSubmit={handleSubmit}>
      <Input
        className="rounded-none border-0 border-gray-200 dark:border-gray-800 shadow-none flex-1"
        placeholder="Add a new task"
        type="text"
        name="todo"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
      />
      <Button type="submit" disabled={createTodo.isPending}>
        {' '}
        {createTodo.isPending ? 'Adding...' : 'Add'}
      </Button>
    </form>
  );
};

export default FormTodo;

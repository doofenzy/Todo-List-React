// /**
//  * v0 by Vercel.
//  * @see https://v0.dev/t/vKuYHiDCCTZ
//  * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
//  */
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from '../components/ui/card';
import { Checkbox } from '../components/ui/checkbox';
import { Button } from '../components/ui/button';
import LogoutButton from '../components/LogoutButton.tsx';
import useTodo from '../hooks/useTodo.ts';
import LoadingScreen from '../components/LoadingScreen.tsx';
import {
  type Key,
  type ReactElement,
  type JSXElementConstructor,
  type ReactNode,
  type ReactPortal,
} from 'react';
import FormTodo from '../components/FormTodo.tsx';

const Home = () => {
  const { data: todo, isLoading } = useTodo();

  if (isLoading) {
    return <LoadingScreen />;
  }

  return (
    <Card key="1" className="w-full max-w-lg mx-auto mt-20">
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="text-2xl">To-Do List</CardTitle>
          <LogoutButton />
        </div>
        <CardDescription>Add new tasks to your to-do list</CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col gap-4">
        {todo?.map(
          (item: {
            _id: Key | null | undefined;
            title:
              | string
              | number
              | bigint
              | boolean
              // eslint-disable-next-line @typescript-eslint/no-explicit-any
              | ReactElement<unknown, string | JSXElementConstructor<any>>
              | Iterable<ReactNode>
              | ReactPortal
              | Promise<
                  | string
                  | number
                  | bigint
                  | boolean
                  | ReactPortal
                  // eslint-disable-next-line @typescript-eslint/no-explicit-any
                  | ReactElement<unknown, string | JSXElementConstructor<any>>
                  | Iterable<ReactNode>
                  | null
                  | undefined
                >
              | null
              | undefined;
          }) => (
            <div key={item._id} className="flex items-center gap-4">
              <Checkbox
                className="peer-absolute left-0 translate-x-2.5"
                id={`todo-${item._id}`}
                // checked={item.completed} // optional: bind to backend state
                // onCheckedChange={(checked) => handleToggleComplete(item._id, checked)}
              />
              <label
                htmlFor={`todo-${item._id}`}
                className="peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                {item.title}
              </label>

              <Button
                className="ml-auto h-8 w-8"
                size="icon"
                variant="outline"
                // onClick={() => handleDelete(item._id)}
              >
                <TrashIcon className="h-4 w-4" />
                <span className="sr-only">Delete task</span>
              </Button>

              <Button
                className="h-8 w-8"
                size="icon"
                variant="outline"
                // onClick={() => handleUpdate(item)}
              >
                ✏️
                <span className="sr-only">Edit task</span>
              </Button>
            </div>
          )
        )}
      </CardContent>
      <FormTodo />
      <CardFooter className="gap-4"></CardFooter>
    </Card>
  );
};

function TrashIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M3 6h18" />
      <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" />
      <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" />
    </svg>
  );
}

export default Home;

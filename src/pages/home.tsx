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
import { Input } from '../components/ui/input';

const Home = () => {
  return (
    <Card key="1" className="w-full max-w-lg mx-auto mt-20">
      <CardHeader>
        <CardTitle className="text-2xl">To-Do List</CardTitle>
        <CardDescription>Add new tasks to your to-do list</CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col gap-4">
        <div className="flex items-center gap-4">
          <Checkbox
            className="peer-absolute left-0 translate-x-2.5"
            id="todo1"
          />
          <label
            className="peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            htmlFor="todo1"
          >
            Learn how to use Shadcn
          </label>
          <Button className="ml-auto h-8 w-8" size="icon" variant="outline">
            <TrashIcon className="h-4 w-4" />
            <span className="sr-only">Delete task</span>
          </Button>
        </div>
        <div className="flex items-center gap-4">
          <Checkbox
            className="peer-absolute left-0 translate-x-2.5"
            id="todo2"
          />
          <label
            className="peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            htmlFor="todo2"
          >
            Walk the dog
          </label>
          <Button className="ml-auto h-8 w-8" size="icon" variant="outline">
            <TrashIcon className="h-4 w-4" />
            <span className="sr-only">Delete task</span>
          </Button>
        </div>
        <div className="flex items-center gap-4">
          <Checkbox
            className="peer-absolute left-0 translate-x-2.5"
            id="todo3"
          />
          <label
            className="peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            htmlFor="todo3"
          >
            Buy groceries
          </label>
          <Button className="ml-auto h-8 w-8" size="icon" variant="outline">
            <TrashIcon className="h-4 w-4" />
            <span className="sr-only">Delete task</span>
          </Button>
        </div>
        <div className="flex items-center gap-4">
          <Checkbox
            className="peer-absolute left-0 translate-x-2.5"
            id="todo4"
          />
          <label
            className="peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            htmlFor="todo4"
          >
            Complete the assignment
          </label>
          <Button className="ml-auto h-8 w-8" size="icon" variant="outline">
            <TrashIcon className="h-4 w-4" />
            <span className="sr-only">Delete task</span>
          </Button>
        </div>
      </CardContent>
      <CardFooter className="gap-4">
        <form className="flex w-full">
          <Input
            className="rounded-none border-0 border-gray-200 dark:border-gray-800 shadow-none flex-1"
            placeholder="Add a new task"
            type="text"
          />
          <Button type="submit">Add</Button>
        </form>
      </CardFooter>
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

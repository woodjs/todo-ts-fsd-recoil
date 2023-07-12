import { CreateTask, TodoFilters } from '@/features';
import { Todo } from '@/widgets/Todo';

export default function Home() {
  return (
    <div className="flex justify-center items-center min-h-full mt-6 dark:blue">
      <div className="bg-white rounded shadow p-6 m-4 w-full lg:w-3/4 lg:max-w-lg">
        <div className="flex items-center justify-between mb-6">
          <h1 className="mr-6 text-4xl font-bold">TODO APP</h1>
        </div>
        <CreateTask />
        <TodoFilters />
        <Todo />
      </div>
    </div>
  );
}

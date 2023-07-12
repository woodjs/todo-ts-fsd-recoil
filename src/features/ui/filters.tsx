import { useRecoilState } from 'recoil';
import { taskModel } from '@/entities/task';

export function TodoFilters(): JSX.Element {
  const [filter, setFilter] = useRecoilState(taskModel.todoFilterState);

  const handleFilterChange = (event: React.ChangeEvent<HTMLSelectElement>) =>
    setFilter(event.target.value as taskModel.TodoFilter);

  return (
    <div className="mb-4">
      <p className="mr-2">Filter:</p>
      <select value={filter} onChange={handleFilterChange}>
        <option value={taskModel.TodoFilter.All}>All</option>
        <option value={taskModel.TodoFilter.Completed}>Completed</option>
        <option value={taskModel.TodoFilter.Uncompleted}>Uncompleted</option>
      </select>
    </div>
  );
}

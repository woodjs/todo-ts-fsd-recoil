import { useSetRecoilState } from 'recoil';
import { taskModel } from '@/entities/task';

interface IDeleteTaskProps {
  id: number;
}
export function DeleteTask({ id }: IDeleteTaskProps): JSX.Element {
  const setTodoList = useSetRecoilState(taskModel.todoListState);

  const handleDelete = () => {
    setTodoList((oldTodoList) => oldTodoList.filter((todo) => todo.id !== id));
  };

  return (
    <button
      type="button"
      className="px-5 py-2.5 text-sm font-medium text-white bg-red-500 rounded text-center"
      onClick={handleDelete}
    >
      Delete
    </button>
  );
}

import { useRecoilValue, useSetRecoilState } from 'recoil';
import { taskModel } from '@/entities/task';
import { TodoCard } from '@/entities/task/ui/card';
import { DeleteTask } from '@/features';
import { getIcon } from './lib';

export function Todo(): JSX.Element {
  const todoList = useRecoilValue(taskModel.filteredTodoListState);
  const setTodoList = useSetRecoilState(taskModel.todoListState);

  const toggleTodo = (id: number) =>
    setTodoList((oldTodoList) =>
      oldTodoList.map((todo) => {
        if (todo.id === id) return { ...todo, isComplete: !todo.isComplete };
        return todo;
      })
    );

  if (!todoList.length) return <div>Not found</div>;

  return (
    <>
      {todoList.map((item) => (
        <TodoCard
          key={item.id}
          handleClick={() => toggleTodo(item.id)}
          text={item.text}
          isComplete={item.isComplete}
          icon={getIcon(item.isComplete)}
          feature={<DeleteTask id={item.id} />}
        />
      ))}
    </>
  );
}

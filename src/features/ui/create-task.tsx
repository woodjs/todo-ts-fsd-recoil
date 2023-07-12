import { useState } from 'react';
import { useSetRecoilState } from 'recoil';
import { taskModel } from '@/entities/task';

export function CreateTask(): JSX.Element {
  const [inputValue, setInputValue] = useState('');
  const setTodoList = useSetRecoilState(taskModel.todoListState);

  const addItem = (): boolean => {
    const value = inputValue.trim();
    if (!value || value.length > 40) return false;

    setTodoList((oldTodoList: taskModel.ITodoItem[]) => [
      ...oldTodoList,
      {
        id: new Date().getTime(),
        text: inputValue.trim(),
        isComplete: false,
      },
    ]);

    setInputValue('');

    return true;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  return (
    <div className="my-4">
      <div className="flex">
        <input
          type="text"
          placeholder="Enter name task"
          className="w-full px-2 py-3 border rounded outline-none border-grey-600"
          value={inputValue}
          onChange={handleChange}
        />
        <button
          type="button"
          className="ml-2 border rounded p-2"
          onClick={addItem}
        >
          Add
        </button>
      </div>
      <small>Max 40 symbols</small>
    </div>
  );
}

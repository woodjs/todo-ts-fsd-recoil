import { atom, selector } from 'recoil';

export enum TodoFilter {
  All = 'All',
  Completed = 'Completed',
  Uncompleted = 'Uncompleted',
}

export interface ITodoItem {
  id: number;
  text: string;
  isComplete: boolean;
}

export const todoListState = atom<ITodoItem[]>({
  key: 'todoListState',
  default: [],
});

export const todoFilterState = atom<TodoFilter>({
  key: 'todoFilterState',
  default: TodoFilter.All,
});

export const filteredTodoListState = selector<ITodoItem[]>({
  key: 'filteredTodoListState',
  get: ({ get }) => {
    const todoList = get(todoListState);
    const filter = get(todoFilterState);

    switch (filter) {
      case TodoFilter.Completed:
        return todoList.filter((item) => item.isComplete);
      case TodoFilter.Uncompleted:
        return todoList.filter((item) => !item.isComplete);
      default:
        return todoList;
    }
  },
});

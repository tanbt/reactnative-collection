export const ADD_TODO = "ADD_TODO";
export const TOGGLE_TODO = "TOGGLE_TODO";

export interface TodoItem {
  id: number;
  name: string;
  isDone: boolean;
}

export interface TodoAction {
  type: String;
  item: TodoItem;
}

let nextTodoId = 1;
export function addTodo(name: string, isDone: boolean) {
  return {
    type: ADD_TODO,
    item: {
      id: nextTodoId++,
      name: name,
      isDone: isDone,
    },
  };
}

export function toggleTodo(item: TodoItem) {
  return {
    type: TOGGLE_TODO,
    item: item,
  };
}

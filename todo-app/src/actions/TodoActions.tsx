export const ADD_TODO = "ADD_TODO";

export interface TodoItem {
  name: String;
  isDone: boolean;
}

export interface TodoAction {
  type: String;
  item: TodoItem;
}

export function addTodo(name: String, isDone: boolean) {
  return {
    type: ADD_TODO,
    item: {
      name: name,
      isDone: isDone,
    },
  };
}

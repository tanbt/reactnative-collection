import { TodoItem, TodoAction, ADD_TODO } from "../actions/TodoActions";

export const INIT_TODO: Array<TodoItem> = [
  {
    name: "My initial task",
    isDone: true,
  },
];

export const TodoReducer = (state: Array<TodoItem>, action: TodoAction) => {
  switch (action.type) {
    case ADD_TODO:
      return [...state, action.item];

    /*case 'TOGGLE_TODO':
      return state.map(todo =>
        todo.id === action.itemId ? { ...todo, completed: !todo.completed } : todo
      );

    case 'REMOVE_TODO':
      return state.filter(todo => todo.id !== action.itemId);

    case 'REMOVE_COMPLETED':
      return state.filter(todo => !todo.completed);*/

    default:
      return state;
  }
};

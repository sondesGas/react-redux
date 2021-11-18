import {
  ADD_TASK,
  DELETE_TASK,
  EDIT_TASK,
  FILTER_TASKS,
  SET_CURRENT_TASK,
  TOGGLE_COMPLETED_TASK,
} from "../actions/constants/types";

const initialState = {
  todos: [],
  current: null,
  filteredTodos: [],
};

const taskReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TASK:
      return {
        ...state,
        todos: [...state.todos, action.payload],
      };

    case EDIT_TASK:
      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo.id === action.payload.id
            ? { ...todo, description: action.payload.description }
            : todo
        ),
      };

    case DELETE_TASK:
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.payload),
      };

    case SET_CURRENT_TASK:
      return {
        ...state,
        current: action.payload,
      };

    case FILTER_TASKS:
      return {
        ...state,
        filteredTodos:
          action.payload === "completed"
            ? state.todos.filter((todo) => todo.isDone)
            : action.payload === "uncompleted"
            ? state.todos.filter((todo) => !todo.isDone)
            : state.todos,
      };

    case TOGGLE_COMPLETED_TASK:
      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo.id === action.payload ? { ...todo, isDone: !todo.isDone } : todo
        ),
      };

    default:
      return state;
  }
};

export default taskReducer;

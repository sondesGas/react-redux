import {
  ADD_TASK,
  DELETE_TASK,
  EDIT_TASK,
  FILTER_TASKS,
  SET_CURRENT_TASK,
  TOGGLE_COMPLETED_TASK,
} from "./constants/types";

export const addTask = (payload) => {
  return {
    type: ADD_TASK,
    payload,
  };
};

export const editTask = (payload) => {
  return {
    type: EDIT_TASK,
    payload,
  };
};

export const deleteTask = (payload) => {
  return {
    type: DELETE_TASK,
    payload,
  };
};

export const setCurrentTask = (payload) => {
  return {
    type: SET_CURRENT_TASK,
    payload,
  };
};

export const filterTasks = (payload) => {
  return {
    type: FILTER_TASKS,
    payload,
  };
};

export const toggleCompleteTask = (payload) => {
  return {
    type: TOGGLE_COMPLETED_TASK,
    payload,
  };
};

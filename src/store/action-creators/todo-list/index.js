import { todoListActionTypes } from "@/store/action-types";
import Axios from "axios";

const getTodoListStatus = (type, data) => {
  switch (type) {
    case "start":
      return {
        type: todoListActionTypes.GET_TODO_LIST_START,
      };
    case "succ":
      return {
        type: todoListActionTypes.GET_TODO_LIST_SUCC,
        payload: data,
      };
    case "fail":
      return {
        type: todoListActionTypes.GET_TODO_LIST_FAIL,
        payload: data,
      };
    default:
      return;
  }
};

export function getTodoListCreator() {
  return async (dispatch) => {
    dispatch(getTodoListStatus("start"));
    try {
      const res = await Axios.get("/mock/todolist.json");
      dispatch(getTodoListStatus("succ", res.data));
    } catch (error) {
      dispatch(getTodoListStatus("fail", error.toString()));
    }
  };
}

export function todoInputChangeCreator(val) {
  return {
    type: todoListActionTypes.TODO_INPUT_CHANGE,
    payload: val,
  };
}

export function addTodoListCreator() {
  return {
    type: todoListActionTypes.TODO_LIST_ADD,
  };
}

export function delTodoListCreator(id) {
  return {
    type: todoListActionTypes.TODO_LIST_DELETE,
    payload: id,
  };
}

export function completeTodoLIstCreator(id) {
  return {
    type: todoListActionTypes.TODO_LIST_COMPLETE,
    payload: id,
  };
}

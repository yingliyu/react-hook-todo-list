import { fromJS } from "immutable";
import { todoListActionTypes } from "@/store/action-types";

const defaultState = fromJS({
  todoInput: "",
  lists: [],
  isLoading: false,
  errMsg: "",
});
const addList = (state) => {
  return state
    .get("lists")
    .unshift(
      fromJS({
        id: 0,
        name: state.get("todoInput"),
        status: 1,
      })
    )
    .map((item, index) => item.set("id", index * 1 + 1));
};

export default (state = defaultState, action) => {
  switch (action.type) {
    default:
      return state;
    case todoListActionTypes.GET_TODO_LIST_START:
      return state.set("isLoading", true);
    case todoListActionTypes.GET_TODO_LIST_SUCC:
      return state.merge({
        isLoading: false,
        lists: fromJS(action.payload),
        errMsg: "",
      });
    case todoListActionTypes.GET_TODO_LIST_FAIL:
      return state.merge({
        isLoading: false,
        lists: fromJS([]),
        errMsg: action.payload,
      });
    case todoListActionTypes.TODO_INPUT_CHANGE:
      return state.set("todoInput", action.payload);
    case todoListActionTypes.TODO_LIST_ADD:
      return state.merge({
        lists: addList(state),
        todoInput: "",
      });
    case todoListActionTypes.TODO_LIST_DELETE:
      return state.set(
        "lists",
        state
          .get("lists")
          .filter((item) => item.get("id") !== action.payload)
          .map((item, index) => item.set("id", index * 1 + 1))
      );
    case todoListActionTypes.TODO_LIST_COMPLETE:
      return state.set(
        "lists",
        state
          .get("lists")
          .map((item) =>
            item.get("id") === action.payload ? item.set("status", 0) : item
          )
      );
  }
};

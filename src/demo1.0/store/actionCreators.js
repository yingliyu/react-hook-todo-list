import { GET_INIT_LIST, CHANGE_INPUT_VALUE, ADD_TODO_ITEM, DEL_TODO_ITEM, INIT_LIST_ACTION } from "./actionType"

export const getInputChangeAction = (value) => ({
  type: CHANGE_INPUT_VALUE,
  value
})

export const getAddTodoItemAction = () => ({
  type: ADD_TODO_ITEM
})

export const getDelTodoItemAction = (index) => ({
  type: DEL_TODO_ITEM,
  index
})

export const initListAction = (list) => ({
  type: INIT_LIST_ACTION,
  list
})

export const getInitList = () => ({
  type: GET_INIT_LIST
})
import { CHANGE_INPUT_VALUE, ADD_TODO_ITEM, DEL_TODO_ITEM, INIT_LIST_ACTION } from "./actionType"
const defaultState = {
  inputValue: '',
  list: []
}
// reducer 可以接收state，但是绝不能修改state。先拷贝一份再修改newState
export default (state = defaultState, action) => { 
  const newState = JSON.parse(JSON.stringify(state)) // 深拷贝
  if(action.type === CHANGE_INPUT_VALUE){
    newState.inputValue = action.value
    return newState
  }
  if(action.type === ADD_TODO_ITEM){
    newState.list.unshift(newState.inputValue)
    newState.inputValue = ''
    return newState
  }
  if(action.type === DEL_TODO_ITEM){
    newState.list.splice(action.index, 1)
    return newState
  }
  if(action.type === INIT_LIST_ACTION){
    newState.list = action.list
    return newState
  }
  return state
}
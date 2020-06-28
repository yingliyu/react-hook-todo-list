import React, { Component } from "react"
import store from "./store"
import axios from 'axios'

import { getInitList, getInputChangeAction, getAddTodoItemAction, getDelTodoItemAction } from "./store/actionCreators";
import TodoListUI from './TodoListUI'

class TodoList extends Component {
  constructor(props) {
    super(props)
    this.state = store.getState()
    this.handleInputChange = this.handleInputChange.bind(this) // 修改this指向
    this.handleStoreChange = this.handleStoreChange.bind(this)
    this.handleBtnClick = this.handleBtnClick.bind(this)
    store.subscribe(this.handleStoreChange)
  }
  render() {
    return (
      <TodoListUI
        inputValue={this.state.inputValue}
        list={this.state.list}
        handleInputChange={this.handleInputChange}
        handleBtnClick={this.handleBtnClick}
        deleteHandle={this.deleteHandle}
      />
    )
  }

  componentDidMount () {
    const action = getInitList()
    store.dispatch(action)
    // axios.get('http://rap2api.taobao.org/app/mock/234025/todo/getlist')
    // .then((res) => {
    //   const data = res.data
    //   const action = initListAction(data.list)
    //   console.log(data)
    //   store.dispatch(action)
    // })
    // .catch((error) => {
    //   console.log(error)
    // })
  }

  handleInputChange (e) {
    const action = getInputChangeAction(e.target.value)
    store.dispatch(action)
  }

  handleStoreChange () {
    this.setState(store.getState())
  }

  handleBtnClick () {
    const action = getAddTodoItemAction()
    store.dispatch(action)
  }

  deleteHandle (index) {
    const action = getDelTodoItemAction(index)
    store.dispatch(action)
  }
}

export default TodoList;

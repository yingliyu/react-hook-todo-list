import React, { Component, Fragment } from 'react'
import TodoItem from './TodoItem'
import axios from 'axios'
import './todolist.css'
import Test from './test'

class TodoList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      inputVal: 'hello!',
      list: []
    }
    this.handleInputChange = this.handleInputChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.delHandle = this.delHandle.bind(this)
  }
  render() {
    console.log('father: render')
    return (
      // JSX
      <Fragment>
        {/* JSX */}
        <div>
          <label htmlFor='inputcon'>输入内容</label>
          <input
            id='inputcon'
            className='input'
            ref={(input) => {this.input = input}}
            onChange={this.handleInputChange}
            value={this.state.inputVal} />
          <button onClick={this.handleSubmit}>提交</button>
        </div>
        <ul ref={(ul)=>{this.ul = ul}}>
          {this.getTodoItem()}
        </ul>
        <Test content={this.state.inputVal} />
      </Fragment>
    )
  }

  getTodoItem () {
    return this.state.list.map((item, index) => {
      return (
        <TodoItem
          key={index}
          content={item}
          delItem={this.delHandle}
          />
        // <li 
        //   key={index} 
        //   onClick={this.delHandle.bind(this, index)}
        //   dangerouslySetInnerHTML={{__html: item}}
        // >
        //   {/* {item} */}
        // </li>
      )
    })
  }
  // 在组件即将被挂载到页面的时候自动执行
  // componentWillMount () {
  //   console.log('componentWillMount')
  // }

  // // 在组件被挂载的时候自动执行
  componentDidMount(){
    console.log('componentDidMount')
    axios.get('api/todolist')
    .then(() => {
      alert('succ')
    })
    .catch(() => {
      alert('error')
    })
  }

  // // 在组件更新之前自动执行
  // shouldComponentUpdate(){
  //   console.log('shouldComponentUpdata')
  //   return true
  // }

  // componentWillUpdate(){
  //   console.log('componentWillUpdate')
  // }

  // componentDidUpdate() {
  //   console.log('componentDidUpdate')
  // }

  // componentWillReceiveProps () {
  //   console.log('father：componentWillReceiveProps')
  // }

  // componentWillUnmount(){
  //   console.log('father：componentWillUnmount')
  // }

  handleInputChange(e) {
    // const value = e.target.value
    const value = this.input.value
    this.setState(() => ({
      inputVal: value
    }))
  }

  handleSubmit() {
    if(!this.state.inputVal) {
      console.log('请输入内容~')
      return
    }
    // this.setState({
    //   inputVal:'',
    //   list: [...this.state.list, this.state.inputVal]
    // })
    this.setState((data) => ({
      list: [...data.list, data.inputVal],
      inputVal: ''
    }), () => {
      // console.log(this.ul.querySelectorAll('div').length)
    })
    // console.log(this.ul.querySelectorAll('div').length)
  }

  delHandle(index) {
    this.setState((prevState) => {
      const list = [...prevState.list]
      list.splice(index, 1)
      return {
        list: list
      }
    })
  }
}
export default TodoList
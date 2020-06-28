import React, { Component } from "react"
import { connect } from 'react-redux'
class TodoList extends Component {
  
  render () {
    return (
      <div>
        <div>
          <input value={this.props.inputValue} onChange={this.props.handleChange}/>
          <button onClick={this.props.handleClick}>提交</button>
        </div>
        <ul>
          <li>12</li>
          <li>34</li>
        </ul>
      </div>
    )
  }
}
const mapStateToProps = (state) => {
  return {
    inputValue: state.inputValue
  }
}

// store.dispatch => props
const mapDispatchToProps = (dispatch) => {
  return {
    handleChange(e){
      console.log(e)
      const action = {
        type: 'change_input_value',
        value: e.target.value
      }
      dispatch(action)
    },
    handleClick(){
      const action = {
        type: 'add_to_item'
      }
      dispatch(action)
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(TodoList)
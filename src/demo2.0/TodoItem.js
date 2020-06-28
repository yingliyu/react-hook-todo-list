import React, {Component} from 'react'
import PropTypes from 'prop-types'

export default class TodoItem extends Component {
  constructor(props) {
    super(props)
    this.delHandle = this.delHandle.bind(this)
  }
  render () {
    console.log('child: render')
    const { content } = this.props
    return (
      <div onClick={ this.delHandle }>
       {content}
      </div>
    )
  }
  shouldComponentUpdate (nextProps, nextState){
    if(nextProps.content !== this.props.content){
      return true
    } else {
      return false
    }
  }

  // 如果这个组件第一次存在于父组件之后不被执行；如果这个组件之前已存在于父组件中，才会执行
  componentWillReceiveProps () {
    // console.log('child：componentWillReceiveProps')
  }

  // 当这个组件即将被从页面中剔除的时候自动执行
  componentWillUnmount(){
    // console.log('child:componentWillUnmount')
  }

  delHandle () {
    const {delItem, index } = this.props
    delItem(index)
  }
}

TodoItem.propTypes = {
  content: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  delItem: PropTypes.func.isRequired,
  index: PropTypes.number
}

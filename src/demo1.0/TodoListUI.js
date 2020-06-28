import React from "react"
import "antd/dist/antd.css"; // or 'antd/dist/antd.less'
import { Input, Button, List } from "antd"

const TodoListUI = (props) => {
  return (
    <div style={{ paddingTop: "10px", paddingLeft: "10px" }}>
        <div>
          <Input
            placeholder="Todo info"
            style={{ width: "200px", marginRight: "10px" }}
            value={props.inputValue}
            onChange={props.handleInputChange}
          />
          <Button type="primary" onClick={props.handleBtnClick}>Submit</Button>
        </div>
        <List
          bordered
          dataSource={props.list}
          renderItem={ (item, index) => <List.Item onClick={() => {props.deleteHandle(index)}}>{item}</List.Item>}
          style={{ width: "285px", marginTop: "20px" }}
        />
      </div>
  )
}

export default TodoListUI
// export default class TodoListUI extends Component {
//   // constructor (props) {
//   //   super(props)
//   // }
//   render() {
//     return (
//       <div style={{ paddingTop: "10px", paddingLeft: "10px" }}>
//         <div>
//           <Input
//             placeholder="Todo info"
//             style={{ width: "200px", marginRight: "10px" }}
//             value={this.props.inputValue}
//             onChange={this.props.handleInputChange}
//           />
//           <Button type="primary" onClick={this.props.handleBtnClick}>Submit</Button>
//         </div>
//         <List
//           bordered
//           dataSource={this.props.list}
//           renderItem={ (item, index) => <List.Item onClick={(index) => {this.props.deleteHandle(index)}}>{item}</List.Item>}
//           style={{ width: "285px", marginTop: "20px" }}
//         />
//       </div>
//     )
//   }
// }

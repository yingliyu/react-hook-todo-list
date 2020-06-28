import React from "react";
import { Input, Button, message } from "antd";

export default function TodoInput(props) {
  const { todoInput, todoInputChange, todoListAdd } = props;
  const todoInputChangeHandel = (e) => {
    todoInputChange(e.target.value);
  };
  const addTaskHandle = () => {
    if (todoInput) {
      todoListAdd();
    } else {
      message.warning("请输入任务！");
    }
  };
  return (
    <>
      <div className="input-wrapper">
        <Input
          placeholder="input to do ..."
          value={todoInput}
          onChange={todoInputChangeHandel}
        />
      </div>
      <Button type="primary" onClick={addTaskHandle}>
        Add Task
      </Button>
    </>
  );
}

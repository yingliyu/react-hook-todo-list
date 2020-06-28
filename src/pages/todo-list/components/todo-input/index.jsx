import React, { useRef } from "react";
import { Input, Button, message } from "antd";

export default function TodoInput(props) {
  const inputRef = useRef();
  const { todoInput, todoInputChange, todoListAdd } = props;
  const todoInputChangeHandel = (e) => {
    todoInputChange(e.target.value);
  };
  const addTaskHandle = () => {
    if (todoInput.trim()) {
      todoListAdd();
    } else {
      message.warning("请输入任务！");
    }
    inputRef.current.focus();
  };
  return (
    <>
      <div className="input-wrapper">
        <Input
          ref={inputRef}
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

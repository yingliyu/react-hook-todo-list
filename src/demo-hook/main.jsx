import React, { useState, useRef } from "react";

import { Input, Button, Modal } from "antd";
import "./main.css";
export default () => {
  // modelVisible存当前删除的task的索引值，默认不存在：-1
  const [modelVisible, setModelVisible] = useState(-1);
  const [inputTask, setInputTask] = useState({
    name: "",
    status: 0,
  });
  const [taskList, addTask] = useState([
    {
      name: "学习react",
      status: 1,
    },
    {
      name: "hello world!",
      status: 1,
    },
  ]);
  const taskEl = useRef(null);
  const changeHandel = (e) => {
    taskEl.current.focus();
    setInputTask({
      name: e.target.value,
      status: 0,
    });
  };
  const delTask = (index) => {
    console.log(index);
    setModelVisible(index);
  };
  const completeTask = (index) => {
    taskList[index].status = 1;
    addTask([...taskList]);
  };
  const addTaskHandle = () => {
    if (inputTask.name) {
      addTask([inputTask, ...taskList]);
      setInputTask({ name: "", status: 0 });
    }
  };
  // 确认删除
  const modelHandleOk = () => {
    taskList.splice(modelVisible, 1);
    addTask([...taskList]);
    setModelVisible(-1);
  };
  // 取消删除
  const modelHandleCancel = () => {
    setModelVisible(-1);
  };
  return (
    <div className="todo-list-wrapper">
      <h2>REACT HOOK TO DO LIST </h2>
      <div className="input-wrapper">
        <Input
          placeholder="input to do ..."
          ref={taskEl}
          onPressEnter={() => addTaskHandle()}
          value={inputTask.name ? inputTask.name : ""}
          onChange={changeHandel}
        />
      </div>
      <Button type="primary" onClick={() => addTaskHandle()}>
        Add Task
      </Button>
      <ul>
        {taskList.map((item, index) => (
          <li key={index}>
            <span className={item.status ? "completed" : ""}>
              {index * 1 + 1 + "." + item.name}
            </span>
            <span className="operate-btn">
              {item.status === 0 ? (
                <Button onClick={() => completeTask(index)}>完成</Button>
              ) : (
                ""
              )}
              <Button type="primary" danger onClick={() => delTask(index)}>
                删除
              </Button>
            </span>
          </li>
        ))}
      </ul>
      <Modal
        title="删除提示"
        visible={modelVisible !== -1 ? true : false}
        onOk={() => modelHandleOk()}
        onCancel={() => modelHandleCancel()}
      >
        <p>确认删除吗？</p>
      </Modal>
    </div>
  );
};

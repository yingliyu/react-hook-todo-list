import React, { useEffect } from "react";
import { List } from "antd";
import TodoItem from "@/pages/todo-list/components/todo-item";
import "./index.css";

export default function TodoList(props) {
  const { list, deleteTask, completeTask, getTodoList } = props;
  const deleteTaskHandle = (id) => {
    deleteTask(id);
  };
  const completeTaskHandle = (id) => {
    completeTask(id);
  };
  useEffect(() => {
    getTodoList();
  }, [getTodoList]);
  return (
    <div className="list-wrapper">
      <List
        size="large"
        bordered
        dataSource={list}
        renderItem={(item) => (
          <List.Item>
            <TodoItem
              item={item}
              completeTask={completeTaskHandle}
              deleteTask={deleteTaskHandle}
            ></TodoItem>
          </List.Item>
        )}
      />
    </div>
  );
}

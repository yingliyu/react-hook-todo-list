import React, { useState } from "react";
import { Button, Modal } from "antd";
import "./index.css";

export default function TodoItem(props) {
  const { item, deleteTask, completeTask } = props;
  const [modalVisible, setVisible] = useState(false);
  const [id, setId] = useState(0);
  const modalHandleOk = (id) => {
    deleteTask(id);
    setVisible(!modalVisible);
  };
  const showModalHandle = (id) => {
    setId(id);
    setVisible(!modalVisible);
  };

  return (
    <div className="todo-list-item">
      {item.status === 1 ? (
        <span>{item.id + ". " + item.name}</span>
      ) : (
        <span className="completed-txt">{item.id + ". " + item.name}</span>
      )}

      <span className="operate-btn">
        {item.status === 1 ? (
          <Button type="primary" onClick={() => completeTask(item.id)}>
            完成
          </Button>
        ) : (
          <small>已完成 </small>
        )}
        <Button type="primary" danger onClick={() => showModalHandle(item.id)}>
          删除
        </Button>
      </span>
      <Modal
        title="删除提示"
        visible={modalVisible}
        onOk={() => modalHandleOk(id)}
        onCancel={() => setVisible(!modalVisible)}
      >
        <p>
          确认删除第 {id} 条{item.status === 1 ? " 待完成 " : " 已完成 "}
          任务吗？
        </p>
      </Modal>
    </div>
  );
}

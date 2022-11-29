import React, { useState } from "react";
import { Task } from "../Components/Task";

export const TodoList = () => {
  const [todoList, setTodoList] = useState([]);
  const [newTask, setNewTask] = useState("");
  const [show, setShow] = useState(false);
  const [showid, setShowId] = useState(0);
  const [updateTask, setUpdateTask] = useState("");

  const handleChange = (event) => {
    setNewTask(event.target.value);
  };

  const handleSubmit = () => {
    const task = {
      id: todoList.length === 0 ? 1 : todoList[todoList.length - 1].id + 1,
      taskName: newTask,
      complete: false,
    };
    setTodoList([...todoList, task]);
  };

  const handleDelete = (id) => {
    setTodoList(todoList.filter((task) => task.id !== id));
  };

  const handleComplete = (id) => {
    setTodoList(
      todoList.map((task) => {
        return task.id === id
          ? { ...task, complete: task.complete ? false : true }
          : task;
      })
    );
  };

  const handleUpdateChange = (event) => {
    setUpdateTask(event.target.value);
  };

  const handleUpdate = (id) => {
    setTodoList(
      todoList.map((task) => {
        return task.id === id ? { ...task, taskName: updateTask } : task;
      })
    );
  };

  return (
    <div>
      <br />
      <input type="text" onChange={handleChange} />
      <button onClick={handleSubmit}>Add Task</button>
      {todoList.map((task) => {
        return (
          <Task
            show={show}
            setShow={setShow}
            showid={showid}
            setShowId={setShowId}
            handleDelete={handleDelete}
            handleComplete={handleComplete}
            handleUpdate={handleUpdate}
            handleChange={handleChange}
            handleUpdateChange={handleUpdateChange}
            task={task}
          />
        );
      })}
    </div>
  );
};

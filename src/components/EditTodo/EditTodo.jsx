import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { todoContext } from "../context/TodoContext";

const EditTodo = () => {
  const { taskToEdit, saveTask } = useContext(todoContext);
  const [newItem, setNewItem] = useState(taskToEdit);
  const navigate = useNavigate();
  useEffect(() => {
    setNewItem(taskToEdit);
  }, [taskToEdit]);

  function saveEdit(e) {
    let newTask = {
      ...newItem,
      task: e.target.value,
    };
    setNewItem(newTask);
    console.log(newTask);
  }
  function savenav() {
    saveTask(newItem);
    navigate("/");
  }
  return (
    <div>
      {newItem ? (
        <>
          <input onChange={saveEdit} value={newItem.task} type="text" />

          <button onClick={savenav}>Save</button>
        </>
      ) : (
        <h1>Loading</h1>
      )}
    </div>
  );
};

export default EditTodo;

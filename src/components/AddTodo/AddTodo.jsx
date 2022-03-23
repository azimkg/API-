import React, { useContext, useState } from "react";
import { todoContext } from "../context/TodoContext";

const AddTodo = () => {
  const [inpVal, setInpVal] = useState("");
  const { addTask } = useContext(todoContext);
  function handleClick() {
    let newObj = {
      task: inpVal,
      status: false,
    };
    addTask(newObj);
    setInpVal("");
  }

  return (
    <div>
      <input
        value={inpVal}
        onChange={(e) => setInpVal(e.target.value)}
        type="text"
      />
      <button onClick={handleClick}>add</button>
    </div>
  );
};

export default AddTodo;

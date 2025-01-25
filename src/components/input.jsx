import React, { useContext, useRef } from "react";
import Mycontext from "./store/Mycontext";

const Input = () => {
  const { Tasks, setTasks } = useContext(Mycontext); // Destructure `Tasks` and `setTasks`
  const added = useRef();

  const onsubmithandler = (e) => {
    e.preventDefault();
    const inputvalue = added.current.value;

    if (!inputvalue.trim()) {
      alert("Please enter a valid task.");
      return;
    }

    // Update the state immutably
    setTasks((prevTasks) => [
      ...prevTasks,
      { id: new Date().toLocaleTimeString(), myvalue: inputvalue },
    ]);

    added.current.value = ""; // Clear the input field after adding
  };

  return (
    <>
      <div>
        <form onSubmit={onsubmithandler}>
          <input ref={added} className="p-2 border rounded" type="text" placeholder="Add a task" />
          <button className="bg-yellow-400 p-2 font-bold ml-2 rounded">Add</button>
        </form>
      </div>
    </>
  );
};

export default Input;

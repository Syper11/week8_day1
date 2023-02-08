import React, { useState } from "react";

function ToDoList() {
  const [active, setActive] = useState(false);
  const handleClick = () => {
    setActive(!active);
  }

  return (
    <>
    <div className="center">
        <h1>ToDoList</h1>
      <button
        onClick={handleClick}
        style={{ backgroundColor: active ? "white" : "green" }}
      >
        Homework
      </button>
    </div>
    <div>
     <button
        onClick={handleClick}
        style={{ backgroundColor: active ? "white" : "green" }}
      >
        classsss
      </button>
      </div>
      </>
  );
}

export default ToDoList;
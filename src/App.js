import React, { useState } from "react";
import Inputbox from "./components/inputbox";
import Todolist from "./components/todolist";

function App() {
  const [todos, setodos] = useState([
    {
      id: 1,
      title: "The First Todo",
      status: false,
    },
  ]);

  function submittodo(e) {
    e.preventDefault();
    if (!e.target.title.value) {
      return false;
    } else {
      let newobj = [
        ...todos,
        {
          id: todos.length + 1,
          title: e.target.title.value,
          status: false,
        },
      ];
      setodos(newobj);
      setItem("");
    }
  }

  function deletetodo(e) {
    const results = todos.filter((item) => item.id !== e);
    setodos(results);
  }

  function setcomplete(e) {
    const results = todos.filter((item) => item.id !== e);
    const element = todos.find((item) => item.id === e);
    element.status = !element.status;
    results.push(element);
    setodos(results);
  }

  const [item, setItem] = useState("");

  function handleitem(e) {
    setItem(e.target.value);
  }

  return (
    <>
      <div style={{ margin: 50 }}>
        <Inputbox value={item} onchange={handleitem} submit={submittodo} />
  <label for="progress"><b>Level: </b> {todos.filter(item => item.status === true).length } / {todos.length} </label>
        <progress id="progress" value={todos.filter(item => item.status === true).length } max={todos.length}> 32% </progress>
        <Todolist
          todos={todos}
          ondelete={deletetodo}
          oncomplete={setcomplete}
        />
      </div>
    </>
  );
}

export default App;

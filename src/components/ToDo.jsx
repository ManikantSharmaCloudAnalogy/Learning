import { useState } from "react";
export function ToDo() {
  let [todolist, settodolist] = useState([]);
  let saveToDoList = (event) => {
    event.preventDefault();
    let todoname = event.target.todoname.value;
    if (!todolist.includes(todoname)) {
      let finaltodolist = [...todolist, todoname];
      settodolist(finaltodolist);
      event.target.todoname.value = "";
    } else {
      alert("to do already added");
    }
  };
  let list = todolist.map((value, index) => {
    return (
      <ToDoListItems
        key={index}
        value={value}
        indexNum={index}
        todolist={todolist}
        settodolist={settodolist}
      />
    );
  });
  return (
    <>
      <h3>TO DO LIST</h3>
      <form onSubmit={saveToDoList}>
        <input type="text" name="todoname" />
        <button>Save</button>
      </form>
      <div className="outerDiv">
        <ul>{list}</ul>
      </div>
    </>
  );
}

export default ToDo;
function ToDoListItems({ value, indexNum, todolist, settodolist }) {
  let deleteRow = () => {
    let finalData = todolist.filter((v, i) => i !== indexNum);
    settodolist(finalData);
  };
  return (
    <li>
      {value}
      <span onClick={deleteRow}>&times;</span>
    </li>
  );
}

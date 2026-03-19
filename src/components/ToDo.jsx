import { useState } from "react";

export function ToDo() {
  let [todolist, settodolist] = useState([]);
  let [inputValue, setInputValue] = useState("");
  let [editIndex, setEditIndex] = useState(null);

  let saveToDoList = (e) => {
    e.preventDefault();

    if (inputValue.trim() === "") return;

    if (editIndex !== null) {
      // UPDATE
      let updatedList = [...todolist];
      updatedList[editIndex] = inputValue;
      settodolist(updatedList);
      setEditIndex(null);
    } else {
      // ADD
      if (!todolist.includes(inputValue)) {
        settodolist([...todolist, inputValue]);
      } else {
        alert("To Do already added");
      }
    }

    setInputValue("");
  };

  let deleteItem = (index) => {
    let finalData = todolist.filter((_, i) => i !== index);
    settodolist(finalData);
  };

  let editItem = (index) => {
    setInputValue(todolist[index]);
    setEditIndex(index);
  };

  return (
    <>
      <h2 style={{ textAlign: "center" }}>TO DO LIST</h2>

      <form onSubmit={saveToDoList} style={{ textAlign: "center" }}>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          style={{ width: "60%", padding: "8px" }}
        />
        <button style={{ padding: "8px 15px", marginLeft: "10px" }}>
          {editIndex !== null ? "Update" : "Save"}
        </button>
      </form>

      <div style={{ width: "60%", margin: "20px auto" }}>
        <ul style={{ padding: 0 }}>
          {todolist.map((value, index) => (
            <li
              key={index}
              style={{
                listStyle: "none",
                background: "black",
                color: "white",
                padding: "10px",
                marginBottom: "8px",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              {value}

              <div>
                {/* DELETE */}
                <span
                  onClick={() => deleteItem(index)}
                  style={{
                    marginRight: "15px",
                    cursor: "pointer",
                    color: "red",
                    fontSize: "18px",
                  }}
                >
                  ❌
                </span>

                {/* UPDATE */}
                <span
                  onClick={() => editItem(index)}
                  style={{
                    cursor: "pointer",
                    color: "yellow",
                    fontSize: "18px",
                  }}
                >
                  ✏️
                </span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default ToDo;
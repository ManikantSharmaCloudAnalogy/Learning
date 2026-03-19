import React, { useState, useEffect } from "react";

export function PostApi() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [users, setUsers] = useState([]);
  const [editId, setEditId] = useState(null);
  const getUsers = async () => {
    const res = await fetch("http://localhost:3000/users");
    const data = await res.json();
    setUsers(data);
  };
  const saveUser = async (e) => {
    e.preventDefault();
    if (!name || !age) return;

    if (editId) {
      await fetch(`http://localhost:3000/users/${editId}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, age }),
      });
      setEditId(null);
    } else {
      await fetch("http://localhost:3000/users", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(userData),
      });
    }

    setName("");
    setAge("");
    getUsers();
  };
  const deleteUser = async (id) => {
    await fetch(`http://localhost:3000/users/${id}`, { method: "DELETE" });
    getUsers();
  };
  const editUser = (user) => {
    setName(user.name);
    setAge(user.age);
    setEditId(user.id);
  };
  useEffect(() => {
    getUsers();
  }, []);

  return (
    <div>
      <h2>{editId ? "Edit User" : "Add User"}</h2>
      <form onSubmit={saveUser}>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Age"
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />
        <button type="submit">{editId ? "Update" : "Add User"}</button>
      </form>

      <h2>Users List</h2>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <b>{user.name}</b> - {user.age}{" "}
            <button onClick={() => editUser(user)}>Edit</button>
            <button onClick={() => deleteUser(user.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
import React, { useState } from "react";
import "./App.css";
const TodoApp = () => {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");
  const [editingIndex, setEditingIndex] = useState(null);
  const [editingText, setEditingText] = useState("");

  const addTodo = () => {
    if (newTodo.trim() !== "") {
      setTodos([...todos, { text: newTodo, completed: false }]);
      setNewTodo("");
    }
  };

  const deleteTodo = (index) => {
    setTodos(todos.filter((_, i) => i !== index));
  };

  const toggleComplete = (index) => {
    setTodos(
      todos.map((todo, i) =>
        i === index ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const editTodo = (index) => {
    setEditingIndex(index);
    setEditingText(todos[index].text);
  };

  const saveEdit = (index) => {
    let updatedTodos = [...todos];
    updatedTodos[index].text = editingText;
    setTodos(updatedTodos);
    setEditingIndex(null);
    setEditingText("");
  };

  const markAsDone = (index) => {
    setTodos(
      todos.map((todo, i) =>
        i === index ? { ...todo, completed: true } : todo
      )
    );
  };

  return (
    <div style={{ padding: "20px", maxWidth: "300px", margin: "auto" }}>
      <h2>Todo List ⭐</h2>
      <input
        type="text"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
        style={{ padding: "5px", borderRadius: "7px" }}
      />
      <button onClick={addTodo} className="btn">
        Add
      </button>
      <ul style={{ listStyle: "none", padding: 0 }}>
        {todos.map((todo, index) => (
          <li
            key={index}
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              padding: "5px",
              textDecoration: todo.completed ? "line-through" : "none",
            }}
          >
            {editingIndex === index ? (
              <>
                <input
                  type="text"
                  value={editingText}
                  onChange={(e) => setEditingText(e.target.value)}
                  style={{ padding: "5px" }}
                />
                <button onClick={() => saveEdit(index)} className="btn-all">
                  Save
                </button>
              </>
            ) : (
              <>
                <span onClick={() => toggleComplete(index)}>{todo.text}</span>
                <div>
                  <button onClick={() => editTodo(index)} className="btn-all">
                    Edit
                  </button>
                  <button onClick={() => deleteTodo(index)} className="btn-all">
                    Delete
                  </button>
                  {!todo.completed && (
                    <button
                      onClick={() => markAsDone(index)}
                      className="btn-all"
                    >
                      Done
                    </button>
                  )}
                </div>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoApp;

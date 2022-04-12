import React, { useState } from "react";
import Header from "./components/Header";
import Input from "./components/Input";
import Items from "./components/Items";

interface todo {
  desc: string;
  status: "0" | "1";
}

function App() {
  const [todos, setTodos] = useState([] as todo[]);

  const add = (todo: todo) => {
    setTodos((todos) => [...todos, todo]);
  };

  const toggle = (idx: number) => {
    const todo = todos[idx];
    todo.status = todo.status === "1" ? "0" : "1";
    setTodos((todos) => [
      ...todos.slice(0, idx),
      todo,
      ...todos.slice(idx + 1),
    ]);
  };

  const del = (idx: number) => {
    setTodos((todos) => {
      const newTodos = [...todos];
      newTodos.splice(idx, 1);
      return newTodos;
    });
  };

  return (
    <>
      <div className="mt-20">
        <Header />
        <Input add={add} />
        <Items todos={todos} toggle={toggle} del={del} />
      </div>
    </>
  );
}

export default App;

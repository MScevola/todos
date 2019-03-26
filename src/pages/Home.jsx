import React, { useState } from "react";
import WebFont from "webfontloader";
import styled from "styled-components";

import { ToDoContext } from "../contexts/toDoContext";

import Input from "../components/input";
import Button from "../components/button";
import Categories from "../components/categories";
import ToDos from "../components/todos";

import Lists from "../data/lists";

WebFont.load({
  google: {
    families: ["Montserrat:300,500,600,800", "sans-serif"]
  }
});

const Home = styled("div")`
  background: #ededed;
`;

function Landing() {
  const [actualList, setActualList] = useState(0);
  const [orderTodos, setOrderTodos] = useState(Lists[actualList].todos);
  const [newCategory, setNewCategory] = useState("");

  function addCategory() {
    Lists.push({ name: newCategory, todos: [] });
    setActualList(Lists.length - 1);
  }

  function nameCategory(e) {
    setNewCategory(e.target.value);
  }

  return (
    <ToDoContext.Provider
      value={{
        actualList,
        setActualList,
        orderTodos,
        setOrderTodos,
        newCategory,
        setNewCategory
      }}
    >
      <Home>
        <Input
          placeholder="Nova Categoria"
          value={newCategory}
          onChange={nameCategory}
        />
        <Button onClick={() => addCategory()}>Adicionar</Button>
        <Categories list={Lists} />
        <ToDos todos={Lists[actualList].todos} />
      </Home>
    </ToDoContext.Provider>
  );
}

export default Landing;

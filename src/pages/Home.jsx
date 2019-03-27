import React, { useState } from "react";
import WebFont from "webfontloader";
import styled from "styled-components";

import { ToDoContext } from "../contexts/toDoContext";

import Categories from "../components/categories";
import ToDos from "../components/todos";

import Lists from "../data/lists";

WebFont.load({
  google: {
    families: ["Montserrat:300,500,600,800", "sans-serif"]
  }
});

const Home = styled("div")`
  position: relative;
  display: block;
  margin: 0 auto;
  width: 100%;
  max-width: 900px;
  height: 100vh;
  overflow-x: hidden;
`;

function Landing() {
  const [toDoLists, setToDoLists] = useState(Lists);
  const [actualList, setActualList] = useState(0);
  const [nameCategory, setNameCategory] = useState("");

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
        nameCategory,
        setNameCategory,
        setToDoLists
      }}
    >
      <Home>
        <Categories list={toDoLists} />
        <ToDos todos={toDoLists[actualList].todos} />
      </Home>
    </ToDoContext.Provider>
  );
}

export default Landing;

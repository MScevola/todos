import React, { useState } from "react";
import WebFont from "webfontloader";
import styled from "styled-components";

import { ToDoContext } from '../contexts/toDoContext';

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
  const [nameCategory, setNameCategory] = useState('');

  return (
    <ToDoContext.Provider value={{ actualList, setActualList, orderTodos, setOrderTodos, nameCategory, setNameCategory }}>
      <Home>
        <Categories list={Lists} />
        <ToDos todos={Lists[actualList].todos} />
      </Home>
    </ToDoContext.Provider>
  );
}

export default Landing;

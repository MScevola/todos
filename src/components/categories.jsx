import React, { useContext } from "react";
import styled, { css } from "styled-components";

import Input from "../components/input";
import Button from "../components/button";

import { ToDoContext } from '../contexts/toDoContext';

const style = ({ theme, ...rest }) => css`
  background-color: ${theme.colors.lightest};
  color: ${theme.colors.secondary};
  border-radius: 4px;
  border-width: 2px;
  border-style: solid;
  padding: 10px;
  font-size: 24px;
`;

const StyledList = styled.ul([style]);

function Category({ list }) {
  const { setActualList, nameCategory, setNameCategory } = useContext(ToDoContext);

  const handleNameCategory = (e) => {
    setNameCategory(e.target.value);
  }

  const addCategory = (e) => {
    if (nameCategory !== '') {
      list.push({ name: nameCategory, todos: [] })
      document.getElementById('category').value = '';
      setActualList(list.length - 1);
    }
  }

  function loadList(toDoList) {
    setActualList(toDoList);
  }

  return (
    <div>
      <Input id="category" placeholder="New Category" onChange={handleNameCategory} value={nameCategory} />
      <Button onClick={addCategory}>Adicionar</Button>
      <StyledList>
        {list.map((list, index) => (
          <li id={index} key={index}>
            <button onClick={() => loadList(index)}>{list.name}</button>
          </li>
        ))}
      </StyledList>
    </div>
  );
}

export default Category;

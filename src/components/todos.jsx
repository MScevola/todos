import React, { useContext, useState } from "react";
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

function ToDos({ todos }) {
  const { actualList } = useContext(ToDoContext);
  const [nameTask, setNameTask] = useState('');

  const handleTask = (e) => {
    setNameTask(e.target.value);
  }

  const addTask = () => {
    if (nameTask !== '') {
      todos.push({ name: nameTask, status: false })
      document.getElementById('task').value = '';
      setNameTask('');
    }
  }

  return (
    <div>
      <Input id="task" placeholder="New Task" onChange={handleTask} value={nameTask} />
      <Button onClick={addTask}>Adicionar</Button>
      <StyledList id="todoList">
        {todos.map((list, index) => (
          <li key={index}>
            <label htmlFor={`todo-${actualList}-${index}`}>
              <input type="checkbox" id={`todo-${actualList}-${index}`} checked={list.status} onChange={(e) => ...todos.slice(e.target.checked, {index})} />
              {list.name}
            </label>
          </li>
        ))}
      </StyledList>
    </div>
  );
}

export default ToDos;

import React, { useContext, useState } from "react";
import styled, { css } from "styled-components";

import Input from "../components/input";
import Button from "../components/button";

import iconDelete from "../assets/images/icon-trash.png";

import { ToDoContext } from "../contexts/toDoContext";

const style = ({ theme, ...rest }) => css`
  position: absolute;
  display: block;
  width: 60%;
  height: 100vh;
  padding: 20px;
  top: 0;
  right: 0;
  box-sizing: border-box;
  background-color: ${theme.backgroundColor};
  border: none;

  ul {
    position: relative;
    display: block;
    max-height: calc(100% - 98px);
    margin: 0;
    padding: 20px 0 0;
    list-style: none;
    border-top: ${theme.colors.terciary} solid thin;
    margin-top: 20px;
    overflow-y: auto;

    li {
      position: relative;
      display: block;
      background: ${theme.colors.secondary};
      padding: 6px 10px;
      border-radius: 4px;
      color: ${theme.colors.terciary};
      margin-bottom: 5px;

      input[type="checkbox"] {
        display: inline-block;
        vertical-align: middle;
        width: 18px;
        height: 18px;
        margin-right: 10px;
      }
    }

    .remove {
      position: absolute;
      right: 10px;
      top: 6px;
      background: none;
      border: none;
      padding: 0;

      .icon-delete {
        position: relative;
        display: block;
        width: 18px;
        height: 18px;
        background: url(${iconDelete}) no-repeat center;
        background-size: contain;
      }
    }
  }
`;

const StyledList = styled.div([style]);

function ToDos({ todos }) {
  const { actualList } = useContext(ToDoContext);
  const [nameTask, setNameTask] = useState("");
  const [status, setStatus] = useState("");

  const handleTask = e => {
    setNameTask(e.target.value);
  };

  const addTask = () => {
    if (nameTask !== "") {
      todos.push({ name: nameTask, status: false });
      document.getElementById("task").value = "";
      setNameTask("");
    }
  };

  const handleStatus = index => {
    todos[index].status
      ? (todos[index].status = false)
      : (todos[index].status = true);
    setStatus(status + 1);
  };

  const removeItem = index => {
    todos.splice(index, 1);
    setStatus(status + 1);
  };

  return (
    <StyledList>
      <Input
        id="task"
        placeholder="New Task"
        onChange={handleTask}
        value={nameTask}
      />
      <Button onClick={addTask} className="success">
        Adicionar
      </Button>
      <ul id="todoList">
        {todos.map((list, index) => (
          <li key={index}>
            <label htmlFor={`todo-${actualList}-${index}`}>
              <input
                type="checkbox"
                id={`todo-${actualList}-${index}`}
                checked={list.status}
                onChange={() => handleStatus(index)}
              />
              {list.name}
            </label>
            <button className="remove" onClick={() => removeItem(index)}>
              <i className="icon-delete" />
            </button>
          </li>
        ))}
      </ul>
    </StyledList>
  );
}

export default ToDos;

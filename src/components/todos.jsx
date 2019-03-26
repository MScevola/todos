import React, { useState } from "react";
import styled, { css } from "styled-components";

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
  const [setStatus] = useState();

  function handleStatus(status) {
    status ? setStatus(false) : setStatus(true);
  }

  return (
    <StyledList>
      {todos.map((list, index) => {
        return list.status ? (
          <li id={index} key={index}>
            <label htmlFor={`todo-${index}`}>
              <input
                type="checkbox"
                id={`todo-${index}`}
                defaultChecked
                onChange={() => handleStatus(list.status)}
              />
              {list.name}
            </label>
          </li>
        ) : (
          <li id={index} key={index}>
            <label htmlFor={`todo-${index}`}>
              <input
                type="checkbox"
                id={`todo-${index}`}
                onChange={() => handleStatus(list.status)}
              />
              {list.name}
            </label>
          </li>
        );
      })}
    </StyledList>
  );
}

export default ToDos;

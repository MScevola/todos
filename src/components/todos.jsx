import React from "react";
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

const Todos = ({ todos }) => (
  <StyledList>
    {todos.map((list, index) => (
      <li key={index}>
        {index} - {list.name}
      </li>
    ))}
  </StyledList>
);

export default Todos;

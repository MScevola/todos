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

const loadList = () => {
  console.log('lista');
}

const Category = ({ list }) => (
  <StyledList>{
    list.map((list) => (
      <li key={list.id}>
        <button onClick={loadList}>{list.name}</button>
      </li>
    ))
  }</StyledList>
);

export default Category;
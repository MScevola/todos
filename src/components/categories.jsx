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

function Category({ list }) {
  const [actualList, setActualList] = useState(0);

  return (
    <StyledList>
      {actualList}
      {list.map((list, index) => (
        <li id={index} key={index}>
          <button onClick={() => setActualList(index)}>{list.name}</button>
        </li>
      ))}
    </StyledList>
  );
}

export default Category;

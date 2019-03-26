import React, { useContext } from "react";
import styled, { css } from "styled-components";
import { SortableContainer, SortableElement } from "react-sortable-hoc";
import arrayMove from "array-move";

import { ToDoContext } from "../contexts/toDoContext";

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

const SortableItem = SortableElement(({ value }) => <li>{value}</li>);

const SortableList = SortableContainer(({ items }) => {
  return (
    <StyledList>
      {items.map((list, index) => (
        <SortableItem key={`item-${index}`} index={index} value={list.name} />
      ))}
    </StyledList>
  );
});

function ToDos({ todos }) {
  const { orderTodos, setOrderTodos } = useContext(ToDoContext);

  setOrderTodos(todos);

  console.log("aciona", orderTodos);

  const onSortEnd = ({ oldIndex, newIndex }) => {
    setOrderTodos(arrayMove(orderTodos, oldIndex, newIndex));
  };

  return <SortableList items={orderTodos} onSortEnd={onSortEnd} />;
}

export default ToDos;

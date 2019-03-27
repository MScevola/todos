import React, { useContext, useState } from "react";
import styled, { css } from "styled-components";
import classNames from "classnames";

import Input from "../components/input";
import Button from "../components/button";
import CloseButton from "../components/closeButton";
import AddButton from "../components/addButton";
import Modal from "../components/modal";

import { ToDoContext } from "../contexts/toDoContext";

const style = ({ theme, ...rest }) => css`
  position: absolute;
  display: block;
  width: 40%;
  height: 100vh;
  padding: 20px;
  box-sizing: border-box;
  background-color: ${theme.colors.primary};
  border: none;

  ul {
    margin: 0;
    padding: 0;
    list-style: none;

    li {
      margin: 0 0 5px;

      button {
        position: relative;
        display: block;
        background: ${theme.colors.secondary};
        color: ${theme.colors.primary};
        border: none;
        text-align: left;
        padding: 6px 10px;
        border-radius: 4px;
        width: 100%;

        :focus {
          outline: none;
        }
      }
    }
  }
`;

const StyledCategories = styled.div([style]);

function Category({ list }) {
  const { setActualList, nameCategory, setNameCategory } = useContext(
    ToDoContext
  );
  const [modal, setModal] = useState(false);

  const modalClasses = classNames({
    modal: true,
    open: modal
  });

  const handleModal = () => {
    modal ? setModal(false) : setModal(true);
  };

  const handleNameCategory = e => {
    setNameCategory(e.target.value);
  };

  const addCategory = e => {
    if (nameCategory !== "") {
      list.push({ name: nameCategory, todos: [] });
      document.getElementById("category").value = "";
      setActualList(list.length - 1);
      setModal(false);
    }
  };

  function loadList(toDoList) {
    setActualList(toDoList);
  }

  return (
    <StyledCategories>
      <Modal className={modalClasses}>
        <CloseButton className="close-modal" onClick={handleModal} />
        <Input
          id="category"
          placeholder="New Category"
          onChange={handleNameCategory}
          value={nameCategory}
        />
        <Button onClick={addCategory} className="success">
          Adicionar
        </Button>
      </Modal>
      <AddButton className="add-category" onClick={handleModal} />
      <ul>
        {list.map((list, index) => (
          <li id={index} key={index}>
            <button onClick={() => loadList(index)}>{list.name}</button>
          </li>
        ))}
      </ul>
    </StyledCategories>
  );
}

export default Category;

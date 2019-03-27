import React from "react";
import styled, { css } from "styled-components";

const style = ({ theme, ...rest }) => css`
  position: relative;
  display: block;
  padding: 6px 10px;
  box-sizing: border-box;
  width: 100%;
  background: ${theme.colors.secondary};
  border: ${theme.colors.terciary} solid thin;
  border-radius: 4px;
  font-size: 1rem;
  margin: 0 0 6px;
`;

const StyledInput = styled.input([style]);

const Input = ({ id, placeholder, onChange }) => (
  <StyledInput
    type="text"
    id={id}
    placeholder={placeholder}
    onChange={onChange}
  />
);

export default Input;

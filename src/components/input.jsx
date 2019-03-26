import React from "react";
import styled, { css } from "styled-components";

const style = ({ theme, ...rest }) => css`
  border-color: ${theme.colors.lightest};
  background-color: ${theme.colors.primary};
  color: ${theme.colors.lightest};
  border-width: 2px;
  border-style: solid;
  padding: 10px;
  font-size: 24px;
`;

const StyledInput = styled.input([style]);

const Input = ({ name, placeholder, value, onChange }) => (
  <StyledInput
    type="text"
    name={name}
    placeholder={placeholder}
    value={value}
    onChange={onChange}
  />
);

export default Input;

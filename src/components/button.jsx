import React from "react";
import styled, { css } from "styled-components";

const style = ({ theme, ...rest }) => css`
  position: relative;
  display: block;
  padding: 6px 10px;
  box-sizing: border-box;
  width: 100%;
  background-color: ${theme.colors.lightest};
  color: ${theme.colors.primary};
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  margin: 0 0 6px;

  &:hover {
    color: ${theme.colors.primary};
    background-color: ${theme.colors.secondary};
  }

  &:focus {
    background-color: ${theme.colors.primary};
    outline: none;
  }

  &.success {
    background-color: ${theme.colors.success};

    &:hover,
    &:focus {
      background-color: ${theme.colors.successHover};
    }
  }
`;

const ButtonBase = styled.button([style]);

const Button = ({ onClick, children, className }) => (
  <ButtonBase onClick={onClick} className={className}>
    {children}
  </ButtonBase>
);

export default Button;

import React from "react";
import styled, { css } from "styled-components";

const style = ({ theme, ...rest }) => css`
  border-color: ${theme.colors.primary};
  background-color: ${theme.colors.lightest};
  color: ${theme.colors.secondary};
  border-width: 2px;
  border-style: solid;
  padding: 10px;
  font-size: 24px;

  :hover {
    color: ${theme.colors.lightest};
    background-color: ${theme.colors.secondary};
  }
`;

const ButtonBase = styled.button([style]);

export const Button = ({ onClick, children }) => (
  <ButtonBase onClick={onClick}>{children}</ButtonBase>
);
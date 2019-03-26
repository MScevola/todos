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

  :hover {
    color: ${theme.colors.lightest};
    background-color: ${theme.colors.secondary};
  }
`;

const ButtonBase = styled.button([style]);

const Button = ({ onClick, children }) => (
  <ButtonBase onClick={onClick}>{children}</ButtonBase>
);

export default Button;
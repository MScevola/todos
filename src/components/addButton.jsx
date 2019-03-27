import React from "react";
import styled, { css } from "styled-components";

const style = ({ theme, ...rest }) => css`
  position: relative;
  display: block;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  border: none;
  margin: 0 0 20px;
  background-color: ${theme.colors.success};

  :hover,
  :focus {
    background-color: ${theme.colors.successHover};
    outline: none;
  }

  :before,
  :after {
    position: absolute;
    display: block;
    content: "";
    width: 20px;
    height: 2px;
    background: ${theme.colors.primary};
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  :after {
    transform: translate(-50%, -50%) rotate(90deg);
  }
`;

const ButtonBase = styled.button([style]);

const AddButton = ({ onClick, children, className }) => (
  <ButtonBase onClick={onClick} className={className}>
    {children}
  </ButtonBase>
);

export default AddButton;

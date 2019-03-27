import React from "react";
import styled, { css } from "styled-components";

const style = ({ theme, ...rest }) => css`
  position: relative;
  display: block;
  width: 20px;
  height: 20px;
  float: right;
  border-radius: 50%;
  border: none;
  margin: 0 0 20px;
  background-color: ${theme.colors.warning};

  :hover,
  :focus {
    background-color: ${theme.colors.warningHover};
    outline: none;
  }

  :before,
  :after {
    position: absolute;
    display: block;
    content: "";
    width: 10px;
    height: 2px;
    background: ${theme.colors.primary};
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) rotate(45deg);
  }

  :after {
    transform: translate(-50%, -50%) rotate(-45deg);
  }
`;

const ButtonBase = styled.button([style]);

const CloseButton = ({ onClick, children, className }) => (
  <ButtonBase onClick={onClick} className={className}>
    {children}
  </ButtonBase>
);

export default CloseButton;

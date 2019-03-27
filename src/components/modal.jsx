import React from "react";
import styled, { css } from "styled-components";

const style = ({ theme, ...rest }) => css`
  position: fixed;
  display: block;
  width: 100vw;
  height: 0;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0);
  z-index: 5;
  transition: all 0.3s ease-in-out;

  .modal-wrapper {
    position: relative;
    display: block;
    margin: 20px auto;
    width: 100%;
    max-width: 80vw;
    transition: all 0.3s ease-in-out;
    transform: translateX(-140%);
  }

  &.open {
    background: rgba(0, 0, 0, 0.8);
    height: 100vh;

    .modal-wrapper {
      transform: none;
    }
  }
`;

const StyledModal = styled.div([style]);

const Modal = ({ onClick, children, className }) => (
  <StyledModal onClick={onClick} className={className}>
    <div className="modal-wrapper">{children}</div>
  </StyledModal>
);

export default Modal;

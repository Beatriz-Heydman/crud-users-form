import styled from "styled-components";

type OverlayProps = {
  isOpen: boolean;
};

export const Overlay = styled.div<OverlayProps>`
  background-color: #00000072;
  position: fixed;
  inset: 0;
  display: flex;
  opacity: ${({ isOpen }) => (isOpen ? 1 : 0)};
  justify-content: center;
  align-items: center;
  pointer-events: ${({ isOpen }) => (isOpen ? "auto" : "none")};
  transition: all ease 0.2s;

  .modal_content {
    background-color: #ffffff;
    width: auto;
    height: auto;
    display: flex;
    border: 1px solid #e0e0e0;
    border-radius: 0.5rem;
    padding: 2rem;
  }
`;

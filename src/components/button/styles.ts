//Libs
import styled from "styled-components";

//Types
import { ButtonProps } from "./types";

export const Button = styled.button<ButtonProps>`
  background-color: ${({ background = "#378EDC" }) => background};
  width: fit-content;
  height: fit-content;
  padding: 0.75rem 1.5rem;
  border-radius: 0.5rem;
  cursor: pointer;
  color: ${({ color = "#ffffff" }) => color};
  border: ${({ border = "none" }) => border};
  transition: all ease 0.2s;

  &:hover {
    filter: brightness(1.1);
  }

  @media (max-width: 600px) {
    width: 100%;
  }
`;

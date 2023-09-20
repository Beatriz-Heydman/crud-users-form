//Libs
import styled from "styled-components";

//Types
import { TextProps } from "./types";

export const Text = styled.span<TextProps>`
  font-size: ${({ fontSize = "1rem" }) => fontSize};
  font-weight: ${({ fontWeight = "500" }) => fontWeight};
  color: ${({ color = "black" }) => color};
  padding: 0;
`;

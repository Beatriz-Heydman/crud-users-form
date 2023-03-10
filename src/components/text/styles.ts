import styled from "styled-components";
import { TextProps } from "./types";

export const Text = styled.span<TextProps>`
  font-size: ${({ fontSize = "1rem" }) => fontSize};
  font-weight: ${({ fontWeight = "600" }) => fontWeight};
  color: ${({ color = "black" }) => color};
`;

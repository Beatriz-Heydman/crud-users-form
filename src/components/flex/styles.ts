import styled from "styled-components";
import { FlexProps } from "./types";

export const Flex = styled.div<FlexProps>`
  display: flex;
  justify-content: ${({ justifyContent = "center" }) => justifyContent};
  align-items: ${({ alignItems = "center" }) => alignItems};
  flex-direction: ${({ direction = "row" }) => direction};
  gap: ${({ gap = "0" }) => gap};
`;

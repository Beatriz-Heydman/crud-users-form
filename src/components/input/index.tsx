import { Flex } from "../flex/styles";
import { StyledInput, StyledLabel } from "./styles";
import { InputProps } from "./types";

export function Input({ label, ...inputProps }: InputProps) {
  return (
    <Flex
      direction="column"
      alignItems="flex-start"
      gap="0.625rem"
      style={{ width: "100%" }}
    >
      <StyledLabel>{label}</StyledLabel>
      <StyledInput {...inputProps} />
    </Flex>
  );
}

//Components
import { Flex } from "../flex/styles";

//Styles
import { StyledInput, StyledLabel } from "./styles";

//Types
import { InputProps } from "./types";

export function Input({ label, ...inputProps }: InputProps) {
  return (
    <Flex
      direction="column"
      alignItems="flex-start"
      gap={label ? "0.625rem" : "0"}
      style={{ width: "100%" }}
    >
      <StyledLabel>{label}</StyledLabel>
      <StyledInput {...inputProps} />
    </Flex>
  );
}

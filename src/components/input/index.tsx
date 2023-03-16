//styles
import { Flex } from "../flex/styles";
import { StyledInput, StyledLabel } from "./styles";

//type
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

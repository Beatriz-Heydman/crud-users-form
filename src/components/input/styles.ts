import styled from "styled-components";

export const StyledInput = styled.input`
  width: 100%;
  background-color: #ffffff;
  border: 1px solid #e0e0e0;
  border-radius: 0.5rem;
  padding: 0.75rem;
  outline: none;
  transition: all ease 0.2s;

  &:focus {
    outline: 1px solid #378edc;
  }
`;

export const StyledLabel = styled.label`
  color: #8a8a8a;
  font-size: 0.75rem;
  font-weight: 400;
`;

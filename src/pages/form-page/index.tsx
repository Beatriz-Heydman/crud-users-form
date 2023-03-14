import { Bar } from "./components/bar/styles";
import { Form } from "./components/form";
import { PageFormContainer } from "./styles";

export function PageForm() {
  return (
    <PageFormContainer>
      <Bar />
      <Form />
    </PageFormContainer>
  );
}

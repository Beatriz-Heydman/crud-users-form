//components
import { Bar } from "./components/bar/styles";
import { Form } from "./components/form";

//styles
import { PageFormContainer } from "./styles";

export function PageForm() {
  return (
    <PageFormContainer>
      <Bar />
      <Form />
    </PageFormContainer>
  );
}

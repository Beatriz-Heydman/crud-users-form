//Libs
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

//Components
import { Button } from "../../../../components/button/styles";
import { Flex } from "../../../../components/flex/styles";
import { Input } from "../../../../components/input";
import { Text } from "../../../../components/text/styles";

//Styles
import { FormContainer } from "./styles";

export function Form() {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState("");

  const [isLoadingPostUser, setIsLoadingPostUser] = useState(false);

  const route = "http://localhost:3001/users";

  const navigate = useNavigate();

  async function addUser() {
    if (name && surname && email) {
      try {
        setIsLoadingPostUser(true);
        await axios.post(route, { name, surname, email });

        navigate("/lista-usuarios");
      } catch (error) {
        console.error("Não foi possivel criar usuario", error);
      } finally {
        setIsLoadingPostUser(false);
      }
    }
  }

  return (
    <FormContainer>
      <Flex
        direction="column"
        justifyContent="flex-start"
        alignItems="flex-start"
      >
        <Text color="#d2d2d2" fontSize="2rem" fontWeight="600">
          Olá
        </Text>
        <Text color="#378EDC" fontSize="2rem" fontWeight="600">
          Cadastre-se{" "}
        </Text>
      </Flex>
      <Flex gap="2rem" direction="column">
        <Input
          label="Digite seu nome"
          onChange={(event) => setName(event.currentTarget.value)}
        />
        <Input
          label="Digite seu sobrenome"
          onChange={(event) => setSurname(event.currentTarget.value)}
        />
        <Input
          type="email"
          label="Digite seu email"
          onChange={(event) => setEmail(event.currentTarget.value)}
        />
      </Flex>

      <Button disabled={isLoadingPostUser} onClick={addUser}>
        {isLoadingPostUser ? "Carregando..." : "Enviar"}
      </Button>
    </FormContainer>
  );
}

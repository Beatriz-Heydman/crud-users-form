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

  const [hasNoName, setHasNoName] = useState(false);
  const [hasNoSurname, setHasNoSurname] = useState(false);
  const [hasNoEmail, setHasNoEmail] = useState(false);

  const [isLoadingPostUser, setIsLoadingPostUser] = useState(false);

  const route = "http://localhost:3001/users";

  const navigate = useNavigate();

  async function addUser() {
    if (name === "") {
      setHasNoName(true);
    }
    if (surname === "") {
      setHasNoSurname(true);
    }
    if (email === "") {
      setHasNoEmail(true);
      return;
    }
    if (name && surname && email) {
      try {
        setIsLoadingPostUser(true);
        await axios.post(route, { name, surname, email });

        navigate("/");
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
        <Flex
          direction="column"
          alignItems="flex-start"
          gap="0.5rem"
          style={{ width: "100%" }}
        >
          <Input
            type="text"
            label="Digite seu nome"
            onChange={(event) => {
              setName(event.currentTarget.value);
              setHasNoName(false);
            }}
          />
          {hasNoName && (
            <Text color="red" fontSize="0.7rem">
              Campo obrigatório
            </Text>
          )}
        </Flex>

        <Flex
          direction="column"
          alignItems="flex-start"
          gap="0.5rem"
          style={{ width: "100%" }}
        >
          <Input
            type="text"
            label="Digite seu sobrenome"
            onChange={(event) => {
              setSurname(event.currentTarget.value);
              setHasNoSurname(false);
            }}
          />
          {hasNoSurname && (
            <Text color="red" fontSize="0.7rem">
              Campo obrigatório
            </Text>
          )}
        </Flex>

        <Flex
          direction="column"
          alignItems="flex-start"
          gap="0.5rem"
          style={{ width: "100%" }}
        >
          <Input
            type="email"
            label="Digite seu email"
            onChange={(event) => {
              setEmail(event.currentTarget.value);
              setHasNoEmail(false);
            }}
          />
          {hasNoEmail && (
            <Text color="red" fontSize="0.7rem">
              Campo obrigatório
            </Text>
          )}
        </Flex>
      </Flex>

      <Button
        disabled={isLoadingPostUser}
        onClick={addUser}
        className="create_user_button"
      >
        {isLoadingPostUser ? "Carregando..." : "Enviar"}
      </Button>
    </FormContainer>
  );
}

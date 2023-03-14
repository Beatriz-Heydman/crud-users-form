//libs
import axios from "axios";
import { useEffect, useState } from "react";
import { BsFillPlusCircleFill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

//components
import { Button } from "../../../../components/button/styles";
import { Flex } from "../../../../components/flex/styles";
import { Input } from "../../../../components/input";
import { Text } from "../../../../components/text/styles";
import { UserCard } from "../user-card";

//styles
import { UsersPageContentContainer } from "./styles";
import { User } from "./types";

export function UsersPageContent() {
  const route = "http://localhost:3001/users";

  const navigate = useNavigate();

  const [users, setUsers] = useState<User[]>([]);

  const [isLoadingUser, setIsLoadingUsers] = useState(false);

  async function getUser() {
    setIsLoadingUsers(true);

    try {
      const response = await axios.get(route);
      setUsers(response.data);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoadingUsers(false);
    }
  }

  useEffect(() => {
    getUser();
  }, []);

  return (
    <UsersPageContentContainer>
      <Flex justifyContent="space-between">
        <Flex gap="1rem" alignItems="center">
          <Input placeholder="Pesquisar usuário" style={{ width: "350px" }} />
          <Button>Pesquisar</Button>
        </Flex>
        <Button
          background="#ffffff"
          border="1px solid #378EDC"
          color="#378EDC"
          onClick={() => {
            navigate("/new-user");
          }}
        >
          <Flex gap="0.5rem">
            <BsFillPlusCircleFill />
            Adicionar usuário
          </Flex>
        </Button>
      </Flex>

      {isLoadingUser ? (
        <Flex
          justifyContent="center"
          alignItems="center"
          style={{ height: "100%" }}
        >
          <Text>Carregando...</Text>
        </Flex>
      ) : (
        users.map((user, index) => (
          <UserCard
            key={index}
            name={user.name}
            surname={user.surname}
            email={user.email}
            onClickEdit={() => {
              console.log("eai mano");
            }}
            onClickRemove={() => {
              console.log("loguei");
            }}
          />
        ))
      )}
    </UsersPageContentContainer>
  );
}

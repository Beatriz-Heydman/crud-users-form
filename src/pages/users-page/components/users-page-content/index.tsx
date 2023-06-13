//libs
import axios from "axios";
import { useEffect, useState } from "react";
import { BsFillPlusCircleFill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

//components
import { Button } from "../../../../components/button/styles";
import { Flex } from "../../../../components/flex/styles";
import { Input } from "../../../../components/input";
import { Modal } from "../../../../components/modal";
import { Text } from "../../../../components/text/styles";
import { UserCard } from "../user-card";

//styles
import { UsersPageContentContainer } from "./styles";

//types
import { User } from "./types";

export function UsersPageContent() {
  const route = "http://localhost:3001/users";

  const navigate = useNavigate();

  const [users, setUsers] = useState<User[]>([]);

  const [isLoadingUser, setIsLoadingUsers] = useState(false);

  const [isOpenEditModal, setIsOpenEditModal] = useState(false);

  const [isOpenRemoveModal, setIsOpenRemoveModal] = useState(false);

  const [inputValue, setInputValue] = useState("");

  const defaultValueUser: User = {
    email: "",
    id: 0,
    name: "",
    surname: "",
  };

  const [deletedUser, setDeletedUser] = useState<User>(defaultValueUser);

  const [editedUser, setEditedUser] = useState<User>(defaultValueUser);

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

  async function removeUser(id: number) {
    try {
      await axios.delete(`http://localhost:3001/users/${id}`);
      setIsOpenRemoveModal(false);

      const newUsers = users.filter((user) => user.id !== deletedUser?.id);

      setUsers(newUsers);
    } catch (error) {
      console.log(error);
    }
  }

  async function updateUser(id: number) {
    try {
      await axios.put(`http://localhost:3001/users/${id}`, editedUser);
      setIsOpenEditModal(false);

      const newUsers = users.map((user) => {
        if (user.id === editedUser.id) {
          return editedUser;
        } else {
          return user;
        }
      });

      setUsers(newUsers);
    } catch (error) {}
  }

  useEffect(() => {
    getUser();
  }, []);

  const filteredUsers = users.filter((user) => {
    const fullName = `${user.name} ${user.surname}`;

    return fullName.includes(inputValue);
  });

  return (
    <UsersPageContentContainer>
      <Modal
        isOpen={isOpenEditModal}
        onClose={() => {
          setIsOpenEditModal(false);
        }}
      >
        <Flex
          className="container_edit_user_modal"
          gap="1rem"
          direction="column"
          justifyContent="space-between"
          alignItems="flex-start"
        >
          <Text color="#378EDC" fontSize="2rem" fontWeight="600">
            Editar usuário
          </Text>
          <Input
            label="Nome"
            value={editedUser.name}
            onChange={(event) => {
              const inputNameValue = event.currentTarget.value;

              setEditedUser({
                ...editedUser,
                name: inputNameValue,
              });
            }}
          />
          <Input
            label="Sobrenome"
            value={editedUser.surname}
            onChange={(event) => {
              const inputNameValue = event.currentTarget.value;

              setEditedUser({
                ...editedUser,
                surname: inputNameValue,
              });
            }}
          />
          <Input
            label="Email"
            value={editedUser.email}
            onChange={(event) => {
              const inputNameValue = event.currentTarget.value;

              setEditedUser({
                ...editedUser,
                email: inputNameValue,
              });
            }}
          />
          <Button
            className="send_button_edit_user"
            onClick={() => {
              updateUser(editedUser.id);
            }}
          >
            Enviar
          </Button>
        </Flex>
      </Modal>

      <Modal
        isOpen={isOpenRemoveModal}
        onClose={() => {
          setIsOpenRemoveModal(false);
        }}
      >
        <Flex
          className="container_remove_user_modal"
          gap="1rem"
          direction="column"
          alignItems="flex-start"
        >
          <Text color="#FF3A3A" fontSize="2rem" fontWeight="600">
            Excluir usuário
          </Text>
          <Text color="#8A8A8A" fontSize="1.125rem" fontWeight="400">
            Tem certeza que deseja excluir{" "}
            <Text
              fontWeight="500"
              color="#8A8A8A"
              style={{ textDecoration: "underline" }}
            >
              {`${deletedUser?.name} ${deletedUser?.surname}`}
            </Text>
            ?
          </Text>
          <Button
            className="remove_button_user"
            background="#FF3A3A"
            onClick={() => {
              if (deletedUser) {
                removeUser(deletedUser?.id);
              }
            }}
          >
            Excluir
          </Button>
        </Flex>
      </Modal>

      <Flex justifyContent="space-between">
        <Flex gap="1rem" alignItems="center">
          <Input
            placeholder="Pesquisar usuário"
            style={{ width: "350px" }}
            onChange={(event) => {
              const value = event.currentTarget.value;
              setInputValue(value);
            }}
          />
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
        filteredUsers.map((user, index) => (
          <UserCard
            key={index}
            name={user.name}
            surname={user.surname}
            email={user.email}
            onClickEdit={() => {
              setEditedUser(user);
              setIsOpenEditModal(true);
            }}
            onClickRemove={() => {
              setDeletedUser(user);
              setIsOpenRemoveModal(true);
            }}
          />
        ))
      )}
    </UsersPageContentContainer>
  );
}

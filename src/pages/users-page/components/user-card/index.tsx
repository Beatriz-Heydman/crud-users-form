//libs
import { MdEdit } from "react-icons/md";
import { VscTrash } from "react-icons/vsc";

//components
import { Flex } from "../../../../components/flex/styles";
import { Text } from "../../../../components/text/styles";

//styles
import { UserCardContainer } from "./styles";

//types
import { UserCardProps } from "./types";

export function UserCard({
  name,
  surname,
  email,
  onClickEdit,
  onClickRemove,
}: UserCardProps) {
  const shortName = `${name[0].toUpperCase()}${surname[0].toUpperCase()}`;

  return (
    <UserCardContainer>
      <Flex className="container_users_info" gap="1rem">
        <div className="container_avatar">
          <Text color="#000000" fontSize="1rem">
            {shortName}
          </Text>
        </div>
        <Flex direction="column" alignItems="flex-start">
          <Text color="#000000" fontWeight="400" fontSize="1.125rem">
            {`${name} ${surname}`}
          </Text>
          <Text color="#949494" fontWeight="300" fontSize="1rem">
            {email}
          </Text>
        </Flex>
      </Flex>
      <Flex className="container_icons" justifyContent="flex-end" gap="1rem">
        <MdEdit color="#949494" onClick={onClickEdit} />
        <VscTrash color="#f30000" onClick={onClickRemove} />
      </Flex>
    </UserCardContainer>
  );
}

//components
import { HeaderUsersPage } from "./components/header/styles";
import { Text } from "../../components/text/styles";
import { UsersPageContent } from "./components/users-page-content";

//styles
import { UsersPageContainer } from "./styles";

export function UsersPage() {
  return (
    <UsersPageContainer>
      <HeaderUsersPage>
        <Text color="#378EDC" fontSize="2rem" fontWeight="600">
          Listagem de usuários
        </Text>
      </HeaderUsersPage>
      <UsersPageContent />
    </UsersPageContainer>
  );
}

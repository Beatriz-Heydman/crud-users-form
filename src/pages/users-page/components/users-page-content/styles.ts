import styled from "styled-components";

export const UsersPageContentContainer = styled.div`
  width: 100%;
  height: 100%;
  background-color: #f8faf9;
  display: flex;
  flex-direction: column;
  padding: 2rem;
  gap: 2rem;

  .container_edit_user_modal {
    width: 400px;

    .send_button_edit_user {
      width: 100%;
    }
  }

  .container_remove_user_modal {
    width: 300px;
    .remove_button_user {
      width: 100%;
    }
  }
`;

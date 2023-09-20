import styled from "styled-components";

export const UsersPageContentContainer = styled.div`
  width: 100%;
  height: 100%;
  background-color: #f8faf9;
  display: flex;
  flex-direction: column;
  padding: 2rem;
  gap: 2rem;

  .edit_user_modal_container {
    width: 100%;

    .send_button_edit_user {
      width: 100%;
    }
  }

  .remove_user_modal_container {
    width: 100%;
    .remove_button_user {
      width: 100%;
    }
  }

  .search_content {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1rem;

    @media (max-width: 600px) {
      flex-direction: column;
    }
  }
`;

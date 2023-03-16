import styled from "styled-components";

export const UserCardContainer = styled.div`
  background-color: #ffffff;
  width: 100%;
  border-radius: 0.5rem;
  border: 1px solid #e0e0e0;
  box-shadow: 0px 4px 4px #eeeeee;
  box-sizing: border-box;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  .container_users_info {
    width: 100%;
    display: flex;
    justify-content: flex-start;
  }

  .container_avatar {
    width: 54px;
    height: 54px;
    background-color: #b9abab;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .container_icons {
    width: 100%;
    cursor: pointer;
  }
`;

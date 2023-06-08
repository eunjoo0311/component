import React from "react";
import styled from "styled-components";
import foodzim from "../assets/basic-profile-sm.svg";
const SearchWrapper = styled.ul`
  padding: 0;
`;

const List = styled.li`
  list-style: none;
  display: flex;
  margin: 8px 16px;
  gap: 12px;
`;

const SearchBtn = styled.button`
  width: 100%;
  background: none;
  border: none;
  display: flex;
  align-items: center;
  gap: 12px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: rgba(0, 0, 0, 0.1);
  }
`;

const ProfileImg = styled.img`
  border-radius: 50%;
`;

const TextWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 5px;
`;

const UserName = styled.strong`
  font-size: 14px;
`;

const UserID = styled.p`
  margin: 0;
  font-size: 12px;
  color: #767676;
`;

export default function SearchList() {
  return (
    <SearchWrapper>
      <List>
        <SearchBtn>
          <ProfileImg src={foodzim} alt="프로필 이미지" />
          <TextWrap>
            <UserName>애월읍 위니브 감귤농장</UserName>
            <UserID>@ weniv_Mandarin</UserID>
          </TextWrap>
        </SearchBtn>
      </List>
    </SearchWrapper>
  );
}

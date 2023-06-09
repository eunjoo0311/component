import React, { useState } from "react";
import imageIcon from "../../assets/img-button.svg";
import styled from "styled-components";

const ChatNavBar = styled.div`
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 13px 16px;
  background-color: white;
`;

const ImageIcon = styled.img`
  width: 36px;
  height: 36px;
`;

const Input = styled.input`
  /* 입력 요소의 기본 스타일 초기화 */
  border: none;
  outline: none;
  padding: 0;
  margin: 0 18px;
  width: 100%;
  font-size: 14px;
  &::placeholder {
    color: #c4c4c4;
  }
`;

const SendBtn = styled.button`
  /* 버튼 스타일 수정 */
  width: 70px;
  border: none;
  background: none;
  color: ${({ hasText }) => (hasText ? "#286140" : "#C4C4C4")};
  padding: 0;
  margin: 0;
  font-size: 14px;
  cursor: pointer;
`;

export default function ChatNavigation() {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = event => {
    setInputValue(event.target.value);
  };

  return (
    <ChatNavBar>
      <ImageIcon src={imageIcon} alt="사진 선택하기" />
      <Input
        type="text"
        placeholder="메시지 입력하기.."
        value={inputValue}
        onChange={handleInputChange}
      />
      <SendBtn hasText={inputValue.trim().length > 0}>전송</SendBtn>
    </ChatNavBar>
  );
}

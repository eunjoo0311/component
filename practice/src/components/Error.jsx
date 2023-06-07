import styled from "styled-components";
import errorIcon from "../assets/icon-404.svg";

const ErrorWrapper = styled.div`
  display: flex;
  height: 100vh;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 20px;
`;
const ErrorImg = styled.img`
  margin-bottom: 12px;
`;
const ErrorText = styled.h2`
  font-weight: 400;
  font-size: 14px;
  color: #767676;
`;
const ErrorBtn = styled.button`
  width: 120px;
  height: 44px;
  background-color: #286140;
  color: white;
  border: none;
  border-radius: 44px;
  font-size: 14px;
`;
export default function Error() {
  return (
    <ErrorWrapper>
      <ErrorImg src={errorIcon} alt="404페이지" />
      <ErrorText>페이지를 찾을 수 없습니다.:&#40;</ErrorText>
      <ErrorBtn>이전 페이지</ErrorBtn>
    </ErrorWrapper>
  );
}

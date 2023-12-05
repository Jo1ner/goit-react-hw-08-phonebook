import styled from 'styled-components';

export const ContactItem = styled.li`
  display: flex;
  gap: 10px;
  justify-content: space-between;
  align-items: center;
  margin-top: 8px;
  margin-bottom: 8px;

  span {
    font-size: 26px;
    font-weight: 400;
  }
  .wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 14px;
  }
`;

export const ButtonDelete = styled.button`
  cursor: pointer;
  color: #6d7e86;
  background-color: #dddddd;
  border: 2px solid #679173;
  border-radius: 10px;
  transition: all 0.3s;
  font-size: 20px;
  padding: 10px;
  &:hover {
    background-color: #bebecf;
  }
`;

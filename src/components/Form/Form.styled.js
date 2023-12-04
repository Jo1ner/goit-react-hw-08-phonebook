import styled from 'styled-components';

export const FormStyle = styled.form`
  padding: 15px;
  border: 3px solid #679173;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  .title {
    font-size: 32px;
    font-weight: 500;
  }
  .text {
    font-size: 20px;
    text-align: start;
  }
  .input {
    font-size: 30px;
  }
  button {
    width: 100%;
    display: block;
    margin-top: 15px;
    color: #6d7e86;
    font-size: 20px;
    padding: 10px;
    background-color: #dddddd;
    border: 2px solid #679173;
    border-radius: 10px;
    transition: all 0.3s;
    cursor: pointer;

    &:hover {
      background-color: #bebecf;
    }
  }
`;

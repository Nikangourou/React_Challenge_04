import styled from "styled-components";

export const Keybord = styled.div`
  display: flex;
  gap: 10px;
`;

export const KeybordeNumeriqueContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 50px);
  grid-gap: 10px;
`;

export const KeybordeOperationContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 50px);
  grid-gap: 10px;
`;

export const Button = styled.button`
  background-color: #a0d9d9;
  border: none;
  color: white;
  border-radius: 5px;
  padding: 5px 10px;
  font-size: 20px;
  box-shadow: 2px 2px 2px #0000006b;
  
`;

export const ButtonOperation = styled.button`
  background-color: #45858c;
  border: none;
  color: white;
  border-radius: 5px;
  padding: 5px 10px;
  font-size: 20px;
  box-shadow: 2px 2px 2px #0000006b;
`;

export const ButtonReset = styled.button`
  background-color: #d92b04;
  border: none;
  color: white;
  border-radius: 5px;
  padding: 5px 10px;
  font-size: 20px;
  box-shadow: 2px 2px 2px #0000006b;
`;

export const ButtonEqual = styled.button`
background-color: #436399;
  border: none;
  color: white;
  border-radius: 5px;
  padding: 5px 10px;
  font-size: 20px;
  grid-column: 2 / 4;
  box-shadow: 2px 2px 2px #0000006b;
`;

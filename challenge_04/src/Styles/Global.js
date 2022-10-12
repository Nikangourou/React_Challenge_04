import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #bf9765;
  min-height: 100vh;
`;

export const Calculette = styled.div`
  background-color: #d9c589;
  border-radius: 20px;
  padding: 20px;
  box-shadow: 5px 5px 2px #0000006b;
`;

export const Screen = styled.p`
  background-color: #a1b5d9;
  border-radius: 5px;
  padding: 5px 10px;
  font-size: 20px;
  box-shadow: inset 5px 5px 2px #0000001f;
  height: 50px;
  text-align: right;
`;

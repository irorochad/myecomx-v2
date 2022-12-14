import styled from "styled-components";

export const CartDropDownContainer = styled.div`
  position: absolute;
  width: 290px;
  display: flex;
  flex-direction: column;
  padding: 20px;
  border: 1px solid black;
  background-color: white;
  top: 90px;
  right: 40px;
  z-index: 5;
`;

export const CartItems = styled.div`
  height: 240px;
  display: flex;
  flex-direction: column;
  overflow: scroll;
`;

export const EmptyMsg = styled.h2`
  font-size: 18px;
  margin: 50px auto;
`;


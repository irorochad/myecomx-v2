import styled from "styled-components";

export const CategoryContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  column-gap: 10px;
  row-gap: 50px;

  // Ipads
  @media only screen and (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  // Computer screens
  @media only screen and (min-width: 1200px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

export const Title = styled.h2`
  font-size: 38px;
  margin-bottom: 15px;
  text-align: center;
`;

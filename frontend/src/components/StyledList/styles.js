import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-template-columns: ${({ columnDivision }) => `repeat(auto-fill, ${columnDivision}%)`};
  background: #fff;
  padding: 20px;
`;

export const HeaderItem = styled.strong`
  text-transform: uppercase;
`;

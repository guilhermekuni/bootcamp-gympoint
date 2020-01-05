import styled from 'styled-components';

export const Container = styled.div`
  background: #fff;
  padding: 40px;
`;

export const GridList = styled.div`
  display: grid;
  grid-template-columns: ${({ columnDivision }) => `repeat(auto-fill, ${columnDivision}%)`};

  div {
    border-bottom: 0.8px solid rgba(0, 0, 0, 0.2);
    padding: 15px 0 15px;
  }
`;

export const HeaderItem = styled.strong`
  text-transform: uppercase;
`;

import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  padding: 20px 80px 20px;
`;

export const TopContent = styled.div`
  display: flex;
  flex-direction: row;
  padding: 10px 0 10px 0;
  justify-content: space-between;
  height: 60px;

  h1 {
    color: #444444;
  }
`;

import styled from 'styled-components';

export const Column = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: ${({ actionColumn }) => actionColumn ? 'flex-end' : 'flex-start'};
`;

export const EditButton = styled.button`
  border: 0;
  background: none;
  color: #4d85ee;
  margin: 0 12px 0;
`;

export const DeleteButton = styled.button`
  border: 0;
  background: none;
  color: #e04848;
  margin: 0 12px 0;
`;

import styled from 'styled-components';
import { lighten, darken } from 'polished';

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

  button {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 34px;
    width: 150px;
    border: 0;
    border-radius: 4px;
    background: #ee4d64;
    color: #fff;
    font-size: 14.44px;

    svg {
      color: #fff;
      font-size: 16px;
      margin-right: 8px;
    }

    &:hover {
      background: ${lighten(0.05, '#ee4d64')};
    }

    &:active {
      background: ${darken(0.05, '#ee4d64')};
    }
  }
`;

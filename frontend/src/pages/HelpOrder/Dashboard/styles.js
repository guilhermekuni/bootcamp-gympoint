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
`;

export const QuestionList = styled.div`
  background: #fff;
  padding: 40px;

  h1 {
    font-size: 18px;
  }
`;

export const QuestionListItem = styled.div`
  display: flex;
  flex-direction: row;
  padding: 15px 5px 15px;
  justify-content: space-between;
  margin-top: 10px;

  small {
    font-size: 14px;
    color: #555555;
  }

  button {
    border: 0;
    background: none;
    color: #4d85ee;

    &:hover {
      color: ${lighten(0.1, '#4d85ee')};
    }
  }

  & + div {
    margin-top: 0;
    border-top: 1px solid rgba(0, 0, 0, 0.1);
  }

  &:hover {
    background: ${darken(0.02, '#fff')};
    cursor: pointer;
  }
`;

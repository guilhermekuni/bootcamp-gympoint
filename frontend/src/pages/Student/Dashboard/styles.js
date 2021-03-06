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

export const ActionContent = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const InputBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 12px;
  height: 35px;
  width: 200px;
  border: 0.5px solid rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  background: #fff;
  padding: 0 15px;

  span {
    display: flex;
    justify-content: center;
    align-items: center;

    svg {
      color: rgba(0, 0, 0, 0.4);
      margin-right: 6px;
    }
  }

  input {
    height: 28px;
    border: 0;
    border-radius: 4px;

    &::placeholder {
      color: #ccc;
    }
  }
`;

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
    color: #777777;
  }
`;

export const ActionContent = styled.div`
  flex-direction: row;
  align-items: center;
  justify-content: center;

  button {
    height: 34px;
    width: 150px;
    border: 0;
    border-radius: 4px;
    background: #ee4d64;
    color: #fff;
    font-size: 14.44px;
  }

  input {
    margin-left: 12px;
    height: 35px;
    width: 200px;
    padding: 0 15px;
    border-radius: 4px;
    border: 0.5px solid rgba(0, 0, 0, 0.1);

    &::placeholder {
      color: #ccc;
    }
  }
`;

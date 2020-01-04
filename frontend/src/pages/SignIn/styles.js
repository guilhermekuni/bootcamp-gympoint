import styled from 'styled-components';

export const Container = styled.div`
  background: #fff;
  height: 450px;
  width: 350px;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  img {
    height: 110px;
  }

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    padding: 10% 0 0 0;

    label {
      margin-top: 8px;
    }

    button {
      height: 44px;
      width: 80%;
      border: 0;
      border-radius: 4px;
      background: #ee4d64;
      color: #fff;
      font-size: 14.44px;
      margin-top: 5px;
    }
  }
`;

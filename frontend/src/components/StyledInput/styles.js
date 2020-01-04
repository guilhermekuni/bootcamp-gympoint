import styled from 'styled-components';

export const Container = styled.div`
  max-height: 100px;
  width: 80%;
  display: flex;
  flex-direction: column;

  span {
    color: #fb6f91;
    align-self: flex-start;
    margin: 0 0 10px;
    font-weight: bold;
  }

  label {
    height: 25px;
    margin-bottom: 5px;
    color: #000;
    text-transform: uppercase;
    font-weight: bold;
  }

  input {
    border: 1px solid #cfcfcf;
    border-radius: 4px;
    height: 50px;
    padding: 0 15px;
    color: #000;
    margin: 0 0 10px;

    &::placeholder {
      color: darkgray;
    }
  }
`;

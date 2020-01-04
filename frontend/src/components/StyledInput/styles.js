import styled from 'styled-components';

export const Container = styled.div`
  height: 75px;
  width: 80%;
  display: flex;
  flex-direction: column;

  label {
    height: 20%;
    margin-bottom: 2%;
    color: #000;
    text-transform: uppercase;
    font-weight: bold;
  }

  input {
    border: 1px solid #cfcfcf;
    border-radius: 4px;
    height: 75%;
    padding: 0 15px;
    color: #000;
    margin: 0 0 10px;

    &::placeholder {
      color: darkgray;
    }
  }
`;

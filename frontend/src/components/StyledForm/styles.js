import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  padding: 20px 80px 20px;

  header {
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    h1 {
      color: #444444;
    }

    div {
      display: flex;
      flex-direction: row;
    }
  }

  form {
    margin-top: 25px;
    padding: 25px;
    background: #fff;

    div {
      width: 100%;
    }


    label {
      margin-top: 12px;
    }

    .row {
      display: flex;
      flex-direction: row;

      div {
        & + div {
          margin-left: 12px;
        }
      }
    }
  }
`;

import styled from 'styled-components';
import { lighten, darken } from 'polished';

const StyledButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  border: 0;
  border-radius: 4px;
  background: #ee4d64;
  color: #fff;
  height: 35px;
  font-size: 14px;
  width: ${({ largerButton }) => largerButton ? '150px' : '100px' };

  svg {
    color: #fff;
    font-size: 18px;
    margin-right: 8px;
  }

  & + button {
    margin-left: 15px;
  }

  &:hover {
    background: ${lighten(0.05, '#ee4d64')};
  }

  &:active {
    background: ${darken(0.05, '#ee4d64')};
  }
`

export default StyledButton;

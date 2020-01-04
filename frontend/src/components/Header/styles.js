import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { lighten } from 'polished';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  background: #fff;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  align-items: center;
  justify-content: space-between;
  padding: 25px;
  margin: 0 auto;
  height: 60px;
`;

export const NavTabs = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  img {
    height: 25px;
  }

  nav {
    & + nav {
      margin-left: 15px;
    }
  }
`;

export const Link = styled(NavLink).attrs({
  activeStyle: { color: '#000' },
})`
  font-weight: bold;
  color: darkgray;

  &:hover {
    color: ${lighten(0.15, 'darkgray')};
  }
`;

export const Corner = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;

  strong {
    font-size: 14px;
    color: #777777;
    cursor: pointer;

    &:hover {
      color: ${lighten(0.15, '#777777')};
    }
  }

  small {
    font-size: 12px;
    color: #e04848;
    cursor: pointer;

    &:hover {
      color: ${lighten(0.15, '#e04848')};
    }
  }
`;

export const VerticalSeparator = styled.div`
  height: 35px;
  border-left: 1px solid #cdcdcd;
  margin: 0 25px 0;
  opacity: 0.6;
`;

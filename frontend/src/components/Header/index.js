import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import logo from '~/assets/images/logo-header.svg';

import { signOut} from '~/store/modules/auth/actions';

import { Container, NavTabs, Link, VerticalSeparator, Corner } from './styles';

export default function Header() {
  const dispatch = useDispatch();
  const { name } = useSelector(state => state.user);

  function handleSignOut() {
    dispatch(signOut());
  }

  return (
    <Container>
      <NavTabs>
        <img src={logo} alt="Gympoint" />
        <VerticalSeparator />
        <nav>
          <Link to="/student">ALUNOS</Link>
        </nav>
        <nav>
          <Link to="/dashboard">PLANOS</Link>
        </nav>
        <nav>
          <Link to="/dashboard">MATRÍCULAS</Link>
        </nav>
        <nav>
          <Link to="/dashboard">PEDIDOS DE AUXÍLIO</Link>
        </nav>
      </NavTabs>
      <Corner>
        <strong>{name}</strong>
        <small onClick={handleSignOut}>sair do sistema</small>
      </Corner>
    </Container>
  );
}

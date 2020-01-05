import React from 'react';
import { useSelector } from 'react-redux';

import logo from '~/assets/images/logo-header.svg';

import { Container, NavTabs, Link, VerticalSeparator, Corner } from './styles';

export default function Header() {
  const { name } = useSelector(state => state.user);

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
        <small>sair do sistema</small>
      </Corner>
    </Container>
  );
}

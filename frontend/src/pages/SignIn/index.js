import React from 'react';
import { Container, Card } from './styles';

import logo from '~/assets/images/logo.png';

import StyledInput from '~/components/StyledInput';

export default function SignIn() {
  return (
    <Container>
      <Card>
        <img src={logo} alt=""/>
        <form>
          <StyledInput name="email" label="seu e-mail" placeholder="exemplo@email.com" />
          <StyledInput name="password" label="sua senha" placeholder="**********" />
          <button>Entrar no sistema</button>
        </form>
      </Card>
    </Container>
  );
}

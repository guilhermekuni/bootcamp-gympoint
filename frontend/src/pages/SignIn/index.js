import React from 'react';
import { Form } from '@rocketseat/unform';
import * as Yup from 'yup';

import StyledInput from '~/components/StyledInput';

import logo from '~/assets/images/logo.png';

import { Container, Card } from './styles';

const schema = Yup.object().shape({
  email: Yup.string()
    .email('Insira um e-mail válido')
    .required('O e-mail é obrigatório'),
  password: Yup.string().required('A senha é obrigatório'),
});

export default function SignIn() {
  function handleSubmit(data) {
    console.tron.log(data);
  }

  return (
    <Container>
      <Card>
        <img src={logo} alt=""/>
        <Form schema={schema} onSubmit={handleSubmit}>
          <StyledInput name="email" type="email" label="seu e-mail" placeholder="exemplo@email.com" />
          <StyledInput name="password" type="password" label="sua senha" placeholder="**********" />
          <button>Entrar no sistema</button>
        </Form>
      </Card>
    </Container>
  );
}

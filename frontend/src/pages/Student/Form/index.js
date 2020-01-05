import React from 'react';
import * as Yup from 'yup';

import { MdChevronLeft, MdCheck } from 'react-icons/md';

import { Form } from '@rocketseat/unform';

import api from '~/services/api';
import history from '~/services/history';

import StyledForm from '~/components/StyledForm';
import StyledButton from '~/components/StyledButton';
import StyledInput from '~/components/StyledInput';

const schema = Yup.object().shape({
  name: Yup.string().required('O nome é obrigatório'),
  email: Yup.string()
    .email('Insira um e-mail válido')
    .required('O e-mail é obrigatório'),
});

export default function StudentForm() {
  function handleNavigationBack() {
    history.push('/student');
  }

  function handleSubmit(data) {
    console.tron.log(data);
  }

  return (
    <StyledForm>
      <header>
        <h1>Cadastro de aluno</h1>
        <div>
          <StyledButton onClick={handleNavigationBack}>
            <MdChevronLeft />
            <span>VOLTAR</span>
          </StyledButton>
          <StyledButton>
            <MdCheck />
            <span>SALVAR</span>
          </StyledButton>
        </div>
      </header>
      <Form schema={schema} onSubmit={handleSubmit}>
        <StyledInput name="name" type="text" label="nome completo" placeholder="Seu nome" />
        <StyledInput name="email" type="email" label="enedereço de e-mail" placeholder="exemplo@email.com" />
        <div className="row">
          <StyledInput name="age" type="email" label="idade" />
          <StyledInput name="weight" type="text" label="peso" />
          <StyledInput name="height" type="text" label="altura" />
        </div>
      </Form>
    </StyledForm>
  );
}

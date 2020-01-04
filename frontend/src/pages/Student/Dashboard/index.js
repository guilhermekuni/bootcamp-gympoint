import React from 'react';

import StyledList from '~/components/StyledList';

import { Container, TopContent, ActionContent } from './styles';

export default function StudentDashboard() {
  const studentPropertyLabels = ['nome', 'e-mail', 'idade'];

  return (
    <Container>
      <TopContent>
        <h1>Gerenciando alunos</h1>
        <ActionContent>
          <button>CADASTRAR</button>
          <input type="text" placeholder="Buscar aluno" />
        </ActionContent>
      </TopContent>
      <StyledList propertyLabels={studentPropertyLabels}>
      </StyledList>
    </Container>
  );
}

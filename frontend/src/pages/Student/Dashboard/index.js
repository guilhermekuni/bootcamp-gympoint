import React, { useState, useEffect } from 'react';

import { MdAdd, MdSearch } from 'react-icons/md';

import api from '~/services/api';

import StyledList from '~/components/StyledList';
import StyledListItem from '~/components/StyledListItem';

import { Container, TopContent, ActionContent, InputBox } from './styles';

export default function StudentDashboard() {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    getStudents();
  }, []);

  async function getStudents(page = 1, filter = '') {
    const response = await api.get('students', {
      params: {
        page,
        name: filter
      },
    });

    console.tron.log('students', response);
    setStudents(response.data);
  }

  function handleFilterChange(filter) {
    getStudents(1, filter);
  }

  const studentPropertyLabels = ['nome', 'e-mail', 'idade'];

  return (
    <Container>
      <TopContent>
        <h1>Gerenciando alunos</h1>
        <ActionContent>
          <button>
            <MdAdd />
            <span>CADASTRAR</span>
          </button>
          <InputBox>
            <span><MdSearch /></span>
            <input type="text" placeholder="Buscar aluno" onChange={(e) => handleFilterChange(e.target.value)} />
          </InputBox>
        </ActionContent>
      </TopContent>
      <StyledList propertyLabels={studentPropertyLabels}>
        {
          students.map(item => {
            const { id, name, email, age } = item;
            return <StyledListItem key={id} id={id} item={{ name, email, age }} />
          })
        }
      </StyledList>
    </Container>
  );
}

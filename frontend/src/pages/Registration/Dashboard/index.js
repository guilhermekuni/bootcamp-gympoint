import React, { useState, useEffect } from 'react';
import { format } from 'date-fns';
import pt from 'date-fns/locale/pt';

import { MdAdd } from 'react-icons/md';

import api from '~/services/api';

import StyledList from '~/components/StyledList';
import StyledListItem from '~/components/StyledListItem';

import { Container, TopContent } from './styles';

export default function RegistrationDashboard() {
  const [registrations, setRegistrations] = useState([]);

  useEffect(() => {
    async function getRegistrations(page = 1) {
      const response = await api.get('registrations', {
        params: { page },
      });

      const formattedResponse = response.data.map(({ id, active, start_date, end_date, membership, student }) => ({
        id,
        active: active ? 'SIM' : 'NÃO',
        studentName: student.name,
        membershipTitle: membership.title,
        startDate: formatDate(start_date),
        endDate: formatDate(end_date),
      }));

      setRegistrations(formattedResponse);
    }

    getRegistrations();
  }, []);

  function formatDate(date) {
    return format(new Date(date), "d 'de' MMMM 'de' yyyy", { locale: pt });
  }

  const registrationPropertyLabels = ['aluno', 'plano', 'início', 'término', 'ativa'];

  return (
    <Container>
      <TopContent>
        <h1>Gerenciando matrículas</h1>
        <button>
          <MdAdd />
          <span>CADASTRAR</span>
        </button>
      </TopContent>
      <StyledList propertyLabels={registrationPropertyLabels}>
        {
          registrations.map(item => {
            const { id, active, studentName, membershipTitle, startDate, endDate } = item;
            return <StyledListItem key={id} id={id} item={{ studentName, membershipTitle, startDate, endDate, active }} />
          })
        }
      </StyledList>
    </Container>
  );
}

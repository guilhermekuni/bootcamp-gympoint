import React, { useState, useEffect } from 'react';

import { MdAdd } from 'react-icons/md';

import api from '~/services/api';

import StyledList from '~/components/StyledList';
import StyledListItem from '~/components/StyledListItem';

import { Container, TopContent } from './styles';

export default function MembershipDashboard() {
  const [memberships, setMemberships] = useState([]);

  useEffect(() => {
    getMemberships();
  }, []);

  function formatDuration(duration) {
    return duration > 1 ? `${duration} meses` : '1 mês';
  }

  function formatPrice(price) {
    return price % 1 === 0 ? `R$ ${price},00` : `R$ ${price.replace('.', ',')}`;
  }

  async function getMemberships(page = 1) {
    const response = await api.get('memberships', {
      params: { page },
    });

    const formattedResponse = response.data.map(item => ({
      ...item,
      duration: formatDuration(item.duration),
      price: formatPrice(item.price),
    }));

    setMemberships(formattedResponse);
  }

  const membershipPropertyLabels = ['título', 'duração', 'valor p/ mês'];

  return (
    <Container>
      <TopContent>
        <h1>Gerenciando planos</h1>
        <button>
          <MdAdd />
          <span>CADASTRAR</span>
        </button>
      </TopContent>
      <StyledList propertyLabels={membershipPropertyLabels}>
        {
          memberships.map(item => {
            const { id, title, duration, price } = item;
            return <StyledListItem key={id} id={id} item={{ title, duration, price }} />
          })
        }
      </StyledList>
    </Container>
  );
}

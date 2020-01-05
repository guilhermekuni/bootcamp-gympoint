import React, { useState, useEffect } from 'react';

import api from '~/services/api';

import { Container, TopContent, QuestionList, QuestionListItem } from './styles';

export default function HelpOrderDashboard() {
  const [helpOrders, setHelpOrders] = useState([]);

  useEffect(() => {
    async function getHelpOrders(page = 1) {
      const response = await api.get('help-orders', {
        params: { page },
      });

      const formattedResponse = response.data.map(({ id, question, student }) => ({
        id,
        question,
        studentName: student.name,
      }));

      setHelpOrders(formattedResponse);
    }

    getHelpOrders();
  }, []);

  return (
    <Container>
      <TopContent>
        <h1>Pedidos de auxílio</h1>
      </TopContent>
      <QuestionList>
        <h1>ALUNO</h1>
        {
          helpOrders.map(item => (
            <QuestionListItem key={item.id}>
              <small>{item.studentName}</small>
              <button>responder</button>
            </QuestionListItem>
          ))
        }
      </QuestionList>
    </Container>
  );
}

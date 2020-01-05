import React from 'react';

import { Container } from './styles';

export default function StyledForm({ children }) {
  return (
    <Container>
      {children}
    </Container>
  );
}

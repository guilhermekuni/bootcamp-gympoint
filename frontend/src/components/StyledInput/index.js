import React from 'react';
import { Input } from '@rocketseat/unform';

import { Container } from './styles';

export default function StyledInput({ name, label, placeholder }) {
  return (
    <Container>
      <label htmlFor={name}>{label}</label>
      <Input name={name} placeholder={placeholder} />
    </Container>
  );
}

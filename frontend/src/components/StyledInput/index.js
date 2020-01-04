import React from 'react';
import { Input } from '@rocketseat/unform';

import { Container } from './styles';

export default function StyledInput({ label, name, ...rest }) {
  return (
    <Container>
      <label htmlFor={name}>{label}</label>
      <Input name={name} {...rest} />
    </Container>
  );
}

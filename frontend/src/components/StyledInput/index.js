import React from 'react';
import PropTypes from 'prop-types';
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

StyledInput.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
};

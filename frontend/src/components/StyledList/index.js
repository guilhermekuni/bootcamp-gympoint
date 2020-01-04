import React, { useMemo } from 'react';
import PropTypes from 'prop-types';

import { Container, HeaderItem } from './styles';

export default function StyledList({ propertyLabels, children }) {
  const columnDivision = useMemo(() => (100 / (propertyLabels.length + 1)), [propertyLabels]);

  return (
    <Container columnDivision={columnDivision}>
      {
        propertyLabels.map(item =>
          <HeaderItem>{item}</HeaderItem>
        )
      }
      <HeaderItem />
      {children}
    </Container>
  );
}

StyledList.propTypes = {
  propertyLabels: PropTypes.array.isRequired,
  children: PropTypes.element.isRequired,
};

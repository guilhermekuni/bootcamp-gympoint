import React, { useMemo } from 'react';
import PropTypes from 'prop-types';

import { Container, GridList, HeaderItem } from './styles';

export default function StyledList({ propertyLabels, children }) {
  const columnDivision = useMemo(() => (100 / (propertyLabels.length + 1)), [propertyLabels]);

  return (
    <Container>
      <GridList columnDivision={columnDivision}>
        {
          propertyLabels.map(item =>
            <HeaderItem key={item}>{item}</HeaderItem>
          )
        }
        <HeaderItem />
        {children}
      </GridList>
    </Container>
  );
}

StyledList.propTypes = {
  propertyLabels: PropTypes.array.isRequired,
  children: PropTypes.element.isRequired,
};

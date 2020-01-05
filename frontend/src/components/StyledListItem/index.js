import React from 'react';
import PropTypes from 'prop-types';

import { Column } from './styles';

export default function StyledListItem({ id, item }) {
  return (
    <>
      {
        Object.entries(item).map(function (property, index) {
          const [, value] = property;
          return <Column key={index}>{value}</Column>
        })
      }
      <Column>
        <button>editar</button>
        <button>apagar</button>
      </Column>
    </>
  );
}

StyledListItem.propTypes = {
  item: PropTypes.object.isRequired,
};


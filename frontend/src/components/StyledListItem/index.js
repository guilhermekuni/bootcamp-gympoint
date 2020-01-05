import React from 'react';
import PropTypes from 'prop-types';

import { Column, EditButton, DeleteButton } from './styles';

export default function StyledListItem({ id, item }) {
  return (
    <>
      {
        Object.entries(item).map(function (property, index) {
          const [, value] = property;
          return <Column key={index}>{value}</Column>
        })
      }
      <Column actionColumn>
        <EditButton>editar</EditButton>
        <DeleteButton>apagar</DeleteButton>
      </Column>
    </>
  );
}

StyledListItem.propTypes = {
  item: PropTypes.object.isRequired,
};


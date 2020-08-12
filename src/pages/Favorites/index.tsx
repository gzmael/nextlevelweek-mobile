import React from 'react';
import PageHeader from '../../components/PageHeader';

import { Container, Texto } from './styles';

function Favorites(): React.ReactElement {
  return (
    <Container>
      <PageHeader title="Meus Proffys Favoritos" />
      <Texto>Favorites</Texto>
    </Container>
  );
}

export default Favorites;

import React from 'react';
import { useNavigation } from '@react-navigation/native';

import giveClassesBGImg from '../../assets/images/give-classes-background.png';
import {
  Container,
  Content,
  Title,
  Description,
  Botao,
  TextoBotao,
} from './styles';

function TeacherForm() {
  const { goBack } = useNavigation();
  function handleGoBack() {
    goBack();
  }
  return (
    <Container>
      <Content source={giveClassesBGImg} resizeMode="contain">
        <Title>Quer ser um proffy?</Title>
        <Description>
          Para começar, você precisa se cadastrar como professor na nossa
          plataforma web.
        </Description>
      </Content>
      <Botao onPress={handleGoBack}>
        <TextoBotao>Tudo Bem</TextoBotao>
      </Botao>
    </Container>
  );
}

export default TeacherForm;

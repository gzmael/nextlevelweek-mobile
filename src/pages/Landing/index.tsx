/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable camelcase */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import React from 'react';
import { StyleSheet, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import banner from '../../assets/images/landing.png';
import studyIcon from '../../assets/images/icons/study.png';
import giveClassesIcon from '../../assets/images/icons/give-classes.png';
import heartIcon from '../../assets/images/icons/heart.png';

import {
  Container,
  ImgLanding,
  Texto,
  TextBold,
  ButtonsContainer,
  Botao,
  TextBotao,
  TextConnections,
} from './styles';

const styles = StyleSheet.create({
  banner: {
    resizeMode: 'contain',
  },
  btnPrimary: {
    backgroundColor: '#9871f5',
  },
  btnSecondary: {
    backgroundColor: '#04d361',
  },
});

function Landing() {
  const { navigate } = useNavigation();

  function handleNavigatePage(page: string) {
    navigate(page);
  }

  return (
    <Container>
      <ImgLanding source={banner} style={styles.banner} />

      <Texto>
        Seja bem-vindo,
        {'\n'}
        <TextBold>O que deseja fazer?</TextBold>
      </Texto>
      <ButtonsContainer>
        <Botao
          style={styles.btnPrimary}
          onPress={() => handleNavigatePage('Study')}
        >
          <Image source={studyIcon} />
          <TextBotao>Estudar</TextBotao>
        </Botao>
        <Botao
          style={styles.btnSecondary}
          onPress={() => handleNavigatePage('TeacherForm')}
        >
          <Image source={giveClassesIcon} />
          <TextBotao>Dar Aulas</TextBotao>
        </Botao>
      </ButtonsContainer>
      <TextConnections>
        Total de 285 conexões já realizadas
        <Image source={heartIcon} />.
      </TextConnections>
    </Container>
  );
}

export default Landing;

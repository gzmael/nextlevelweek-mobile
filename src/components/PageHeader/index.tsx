/* eslint-disable react/require-default-props */
import React, { ReactNode } from 'react';
import { Image } from 'react-native';
import { BorderlessButton } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

import backIcon from '../../assets/images/icons/back.png';
import logoImg from '../../assets/images/logo.png';
import { Container, TopBar, Title, Header } from './styles';

interface pageHeaderProps {
  title: string;
  headerRight?: ReactNode;
  children?: ReactNode;
}

const PageHeader: React.FC<pageHeaderProps> = (props: pageHeaderProps) => {
  const { title, headerRight, children } = props;
  const { navigate } = useNavigation();
  function handleGoHome() {
    navigate('Landing');
  }

  return (
    <Container>
      <TopBar>
        <BorderlessButton onPress={handleGoHome}>
          <Image source={backIcon} resizeMode="contain" />
        </BorderlessButton>
        <Image source={logoImg} resizeMode="contain" />
      </TopBar>
      <Header>
        <Title>{title}</Title>
        {headerRight}
      </Header>

      {children}
    </Container>
  );
};

export default PageHeader;

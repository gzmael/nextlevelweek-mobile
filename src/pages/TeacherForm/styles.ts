import styled from 'styled-components';
import { View, ImageBackground, Text } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled(View)`
  background-color: #8257e5;
  flex: 1;
  justify-content: center;
  padding: 40px;
`;

export const Content = styled(ImageBackground)`
  flex: 1;
  justify-content: center;
`;

export const Title = styled(Text)`
  color: #fff;
  font-family: 'Archivo_700Bold';
  font-size: 32px;
  max-width: 180px;
`;

export const Description = styled(Text)`
  margin-top: 24px;
  color: #d4c2ff;
  font-size: 16px;
  line-height: 26px;
  font-family: 'Poppins_400Regular';
  max-width: 240px;
`;

export const Botao = styled(RectButton)`
  margin: 40px 0;
  background-color: #04d361;
  height: 58px;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
`;

export const TextoBotao = styled(Text)`
  color: #fff;
  font-family: 'Archivo_700Bold';
  font-size: 16px;
`;

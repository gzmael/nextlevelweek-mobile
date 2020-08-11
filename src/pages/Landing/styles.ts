import styled from 'styled-components';
import { View, Image, Text } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled(View)`
  background-color: #8257e5;
  flex: 1;
  justify-content: center;
  padding: 30px;
`;

export const ImgLanding = styled(Image)`
  width: 100%;
`;

export const Texto = styled(Text)`
  color: #fff;
  font-size: 20px;
  line-height: 30px;
  margin-top: 80px;
  font-family: 'Poppins_400Regular';
`;

export const TextBold = styled(Text)`
  font-family: 'Poppins_600SemiBold';
`;

export const ButtonsContainer = styled(View)`
  flex-direction: row;
  margin-top: 40px;
  justify-content: space-between;
`;

export const Botao = styled(RectButton)`
  border-radius: 4px;
  justify-content: space-between;
  width: 48%;
  height: 150px;
  background-color: #04d361;
  padding: 24px;
`;

export const TextBotao = styled(Text)`
  font-family: 'Archivo_700Bold';
  color: #fff;
  margin-top: 10px;
`;

export const TextConnections = styled(Text)`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  color: #fff;
  font-family: 'Poppins_400Regular';
  font-size: 12px;
  line-height: 20px;
  max-width: 140px;
`;

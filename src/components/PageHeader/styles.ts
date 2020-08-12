import styled from 'styled-components';
import { View, Text } from 'react-native';

export const Container = styled(View)`
  padding: 40px;
  background-color: #8257e5;
`;

export const TopBar = styled(View)`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const Title = styled(Text)`
  font-family: 'Archivo_700Bold';
  font-size: 24px;
  line-height: 32px;
  max-width: 160px;
  color: #fff;
  margin: 40px 0;
`;

export const Header = styled(View)`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

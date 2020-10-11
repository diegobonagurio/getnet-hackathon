import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled(RectButton)`
  height: 60px;
  margin-bottom: 20px;
  justify-content: center;
  display: flex;
  align-items: center;

  background: #FF4646;
  border-radius: 10px;
`;

export const ButtonText = styled.Text`
  color: #fff;
  font-family: 'OpenSans-SemiBold';
  font-size: 17px;
`;
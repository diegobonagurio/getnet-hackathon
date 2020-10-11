import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.View`
`;

export const ContainerText = styled.View`
  margin-left: 20px;
`;

export const Title = styled.Text`
  font-family: 'OpenSans-Regular';
  font-size: 20px;
`;

export const ContainerButton = styled.View`
  margin: 0 20px;
  margin-top: 30px;
`;

export const ContainerCanceled = styled.View`
  align-items: center;
`;

export const ButtonCancel = styled(RectButton)`
`;

export const TextCancel = styled.Text`
  color: #FF4646;
  font-family: 'OpenSans-Regular';
  font-size: 18px;
`;

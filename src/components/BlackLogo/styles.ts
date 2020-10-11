import styled from 'styled-components/native';
import { Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

export const ContainerLogo = styled.View`
  position: absolute;
  top: ${height * 0.61}px;
  left: ${width * 0.6}px;
  background-color: #000;
  height: 200px;
  width: 200px;
  align-items: center;
  justify-content: center;
  border-radius: 100px;
`;

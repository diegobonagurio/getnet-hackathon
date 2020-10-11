import {Dimensions} from 'react-native';
import styled from 'styled-components/native';

const {height, width} = Dimensions.get('window');

export const Container = styled.View`
  background-color: #ffffff;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
  height: ${height * 0.4}px;
  width: ${width * 0.85}px;
`;

export const Row = styled.View`
  flex-direction: row;
`;

export const StyledImage = styled.Image`
  width: ${width * 0.35}px;
  height: ${height * 0.15}px;
  margin: 10px;
`;

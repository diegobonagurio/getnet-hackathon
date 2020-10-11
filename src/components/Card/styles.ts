import {Dimensions} from 'react-native';
import styled from 'styled-components/native';

const {width, height} = Dimensions.get('window');

export const Container = styled.View`
  background-color: #ffffff;
  align-items: center;
  justify-content: space-evenly;
  margin-top: 20px;
  flex-direction: row;
  height: ${height * 0.2}px;
  width: ${width * 0.85}px;
  border-radius: 10px;
`;

export const Title = styled.Text`
  font-size: 15px;
  font-family: 'Quicksand-Bold';
  line-height: 18px;
`;

export const SmallText = styled.Text`
  font-size: 13px;
  font-family: 'Quicksand-Bold';
  line-height: 16px;
`;

export const RightContainer = styled.View``;

export const Row = styled.View`
  flex-direction: row;
  display: flex;
  justify-content: center;
`;

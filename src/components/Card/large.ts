import {Dimensions} from 'react-native';
import styled from 'styled-components/native';

const {width, height} = Dimensions.get('window');

export const Container = styled.View`
  background-color: #ffffff;
  margin-top: 20px;
  flex-direction: column;
  height: ${height * 0.38}px;
  width: ${width * 0.85}px;
  border-radius: 10px;
`;

export const TopContainer = styled.View`
  flex-direction: row;
  align-items: center;
  height: ${height * 0.23}px;
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

export const Description = styled.Text`
  font-size: 13px;
  font-family: 'Quicksand-Bold';
  line-height: 16px;
  width: ${width * 0.7}px;
  padding-left: 15px;
`;

export const RightContainer = styled.View`
  padding-left: 25px;
`;

export const Row = styled.View`
  flex-direction: row;
`;

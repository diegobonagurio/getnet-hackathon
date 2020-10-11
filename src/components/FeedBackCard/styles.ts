import {Dimensions} from 'react-native';
import styled from 'styled-components/native';

const {width, height} = Dimensions.get('window');

export const Container = styled.View`
  background-color: #ffffff;
  margin-top: 20px;
  height: ${height * 0.2}px;
  width: ${width * 0.85}px;
  margin-bottom: 15px;
  border-radius: 10px;
`;

export const Row = styled.View`
  flex-direction: row;
`;

export const Title = styled.Text`
  font-size: 15px;
  font-family: 'Quicksand-Bold';
  line-height: 18px;
  padding-left: 15px;
`;

export const SmallText = styled.Text`
  font-size: 13px;
  font-family: 'Quicksand-Bold';
  line-height: 16px;
  padding-left: 15px;
`;

export const Description = styled.Text`
  font-size: 13px;
  font-family: 'Quicksand-Bold';
  line-height: 16px;
  width: ${width * 0.6}px;
  padding-left: 15px;
  padding-top: 5px;
`;

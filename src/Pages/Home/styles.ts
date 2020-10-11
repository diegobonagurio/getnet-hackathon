import styled from 'styled-components/native';
import { Dimensions } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';

const {width, height} = Dimensions.get('window');

export const Container = styled.View`
  flex: 1;
  background: #fff;
`;

export const ContainerDados = styled.View`
  background: #FF4646;
  flex-direction: row;
  width: 100%;
  padding: 40px 20px;
  height: 115px;
  text-align: left;
`;

export const ContainerImage = styled.View`
  margin-right: 20px;
`;

export const Name = styled.Text`
  font-family: 'OpenSans-Regular';
  font-size: 16px;
  color: #FFFFFF;
`;

export const ContainerUSer = styled.View`

`;

export const CNPJ = styled.Text`
  font-family: 'OpenSans-Regular';
  font-size: 12px;
  color: #FFFFFF;
  
`;

export const ContainerInfos = styled.View`
  height: 100%;
  padding: 30px 20px;
  border
`;

export const ContainerBalance = styled.View`

`;

export const Coin = styled.Text`
  font-size: 20px;
  font-family: 'OpenSans-Regular';
  font-weight: 300;
`;

export const Balance = styled.Text`
  font-family: 'OpenSans-Regular';
  font-size: 20px;
`;

export const Value = styled.Text`
  font-family: 'OpenSans-SemiBold';
  font-size: 36px;
  letter-spacing: 1px;
`;

export const ContainerSales = styled.View`
  background: #FFF;
  border-radius: 15px;
  border: 2px solid rgba(0, 0, 0, 0.15);
  padding: 20px;
  justify-content: space-between;
  flex-direction: row;
  margin-top: 30px;
  margin-bottom: 20px;
`;


export const ContainerButtonView = styled.View`
  
`;

export const ContainerSalesView = styled.View`
  
`;

export const ContainerPaymentView = styled.View`

`;

export const ButtonDescription = styled.Text`
  font-family: 'OpenSans-Regular';
  color: #8c8c8c;
  font-size: 12px;
`;

export const ButtonView = styled(RectButton)`

`;

export const DescriptionView = styled.Text`
  font-family: 'OpenSans-SemiBold';
  font-size: 18px;
`;

export const MySales = styled.Text`
  font-family: 'OpenSans-Regular';
  color: #8c8c8c;
  font-size: 12px;
`;

export const ValueSales = styled.Text`
  text-align: right;
  font-family: 'OpenSans-SemiBold';
  font-size: 14px;
  margin-top: 4px;
`;

export const ContainerPayments = styled.View`
  background: #FFF;
  border-radius: 15px;
  border: 2px solid rgba(0, 0, 0, 0.15);
  padding: 20px;
  justify-content: space-between;
  flex-direction: row;
  margin-bottom: 20px;
`;

export const MyPayment = styled.Text`
  font-family: 'OpenSans-Regular';
  font-size: 12px;
  color: #8c8c8c;
`;

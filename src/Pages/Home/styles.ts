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
  height: 127px;
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
  padding: 0 20px;
  background: #fff;
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
  background: #FF4646;
  border-radius: 15px;
  border: 2px solid rgba(0, 0, 0, 0.15);
  padding: 20px;
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
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
  margin-top: 30px;
  margin-bottom: -10px;
`;

export const DescriptionView = styled.Text`
  font-family: 'OpenSans-SemiBold';
  font-size: 14px;
  color: #fff;
`;

export const MySales = styled.Text`
  font-family: 'OpenSans-Regular';
  color: #8c8c8c;
  font-size: 12px;
`;

export const ValueSales = styled.Text`
  text-align: left;
  font-family: 'OpenSans-SemiBold';
  font-size: 20px;
  margin-top: 4px;
  color: #fff;
`;

export const ContainerPayments = styled.View`
  background: #FFF;
  border-radius: 15px;
  border: 2px solid rgba(0, 0, 0, 0.15);
  padding: 20px;
  justify-content: space-between;
  flex-direction: row;
  background: #FF4646;
`;

export const MyPayment = styled.Text`
  font-family: 'OpenSans-Regular';
  font-size: 12px;
  color: #8c8c8c;
`;

export const TextView = styled.View`
  position: relative;
  top: -50px;
`;

export const ContainerCard = styled.View`
  background: #EFDA1C;
  align-items: flex-start;
  margin: 0 20px;
  padding: 20px;
  border-radius: 10px;
  margin-top: 80px;
  overflow: hidden;
`;

export const BackImage = styled.View`
  position: relative;
  height: 0px;
  top: -120px;
  left: -40px;
`;

export const ContainerText = styled.View`
`;

export const ContainerTitle = styled.View`
  
`;

export const TitleDesc = styled.Text`
  font-family: 'OpenSans-SemiBold';
  font-size: 16px;
  color: #000;
`;

export const ContainerTips = styled.View`
  margin-top: 10px;
  margin-bottom: 20px;
`;

export const TextTips = styled.Text`
  font-family: 'OpenSans-Regular';
  font-size: 14px;
  color: #000;
`;

export const View = styled.View`
  background-color: #fff;
  height: 42px;
  border-radius: 15px;
  margin-bottom: -12px;
  margin-top: -12px;
`;



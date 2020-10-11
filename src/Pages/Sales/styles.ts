import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';



export const Container = styled.View`
  background: #fff;
`;

export const BackImage = styled.View`
  position: relative;
  left: -23px;
  top: 33px;
  height: 0px;
`;

export const BackImagePay = styled.View`
  position: relative;
  left: -23px;
  top: 23px;
  height: 0px;
`;

export const ContainerInfos = styled.View`
  height: 100%;
  padding: 0 20px;
  border-radius: 50px;
`;

export const ContainerBalance = styled.View`

`;

export const Coin = styled.Text`
  font-size: 20px;
  font-family: 'OpenSans-Regular';
  font-weight: 300;
`;

export const CoinSales = styled.Text`
  font-size: 14px;
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

export const ValueCoin = styled.Text`
  font-family: 'OpenSans-SemiBold';
  font-size: 24px;
  color: #8c8c8c;
`;

export const ContainerSales = styled.View`
  border-radius: 15px;
  border: 2px solid rgba(0, 0, 0, 0.15);
  padding: 10px 20px;
  justify-content: space-between;
  flex-direction: row;
  margin-top: 30px;
  width: 100%;
`;

export const ContainerImage = styled.View`
  margin-left: 47px;
`;


export const ContainerButtonView = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const ContainerSalesView = styled.View`
  
`;

export const ContainerPaymentView = styled.View`

`;

export const ButtonDescription = styled.Text`
  font-family: 'OpenSans-Regular';
  color: #8c8c8c;
  font-size: 18px;
`;

export const ContainerValueCoin = styled.View`
  padding-top: 10px;
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
  border-radius: 15px;
  border: 2px solid rgba(0, 0, 0, 0.15);
  padding: 10px 20px;
  justify-content: space-between;
  flex-direction: row;
  margin-top: 20px;
  margin-bottom: 30px;
  width: 100%;
`;

export const ContainerButtons = styled.View`
  flex-direction: column;
`;


export const ContainerButtonMySales = styled.View`

`;


export const ContainerButtonAllMySales = styled.View`

`;

export const View = styled.View`
  background-color: #fff;
  height: 42px;
  border-radius: 15px;
  margin-bottom: -12px;
  margin-top: -12px;
`;

export const MyPayment = styled.Text`
  font-family: 'OpenSans-Regular';
  font-size: 12px;
  color: #8c8c8c;
`;
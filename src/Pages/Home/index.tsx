import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {Image} from 'react-native';

import {
  Container,
  ContainerDados,
  Name,
  CNPJ,
  ContainerInfos,
  ContainerBalance,
  Balance,
  Value,
  ContainerSales,
  ButtonView,
  DescriptionView,
  MySales,
  ValueSales,
  ContainerPayments,
  MyPayment,
  ButtonDescription,
  ContainerImage,
  ContainerUSer,
  Coin,
  ContainerButtonView,
  ContainerSalesView,
  ContainerPaymentView,
} from './styles';

import logo from '../../assets/logo.png';


const Home: React.FC = () => {
  const {navigate} = useNavigation();

  return (
    <Container>

      <ContainerDados>
        <ContainerImage>
          <Image
            source={logo}
            width={20}
            height={20} 
          />
        </ContainerImage>

        <ContainerUSer>
          <Name>Marvin McKinney</Name>
          <CNPJ>94.264.107/0001-90</CNPJ>
        </ContainerUSer>
        
          
      </ContainerDados>

      <ContainerInfos>

        <ContainerBalance>
          <Balance>
            Saldo
          </Balance>

          <Value><Coin>R$</Coin>2500</Value>
        </ContainerBalance>

        <ContainerSales>
          <ContainerButtonView>
            <ButtonView onPress={() => navigate('Sales')}>
              <ButtonDescription>Consultar</ButtonDescription>
            </ButtonView>

            <DescriptionView>
              Vendas do dia
            </DescriptionView>
          </ContainerButtonView>

          <ContainerSalesView>
            <MySales>
              Minhas Vendas
            </MySales>

            <ValueSales>
              R$358,52
            </ValueSales>
          </ContainerSalesView>
          
        </ContainerSales>

        <ContainerPayments>
          <ContainerButtonView>
            <ButtonView onPress={() => navigate('Payment')}>
              <ButtonDescription>Consultar</ButtonDescription>
            </ButtonView>

            <DescriptionView>
              Pagamentos do dia
            </DescriptionView>
          </ContainerButtonView>
          
          <ContainerPaymentView>
            <MyPayment>
              Meus Pagamentos
            </MyPayment>

            <ValueSales>
              R$358,52
            </ValueSales>
          </ContainerPaymentView>
        </ContainerPayments>
      </ContainerInfos>
    </Container>
  );
};

export default Home;

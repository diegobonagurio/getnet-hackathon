import React from 'react';
import {useNavigation} from '@react-navigation/native';
import { Image } from 'react-native';

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
  TextView,
  ContainerCard,
  ContainerText,
  ContainerTitle,
  TitleDesc,
  ContainerTips,
  TextTips,
  BackImage,
  View,
  ViewChild
} from './styles';

import logo from '../../assets/logo.png';
import join from '../../assets/join.png';
import iconCard from '../../assets/iconCard.png';

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
      <View />

      <ContainerInfos>

        <ContainerBalance>
          <Balance>
            Saldo
          </Balance>

          <Value><Coin>R$</Coin>5.315,56</Value>
        </ContainerBalance>

        <ButtonView onPress={() => navigate('Sales')}>
          <ContainerSales>
            <ContainerButtonView> 
              <DescriptionView>
                Consultar minhas vendas do dia
              </DescriptionView>
              <ContainerSalesView>
                <ValueSales>R$ 4.468,08</ValueSales>
              </ContainerSalesView>
            </ContainerButtonView>
            <Image source={join} />
          </ContainerSales>
        </ButtonView>

        <ButtonView onPress={() => navigate('Payment')}>
          <ContainerPayments>
            <ContainerButtonView>
              <DescriptionView>
                Consultar meus pagamentos do dia
              </DescriptionView>
              <ContainerPaymentView>
                <ValueSales>R$ 152,52 </ValueSales>
              </ContainerPaymentView>
            </ContainerButtonView>
            <Image source={join} /> 
          </ContainerPayments>
        </ButtonView>
      </ContainerInfos>

      <ContainerCard>
        <ContainerText>

          <ContainerTitle>
            <TitleDesc>O que é fluxo de caixa?</TitleDesc>
          </ContainerTitle>

          <ContainerTips>
            <TextTips>Controle do dinheiro que entra e{"\n"} do dinheiro que sai.</TextTips>
          </ContainerTips>
        </ContainerText>

        <BackImage>
          <Image source={iconCard} />
        </BackImage>
      </ContainerCard>
    </Container>
  );
};

export default Home;

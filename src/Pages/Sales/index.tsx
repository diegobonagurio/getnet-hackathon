import React, { useState, useCallback } from 'react';
import {useNavigation} from '@react-navigation/native';

import {
Container,
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
Coin,
ContainerButtonView,
ContainerSalesView,
ContainerPaymentView,
ContainerImage,
CoinSales,
ValueCoin,
ContainerValueCoin,
ContainerButtons,
ContainerButtonMySales,
ContainerButtonAllMySales,
BackImage,
BackImagePay,
View
} from './styles';

import Header from '../../components/Header';

import littleMachine from '../../assets/amico.png';
import backgroundImage from '../../assets/backgroundImage.png';
import money from '../../assets/money.png';
import Button from '../../components/Button';

import {Image} from 'react-native';

const Sales: React.FC = () => {

  const {navigate} = useNavigation();

  return(
    <Container>
      <Header title="Minhas vendas do dia" />

      <View />
      

      <ContainerInfos>

          
        <ContainerBalance>
          <Balance>
            Total das minhas vendas do dia
          </Balance>

          <Value><Coin>R$</Coin>4.468,08</Value>
        </ContainerBalance>

        <BackImage>
          <Image source={backgroundImage} style={{height: 111, borderRadius: 10}}/>
        </BackImage>

        <ContainerSales>
          <ContainerButtonView>
            <ButtonDescription>
              Total de vendas{"\n"}
              com a Getnet{"\n"}
            
              <ContainerValueCoin>
                <ValueCoin><CoinSales>R$</CoinSales>2.499,50</ValueCoin>
              </ContainerValueCoin>

            </ButtonDescription>

            <ContainerImage>
              <Image 
                source={littleMachine}
                width={126.08}
                height={88.37}
              />
            </ContainerImage>
          </ContainerButtonView>
            
        </ContainerSales>

        <BackImagePay>
          <Image source={backgroundImage} style={{height: 111, borderRadius: 10}}/>
        </BackImagePay>

        <ContainerPayments>
          <ContainerButtonView>
            <ButtonDescription>
              Total de vendas{'\n'} com outros meios{"\n"}
              <ContainerValueCoin>
                <ValueCoin><CoinSales>R$</CoinSales>1.968,58</ValueCoin>
              </ContainerValueCoin>
            </ButtonDescription>

            
           
            <ContainerImage>
              <Image 
                source={money}
                width={93.33}
                height={91.44}
              />
            </ContainerImage>
          </ContainerButtonView>
        </ContainerPayments>

        <ContainerButtons>
          
          <ContainerButtonMySales>
            <Button name="Lançar nova venda" fontSize={18} onPress={() => navigate('InputSales')} />
          </ContainerButtonMySales>

          <ContainerButtonAllMySales>
            <Button name="Todas as minhas vendas" fontSize={18} onPress={() => navigate('ReportSales')}/>
          </ContainerButtonAllMySales>
        </ContainerButtons>
      </ContainerInfos>
    </Container>
  );
}

export default Sales;
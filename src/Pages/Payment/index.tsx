import React from 'react';
import {useNavigation} from '@react-navigation/native'

import { 
Container,
ContainerBalance,
Balance,
Value,
Coin,
ContainerPayment,
ContainerButtons,
ContainerButtonMyPayment,
ContainerButtonAllMyPayment
} from './styles';
import Header from '../../components/Header';
import Button from '../../components/Button';

const Payment: React.FC = () => {
  const {navigate} = useNavigation();

  return(
    <Container>
      <Header title="Meus pagamentos" />

      <ContainerPayment>
        <ContainerBalance>
          <Balance>
            Meus pagamentos do dia
          </Balance>

          <Value><Coin>R$</Coin>552,00</Value>
        </ContainerBalance>

        <ContainerButtons>
          <ContainerButtonMyPayment>
            <Button name="Lançar pagamentos" fontSize={18} onPress={() => navigate('InputPayment')} />
          </ContainerButtonMyPayment>

          <ContainerButtonAllMyPayment>
            <Button name="Todas os meus pagamentos" fontSize={18} onPress={() => navigate('ReportPayment')}/>
          </ContainerButtonAllMyPayment>
        </ContainerButtons>
      </ContainerPayment>
    </Container>
  );
}

export default Payment;
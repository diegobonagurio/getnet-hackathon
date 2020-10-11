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
import { View } from '../Home/styles';

const Payment: React.FC = () => {
  const {navigate} = useNavigation();

  return(
    <Container>
      <Header title="Meus pagamentos do dia" />
      <View />

      <ContainerPayment>
        <ContainerBalance>
          <Balance>
            Total dos meus pagamentos do dia
          </Balance>

          <Value><Coin>R$</Coin>152,52</Value>
        </ContainerBalance>

        <ContainerButtons>
          <ContainerButtonMyPayment>
            <Button name="Lançar novo pagamento" fontSize={18} onPress={() => navigate('InputPayment')} />
          </ContainerButtonMyPayment>

          <ContainerButtonAllMyPayment>
            <Button name="Todos os meus pagamentos" fontSize={18} onPress={() => navigate('ReportPayment')}/>
          </ContainerButtonAllMyPayment>
        </ContainerButtons>
      </ContainerPayment>
    </Container>
  );
}

export default Payment;
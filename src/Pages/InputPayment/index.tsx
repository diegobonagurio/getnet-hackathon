import React from 'react';
import {useNavigation} from '@react-navigation/native';

import {
Container, 
Title,
ContainerText,
ContainerButton,
} from './styles';

import Input from '../../components/Input';
import Header from '../../components/Header';
import Button from '../../components/Button';

const InputSales: React.FC = () => {
  const {navigate} = useNavigation();
  return(
    <Container>
      <Header title="Meus Pagamentos"/>

      <ContainerText>
        <Title>Nova Venda</Title>
      </ContainerText>

      <Input placeholder="Digite o valor do seu pagamento"/>
      <Input placeholder="Quando foi a dispesa"/>
      <Input placeholder="O que foi pago?"/>

      <ContainerButton>
        <Button name="Lançar pagamento" onPress={() => navigate('CreatedPayment')} />
      </ContainerButton>

    </Container>
  );
}

export default InputSales;
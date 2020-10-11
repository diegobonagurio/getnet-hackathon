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
      <Header title="Minhas vendas"/>

      <ContainerText>
        <Title>Nova Venda</Title>
      </ContainerText>

      <Input placeholder="Digite o valor da venda"/>
      <Input placeholder="Quando foi a venda?"/>
      <Input placeholder="Qual o nome do produto?"/>

      <ContainerButton>
        <Button name="Lançar Venda" onPress={() => navigate('CreatedSales')} />
      </ContainerButton>

    </Container>
  );
}

export default InputSales;
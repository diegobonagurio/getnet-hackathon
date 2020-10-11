import React from 'react';
import {useNavigation} from '@react-navigation/native';

import {
Container, 
Title,
ContainerText,
ContainerButton,
ContainerCanceled,
ButtonCancel,
TextCancel,
} from './styles';

import Input from '../../components/Input';
import Header from '../../components/Header';
import Button from '../../components/Button';
import { View } from '../Home/styles';

const InputSales: React.FC = () => {
  const {navigate} = useNavigation();
  return(
    <Container>
      <Header title="Lançar nova venda"/>

      <View />

      <ContainerText>
        <Title>Nova Venda</Title>
      </ContainerText>

      <Input placeholder="Digite o valor da venda"/>
      <Input placeholder="Quando foi a venda?"/>
      <Input placeholder="O que foi vendido?"/>

      <ContainerButton>
        <Button name="Lançar Venda" onPress={() => navigate('CreatedSales')} />
      </ContainerButton>

      <ContainerCanceled>
        <ButtonCancel onPress={() => navigate('Sales')}>
          <TextCancel>Cancelar</TextCancel>
        </ButtonCancel>
      </ContainerCanceled>

    </Container>
  );
}

export default InputSales;
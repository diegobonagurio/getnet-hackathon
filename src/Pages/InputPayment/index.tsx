import React, { useState, useCallback } from 'react';
import {useNavigation} from '@react-navigation/native';

import {
Container, 
Title,
ContainerText,
ContainerButton,
ContainerCanceled,
ButtonCancel,
TextCancel
} from './styles';

import Input from '../../components/Input';
import Header from '../../components/Header';
import Button from '../../components/Button';


import DateTimePicker from '@react-native-community/datetimepicker';
import { Platform } from 'react-native';
import { View } from '../Home/styles';

const InputSales: React.FC = () => {
  const {navigate} = useNavigation();

  const [date, setDate] = useState(new Date(1598051730000));
  const [selectedDatePicker, setSelectedDatePicker] = useState('');
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === 'ios');
    setDate(currentDate);

    console.log(currentDate);
  };

  const showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);
  };

  const showDatepicker = () => {
    showMode('date');
  };

  
  return(
    <Container>
      <Header title="Lançar novo pagamento"/>

      <View />

      <ContainerText>
        <Title>Novo Pagamento</Title>
      </ContainerText>

      <Input placeholder="Digite o valor do seu pagamento"/>
      <Input 
        placeholder="Quando foi a despesa?" 
        onFocus={showDatepicker}
        
      />
      <Input placeholder="O que foi pago?"/>

      <ContainerButton>
        <Button name="Lançar pagamento" onPress={() => navigate('CreatedPayment')} />
      </ContainerButton>

      <ContainerCanceled>
        <ButtonCancel onPress={() => navigate('Payment')}>
          <TextCancel>Cancelar</TextCancel>
        </ButtonCancel>
      </ContainerCanceled>

      {show && (
        <DateTimePicker
          testID="dateTimePicker"
          value={date}
          mode={mode}
          is24Hour={true}
          display="default"
          onChange={onChange}
        />
      )}
      

    </Container>
  );
}

export default InputSales;
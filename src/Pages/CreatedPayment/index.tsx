import React from 'react';
import {Image} from 'react-native';
import {useNavigation} from '@react-navigation/native'

import {
Container, 
ContainerImage,
ContainerText,
TextSucess,
TextDescription,
ButtonContainer,
} from './styles';

import Button from '../../components/Button';

import sucess from '../../assets/sucess.png';

const CreatedPayment: React.FC = () => {
  const {navigate} = useNavigation();

  return(
    <Container>

      <ContainerImage>
        <Image source={sucess} width={86} height={86} style={{marginBottom: 30}}/>
      </ContainerImage>

      <ContainerText>
        <TextSucess>Sucesso!</TextSucess>
          <TextDescription>
            Deu tudo certo com o lançamento {'\n'} do seu pagamento
          </TextDescription>
      </ContainerText>

      <ButtonContainer>
        <Button 
          name="Voltar para meus pagamentos" 
          font- onPress={() => navigate('Payment')}  
          color="#ff4646" 
          style={{backgroundColor: '#fff'}} 
        />
      </ButtonContainer>
    </Container>
  );
}

export default CreatedPayment;
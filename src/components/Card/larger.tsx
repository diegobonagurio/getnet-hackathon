import React from 'react';
import axios from 'axios';
import { View, Image, Dimensions, Alert } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import {
  Container,
  Title,
  SmallText,
  RightContainer,
  TopContainer,
  Description,
} from './large';

import Button from '../Button';
import Img from '../../assets/estevao1.png';
import { RectButton } from 'react-native-gesture-handler';

const { width, height } = Dimensions.get('window');

interface Props {
  uri?: string;
  name?: string;
  job?: string;
  rating?: number;
  age?: number;
  provider?: boolean;
  providerPress?: (pointerInside: boolean) => void | undefined;
}

const Larger: React.FC<Props> = ({
  uri,
  name,
  job,
  rating,
  age,
  provider,
  providerPress,
}: Props) => {
  const renderStars = () => {
    let stars = [];

    for (let s = 1; s <= 5; s++) {
      stars.push(
        <Ionicons
          key={s}
          name="ios-star"
          size={16}
          style={{ marginRight: 5 }}
          color={
            Math.floor(rating !== undefined ? rating : 4.5) >= s
              ? '#F9A620'
              : '#FFD449'
          }
        />,
      );
    }

    return <View style={{ flexDirection: 'row' }}>{stars}</View>;
  };

  

  async function zenviApi() {
    const headers = {
      'Content-Type': 'application/json',
      'X-API-TOKEN': 'Ux37N1JJdcXiVpfPITi-vmfiFfQJyDaXiuTe',
    };

    const data = {
      from: 'determined-grasshopper',
      to: '5519989241694',
      contents: [
        {
          type: 'text',
          text: 'O AutoBot localizou um cliente para você! Está interessado?',
        },
      ],
    };
    await axios
      .post('https://api.zenvia.com/v1/channels/whatsapp/messages', data, {
        headers,
      })
      .then((response) => {
        Alert.alert('Mensagem enviado com sucesso');
      })
      .catch((error) => {
        Alert.alert('Erro ao entrar em contato com o prestador');
      });
  }

  return (
    <Container
      style={{
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 12,
        },
        shadowOpacity: 0.58,
        shadowRadius: 16.0,
        elevation: 24,
      }}>
      <TopContainer>
        <Image
          resizeMode="contain"
          style={{ width: width * 0.35, height: height * 0.9, marginLeft: 10 }}
          source={uri !== undefined ? { uri: uri } : Img}
        />
        <RightContainer>
          <Title>{name !== undefined ? name : 'José armando'}</Title>
          <SmallText>{age !== undefined ? age + ' anos' : '32 anos'}</SmallText>
          <SmallText>{job !== undefined ? job : 'Pintor'}</SmallText>
          {renderStars()}
        </RightContainer>
      </TopContainer>
      {provider && (
        <RectButton
          onPress={providerPress}
          style={{
            position: 'absolute',
            marginLeft: width * 0.75,
            marginTop: 20,
          }}>
          <Feather name="edit" size={30} color="black" />
        </RectButton>
      )}
      <Description>
        Sou uma pessoa muito esforçada, trabalho na área a 10 anos e estou a
        disposição.
      </Description>
      {!provider && (
        <Button
          fontSize={12}
          color="#fff"
          style={{
            width: 130,
            height: 35,
            top: 10,
            backgroundColor: '#3D4165',
            borderRadius: 10,
            marginLeft: 10,
          }}
          name="Notificar"
          onPress={() => zenviApi()}
        />
      )}
    </Container>
  );
};

export default Larger;

import React from 'react';
import axios from 'axios';
import { View, Image, Dimensions, Alert } from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';

import { Container, Title, SmallText, RightContainer, Row } from './styles';

import Img from '../../assets/estevao1.png';
import zap from '../../assets/whatsapp.png';
import Button from '../Button';
import { useNavigation } from '@react-navigation/native';

const { width, height } = Dimensions.get('window');

interface Props {
  uri?: string;
  name?: string;
  job?: string;
  rating?: number;
}

const Normal: React.FC<Props> = ({ uri, name, job, rating }: Props) => {
  const { navigate } = useNavigation();

  async function zenviApi() {
    const headers = {
      'Content-Type': 'application/json',
      'X-API-TOKEN': 'SKq7iqC85x1UbBewv_h75_NFPV7MZeHfIYVj',
    };

    const data = {
      from: 'forested-aluminum',
      to: '5532991448801',
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
        Alert.alert('Mensagem enviado com sucesso, em breve o prestador irá entrar em contato com você');
      })
      .catch((error) => {
        Alert.alert('Erro ao entrar em contato com o prestador');
      });
  }

  function handleNavigate() {
    navigate('Profile', { owner: false });
  }

  const renderStars = () => {
    let stars = [];

    for (let s = 1; s <= 5; s++) {
      stars.push(
        <Entypo
          key={s}
          name="star"
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
      <Image
        resizeMode="contain"
        style={{ width: width * 0.35, height: height * 0.9 }}
        source={uri !== undefined ? { uri: uri } : Img}
      />
      <RightContainer>
        <Title>{name !== undefined ? name : 'José armando'}</Title>
        <SmallText>{job !== undefined ? job : 'Pintor'}</SmallText>
        {renderStars()}
        <Row>
          <Button
            onPress={() => handleNavigate()}
            fontSize={14}
            style={{
              width: 80,
              height: 35,
              top: 10,
              backgroundColor: '#3D4165',
              borderRadius: 10,
            }}
            name="Perfil"
          />
        </Row>
      </RightContainer>
    </Container>
  );
};

export default Normal;

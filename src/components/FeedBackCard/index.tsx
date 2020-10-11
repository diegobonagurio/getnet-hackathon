import React from 'react';
import {Image, View} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

import {Container, Row, Title, SmallText, Description} from './styles';

import Img from '../../assets/estevao1.png';

interface Props {
  rating?: number;
  name?: string;
  date?: number;
  description?: string;
}

const FeedBackCard: React.FC<Props> = ({
  rating,
  name,
  date,
  description,
}: Props) => {
  const renderStars = () => {
    let stars = [];

    for (let s = 1; s <= 5; s++) {
      stars.push(
        <Ionicons
          key={s}
          name="ios-star"
          size={16}
          style={{marginRight: 5}}
          color={
            Math.floor(rating !== undefined ? rating : 4.5) >= s
              ? '#F9A620'
              : '#FFD449'
          }
        />,
      );
    }

    return <View style={{flexDirection: 'row'}}>{stars}</View>;
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
      <Row>
        <Image
          style={{
            width: 50,
            height: 50,
            marginLeft: 10,
            borderRadius: 25,
            marginTop: 10,
          }}
          source={Img}
        />
        <View style={{marginLeft: 5, marginTop: 10}}>
          <Title>{name !== undefined ? name : 'Andréa Biavatti'}</Title>
          <SmallText>{date !== undefined ? date : '19/09/2020'}</SmallText>
          <View style={{marginLeft: 15}}>{renderStars()}</View>
        </View>
      </Row>
      <Description>
        {description !== undefined
          ? description
          : 'Um profissional exelente, muito simpatico e muito bom naquilo que faz, super indico!     '}
      </Description>
    </Container>
  );
};

export default FeedBackCard;

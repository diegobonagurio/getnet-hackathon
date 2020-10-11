import React from 'react';
import {View} from 'react-native';

import {Container, StyledImage, Row} from './styles';

interface Props {
  uri?: string;
}

const ImagesCard: React.FC<Props> = ({uri}: Props) => {
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
        <StyledImage
          source={{
            uri:
              uri !== undefined
                ? uri
                : 'https://i.pinimg.com/originals/8e/55/0d/8e550df243c5b5abcbeb0e6e230f2c0b.jpg',
          }}
        />
        <StyledImage
          source={{
            uri:
              uri !== undefined
                ? uri
                : 'https://i.pinimg.com/originals/8e/55/0d/8e550df243c5b5abcbeb0e6e230f2c0b.jpg',
          }}
        />
      </Row>
      <Row>
        <StyledImage
          source={{
            uri:
              uri !== undefined
                ? uri
                : 'https://i.pinimg.com/originals/8e/55/0d/8e550df243c5b5abcbeb0e6e230f2c0b.jpg',
          }}
        />
        <StyledImage
          source={{
            uri:
              uri !== undefined
                ? uri
                : 'https://i.pinimg.com/originals/8e/55/0d/8e550df243c5b5abcbeb0e6e230f2c0b.jpg',
          }}
        />
      </Row>
    </Container>
  );
};

export default ImagesCard;

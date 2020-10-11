import React from 'react';
import { Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { BorderlessButton } from 'react-native-gesture-handler';
import { Container, Title } from './styles';

import backIcon from '../../assets/backIcon.png';

interface PageHeaderProps {
  title: string;
}

const Header: React.FC<PageHeaderProps> = ({ title }) => {
  const { goBack } = useNavigation();

  function handleGoBack() {
    goBack();
  }

  return (
    <Container>
      <BorderlessButton onPress={handleGoBack} style={{marginLeft: 20, position: "relative"}}>
        <Image source={backIcon} resizeMode="contain"/>
      </BorderlessButton>

      <Title>{title}</Title>
    </Container>
  );
};

export default Header;
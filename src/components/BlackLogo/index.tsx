import React from 'react';
import { Image } from 'react-native';
import { ContainerLogo } from './styles';
import logo from '../../assets/logo.png';

const BlackLogo: React.FC = () => {
  return (
    <ContainerLogo>
      <Image source={logo} style={{ width: 100, height: 100 }} />
    </ContainerLogo>
  );
};

export default BlackLogo;

import React from 'react';
import { TextInputProps, Image } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import { Container, TextInput, Title, ViewColor, Line } from './styles';

import lock from '../../assets/lock.png';
import user from '../../assets/user.png';

interface InputProps extends TextInputProps {
  name: string;
  label?: string;
  widthProp?: number;
  icon?: boolean;
  email?: boolean;
  password?: boolean;
}

const Input: React.FC<InputProps> = ({
  name,
  label,
  widthProp,
  icon,
  email,
  password,
  ...rest
}) => (
  <Container>
    <Title>{label}</Title>
    <ViewColor>

      <TextInput
        style={{ width: widthProp !== undefined ? widthProp : 370 }}
        placeholderTextColor="#b7b7b7"
        keyboardAppearance="dark"
        {...rest}
      />
      <Line />
    </ViewColor>
    
    {icon === true && (
      <Image
        resizeMode="contain"
        source={email ? user : password ? lock : lock}
        style={{
          height: 25,
          width: 25,
          position: 'absolute',
          marginLeft: widthProp !== undefined ? widthProp - 50 : 330,
          marginTop: 55,
        }}
      />
    )}
  </Container>
);

export default Input;

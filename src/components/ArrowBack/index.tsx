import React from 'react';
import { StyleSheet, Image } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import Ionicons from 'react-native-vector-icons/Ionicons';

// import { Container } from './styles';

import back from '../../assets/Vector.png';

interface Props {
  onPress?: (pointerInside: boolean) => void | undefined;
}

const ArrowBack: React.FC<Props> = ({ onPress }: Props) => {
  return (
    <RectButton onPress={onPress} style={styles.button}>
      <Image
        resizeMode="contain"
        source={back}
        style={{ width: 25, height: 25 }}
      />
    </RectButton>
  );
};

export default ArrowBack;

const styles = StyleSheet.create({
  button: {
    position: 'absolute',
    marginTop: 75,
    paddingLeft: 20,
    zIndex: 2
  },
});

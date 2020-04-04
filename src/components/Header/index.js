import React from 'react';
import { TouchableOpacity } from 'react-native';
import { Container, Logo } from './styles';

export default function Header({ navigation }) {
  function handleHomeNavigation() {
    navigation.navigate('Home');
  }

  return (
    <Container>
      <TouchableOpacity onPress={handleHomeNavigation}>
        <Logo />
      </TouchableOpacity>
    </Container>
  );
}

import React from 'react';
import { TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import {
  Container,
  Logo,
  CartContainer,
  CartCounter,
  CartCounterText,
} from './styles';

export default function Header({ navigation }) {
  function handleHomeNavigation() {
    navigation.navigate('Home');
  }

  function handleCartNavigation() {
    navigation.navigate('Cart');
  }

  return (
    <Container>
      <TouchableOpacity onPress={handleHomeNavigation}>
        <Logo />
      </TouchableOpacity>
      <TouchableOpacity onPress={handleCartNavigation}>
        <CartContainer>
          <Icon name="shopping-basket" color="#FFF" size={24} />
          <CartCounter>
            <CartCounterText>3</CartCounterText>
          </CartCounter>
        </CartContainer>
      </TouchableOpacity>
    </Container>
  );
}

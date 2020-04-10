import React from 'react';
import { TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialIcons';

import {
  Container,
  Logo,
  CartContainer,
  CartCounter,
  CartCounterText,
} from './styles';

function Header({ navigation, cartSize }) {
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
            <CartCounterText>{cartSize}</CartCounterText>
          </CartCounter>
        </CartContainer>
      </TouchableOpacity>
    </Container>
  );
}

export default connect((state) => ({
  cartSize: state.cart.length,
}))(Header);

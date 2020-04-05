import React, { Component } from 'react';
import { View, ScrollView } from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';

import {
  Container,
  CartContainer,
  ItemImage,
  TextContainer,
  Description,
  Price,
  ValueContainer,
  ItemAmount,
  TotalAmount,
  AmountContainer,
  AmountButtons,
  TotalContainer,
  TotalLabel,
  TotalPrice,
  CheckoutButton,
  CheckoutText,
} from './styles';

import colors from '../../styles/colors';

import api from '../../services/api';

export default class Cart extends Component {
  state = {
    products: [],
  };

  async componentDidMount() {
    const response = await api.get('/products');
    const { data } = response;

    this.setState({ products: data });
  }

  render() {
    const { products } = this.state;

    return (
      <Container>
        <View>
          <CartContainer>
            {/* */}
            <View style={{ marginBottom: 20 }}>
              <View style={{ flexDirection: 'row' }}>
                <ItemImage
                  source={{
                    uri:
                      'https://rocketseat-cdn.s3-sa-east-1.amazonaws.com/modulo-redux/tenis1.jpg',
                  }}
                />
                <TextContainer>
                  <Description>Tênis de Caminhada Leve Confortável</Description>
                  <Price>$ 1112,05</Price>
                </TextContainer>
              </View>
              <ValueContainer>
                <AmountContainer>
                  <AmountButtons>
                    <Icon
                      name="remove-circle-outline"
                      size={20}
                      color={colors.primary}
                    />
                  </AmountButtons>
                  <ItemAmount value="3" />
                  <AmountButtons>
                    <Icon
                      name="add-circle-outline"
                      size={20}
                      color={colors.primary}
                    />
                  </AmountButtons>
                </AmountContainer>
                <TotalAmount>$ 1112,05</TotalAmount>
              </ValueContainer>
            </View>
            {/* */}
            <TotalContainer>
              <TotalLabel>TOTAL</TotalLabel>
              <TotalPrice>$ 1112,05</TotalPrice>
            </TotalContainer>

            <CheckoutButton>
              <CheckoutText>Checkout</CheckoutText>
            </CheckoutButton>
          </CartContainer>
        </View>
      </Container>
    );
  }
}

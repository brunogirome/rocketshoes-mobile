import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { View, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import * as CartActions from '../../store/modules/cart/actions';

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

function Cart({ cart }) {
  return (
    <Container>
      <ScrollView>
        <View style={{ marginBottom: 20 }}>
          <CartContainer
            data={cart}
            keyExtractor={(product) => String(product.id)}
            renderItem={({ item }) => (
              <>
                <View style={{ flexDirection: 'row' }}>
                  <ItemImage
                    source={{
                      uri: item.image,
                    }}
                  />
                  <TextContainer>
                    <Description>{item.title}</Description>
                    <Price>$ {item.price}</Price>
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
              </>
            )}
          />

          <TotalContainer>
            <TotalLabel>TOTAL</TotalLabel>
            <TotalPrice>$ 1112,05</TotalPrice>
          </TotalContainer>

          <CheckoutButton>
            <CheckoutText>Checkout</CheckoutText>
          </CheckoutButton>
        </View>
      </ScrollView>
    </Container>
  );
}

const mapStateToProps = (state) => ({
  cart: state.cart,
  total: () =>
    state.cart.reduce((total, product) => {
      return total + product.price;
    }, 0),
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(CartActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Cart);

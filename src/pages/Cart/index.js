import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { View, FlatList } from 'react-native';
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
  FooterButton,
  FooterButtonText,
  EmptyContainer,
  EmptyText,
  HeaderItem,
  RemoveButton,
} from './styles';

import colors from '../../styles/colors';

import { formatPrice } from '../../util/format';

function Cart({
  cart,
  navigation,
  total,
  removeFromCart,
  updateAmountRequest,
}) {
  const isEmpty = !(cart.length > 0);

  function handleHomeNavigation() {
    navigation.navigate('Home');
  }

  function increment(product) {
    updateAmountRequest(product.id, product.amount + 1);
  }

  function decrement(product) {
    updateAmountRequest(product.id, product.amount - 1);
  }

  return (
    <Container style={{ justifyContent: isEmpty ? 'center' : 'flex-start' }}>
      <CartContainer>
        {isEmpty ? (
          <EmptyContainer>
            <Icon name="shopping-cart" color="#ddd" size={72} />
            <EmptyText>Your cart is empty!</EmptyText>
            <FooterButton onPress={handleHomeNavigation}>
              <FooterButtonText>Back To the store</FooterButtonText>
            </FooterButton>
          </EmptyContainer>
        ) : (
          <>
            <FlatList
              data={cart}
              keyExtractor={(product) => String(product.id)}
              showsVerticalScrollIndicator={false}
              renderItem={({ item }) => (
                <View style={{ marginBottom: 20 }}>
                  <HeaderItem>
                    <ItemImage
                      source={{
                        uri: item.image,
                      }}
                    />
                    <TextContainer>
                      <Description>{item.title}</Description>
                      <Price>{item.formattedPrice}</Price>
                    </TextContainer>
                    <RemoveButton onPress={() => removeFromCart(item.id)}>
                      <Icon name="delete" color={colors.primary} size={28} />
                    </RemoveButton>
                  </HeaderItem>
                  <ValueContainer>
                    <AmountContainer>
                      <AmountButtons onPress={() => decrement(item)}>
                        <Icon
                          name="remove-circle-outline"
                          size={20}
                          color={item.amount === 1 ? '#333' : colors.primary}
                        />
                      </AmountButtons>
                      <ItemAmount value={String(item.amount)} />
                      <AmountButtons onPress={() => increment(item)}>
                        <Icon
                          name="add-circle-outline"
                          size={20}
                          color={colors.primary}
                        />
                      </AmountButtons>
                    </AmountContainer>
                    <TotalAmount>{item.subTotal}</TotalAmount>
                  </ValueContainer>
                </View>
              )}
            />
            <TotalContainer>
              <TotalLabel>TOTAL</TotalLabel>
              <TotalPrice>{total}</TotalPrice>
            </TotalContainer>

            <FooterButton>
              <FooterButtonText>Checkout</FooterButtonText>
            </FooterButton>
          </>
        )}
      </CartContainer>
    </Container>
  );
}

const mapStateToProps = (state) => ({
  cart: state.cart.map((product) => ({
    ...product,
    subTotal: formatPrice(product.price * product.amount),
  })),
  total: formatPrice(
    state.cart.reduce((total, product) => {
      return total + product.price * product.amount;
    }, 0)
  ),
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(CartActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Cart);

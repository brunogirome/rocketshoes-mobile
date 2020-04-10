import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Icon from 'react-native-vector-icons/MaterialIcons';

import api from '../../services/api';

import * as CartActions from '../../store/modules/cart/actions';

import {
  Container,
  ProductList,
  ListItem,
  Description,
  Price,
  ButtonContainer,
  ButtonCartContainer,
  ButtonText,
  ProductImage,
  ButtonCartText,
} from './styles';

import { formatPrice } from '../../util/format';

class Home extends Component {
  state = {
    products: [],
  };

  async componentDidMount() {
    const response = await api.get('products');

    const data = response.data.map((product) => ({
      ...product,
      formattedPrice: formatPrice(product.price),
    }));

    this.setState({ products: data });
  }

  async handleAddProduct(id) {
    const { addToCartRequest } = this.props;

    addToCartRequest(id);
  }

  render() {
    const { products } = this.state;
    const { amount } = this.props;

    return (
      <Container>
        <ProductList
          data={products}
          keyExtractor={(product) => String(product.id)}
          renderItem={({ item }) => (
            <ListItem>
              <ProductImage source={{ uri: item.image }} />
              <Description>{item.title}</Description>
              <Price>{item.formattedPrice}</Price>
              <ButtonContainer
                onPress={() => {
                  this.handleAddProduct(item.id);
                }}
              >
                <ButtonCartContainer>
                  <Icon name="add-shopping-cart" color="#FFF" size={20} />
                  <ButtonCartText>{amount[item.id] || 0}</ButtonCartText>
                </ButtonCartContainer>
                <ButtonText>Add to cart</ButtonText>
              </ButtonContainer>
            </ListItem>
          )}
        />
      </Container>
    );
  }
}

const mapStateToProps = (state) => ({
  amount: state.cart.reduce((amount, product) => {
    amount[product.id] = product.amount;
    return amount;
  }, {}),
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(CartActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Home);

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

class Home extends Component {
  state = {
    products: [],
  };

  async componentDidMount() {
    const response = await api.get('/products');

    const { data } = response;

    this.setState({ products: data });
  }

  async handleAddProduct(id) {
    const { addToCartRequest } = this.props;

    const { data } = await api.get(`/products/${id}`);

    addToCartRequest(data);
  }

  render() {
    const { products } = this.state;

    return (
      <Container>
        <ProductList
          data={products}
          keyExtractor={(product) => String(product.id)}
          renderItem={({ item }) => (
            <ListItem>
              <ProductImage source={{ uri: item.image }} />
              <Description>{item.title}</Description>
              <Price>$ {item.price}</Price>
              <ButtonContainer
                onPress={() => {
                  this.handleAddProduct(item.id);
                  const { navigation } = this.props;
                  navigation.navigate('Cart');
                }}
              >
                <ButtonCartContainer>
                  <Icon name="add-shopping-cart" color="#FFF" size={20} />
                  <ButtonCartText>3</ButtonCartText>
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

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(CartActions, dispatch);

export default connect(null, mapDispatchToProps)(Home);

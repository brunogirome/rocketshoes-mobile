import React, { Component } from 'react';

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

import api from '../../service/api';

export default class Home extends Component {
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
        <ProductList
          data={products}
          dataExttractor={(product) => product.id}
          renderItem={({ item }) => (
            <ListItem>
              <ProductImage source={{ uri: item.image }} />
              <Description>{item.title}</Description>
              <Price>R$ {item.price}</Price>
              <ButtonContainer
                onPress={() => {
                  const { navigation } = this.props;

                  navigation.navigate('Cart');
                }}
              >
                <ButtonCartContainer>
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

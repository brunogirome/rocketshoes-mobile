import React from 'react';
import { Text } from 'react-native';

import { Container } from './styles';

export default function Home({ navigation }) {
  function handleClick() {
    navigation.navigate('Cart');
  }

  return (
    <Container>
      <Text onPress={handleClick} style={{ color: '#fff', fontSize: 32 }}>
        Hello World! :)
      </Text>
    </Container>
  );
}

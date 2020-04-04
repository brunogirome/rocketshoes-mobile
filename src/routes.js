import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Home from './pages/Home';
import Cart from './pages/Cart';

import Header from './components/Header';

const AppStack = createStackNavigator();

export default function Routes() {
  return (
    <AppStack.Navigator
      headerMode="float"
      screenOptions={{
        headerStyle: {
          height: 64,
        },
        header: ({ navigation }) => {
          return <Header navigation={navigation} />;
        },
      }}
    >
      <AppStack.Screen name="Home" component={Home} />
      <AppStack.Screen name="Cart" component={Cart} />
    </AppStack.Navigator>
  );
}

import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux';
import { StatusBar } from 'react-native';

import './config/reactotronConfig';

import Routes from './routes';
import { navigationRef } from './services/navigation';

import colors from './styles/colors';

import store from './store';

export default function App() {
  return (
    <Provider store={store}>
      <StatusBar barStyle="light-content" backgroundColor={colors.dark2} />
      <NavigationContainer ref={navigationRef}>
        <Routes />
      </NavigationContainer>
    </Provider>
  );
}

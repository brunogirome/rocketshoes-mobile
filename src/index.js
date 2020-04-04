import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'react-native';

import './config/reactotronConfig';

import Routes from './routes';

import colors from './styles/colors';

export default function App() {
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor={colors.dark2} />
      <NavigationContainer>
        <Routes />
      </NavigationContainer>
    </>
  );
}

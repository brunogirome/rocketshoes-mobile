import Reactotron from 'reactotron-react-native';
// import AsyncStorage from '@react-native-community/async-storage';

if (__DEV__) {
  const tron = Reactotron.configure()
    //  .setAsyncStorageHandler(AsyncStorage)
    .useReactNative()
    .connect();

  console.tron = tron;

  tron.clear();
}

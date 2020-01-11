import React from 'react';
import { Provider } from 'react-redux';

import * as Expo from 'expo';
// import { SafeAreaView } from 'react-native';
import Navigator from './config/routes';
import store from './config/store';
import SafeAreaView from './components/SafeArea';

// Expo.ScreenOrientation.allow(Expo.ScreenOrientation.Orientation.PORTRAIT_UP);

export default () => (

  <Provider store={store}>
    <SafeAreaView style={{ backgroundColor: "rgb(214, 104, 90)"}}>
      <Navigator />
    </SafeAreaView>
  </Provider>


);

import React from 'react';
import { Provider } from 'react-redux';

import * as Expo from 'expo';
import { SafeAreaView } from "react-native";
import Navigator from './config/routes';
import store from './config/store';

// Expo.ScreenOrientation.allow(Expo.ScreenOrientation.Orientation.PORTRAIT_UP);

export default () => (
  <Provider store={store}>
    <Navigator />
  </Provider>
);

import React from 'react';

import { StackNavigator, TabNavigator, TabBarBottom } from 'react-navigation';

import { View, Platform, StatusBar } from 'react-native';

import { Icon } from 'react-native-elements';

import { Disponibles, Detalle } from '../screens/Cursos';
import Cubiculos from '../screens/Cubiculos';
import Settings from '../screens/Settings';
import Mapa from '../screens/Mapa/index';
import About from '../screens/About/infoAbout';
import Noticias from '../screens/Noticias/index';
import { getBottomSpace } from 'react-native-iphone-x-helper';

const App = TabNavigator(
  {
    Cursos: {
      screen: Disponibles,
      navigationOptions: {
        tabBarLabel: 'Cursos',
        tabBarIcon: () => (
          <Icon name="business" size={30} color="rgb(214, 104, 90)" />
        ),
      },
    },
    Mapa: {
      screen: Mapa,
      navigationOptions: {
        tabBarLabel: 'Mapa',
        headerTitle: 'Mapa',
        tabBarIcon: () => (
          <Icon name="map" size={30} color="rgb(214, 104, 90)" />
        ),
      },
    },
    Noticias: {
      screen: Noticias,
      navigationOptions: {
        tabBarLabel: 'Noticias',
        tabBarIcon: () => (
          <Icon name="news" type="entypo" size={30} color="rgb(214, 104, 90)" />
        ),
      },
    },
    /* Cubiculos: {
      screen: Cubiculos,
      navigationOptions: {
        tabBarLabel: "Cubiculos",
        tabBarIcon: () => (
          <Icon name="assignment" size={30} color="rgb(214, 104, 90)" />
        )
      }
    } */
  },
  {
    tabBarComponent: props => (
      <View style={{ paddingBottom: getBottomSpace(), backgroundColor: 'white'}}>
        <TabBarBottom {...props} style={{ backgroundColor: 'white' }}/>
      </View>
    ),
    tabBarPosition: 'bottom',
  },
);

const x = 0;

export default StackNavigator(
  {
    App: {
      screen: App,
      navigationOptions: ({ navigation }) => ({
        title: 'Hive',
        headerRight: (
          <View style={{ marginRight: 10 }}>
            <Icon
              name="info-circle"
              color="white"
              size={30}
              type="font-awesome"
              onPress={() => navigation.navigate('About')}
            />
          </View>
        ),
      }),
    },
    Settings: {
      screen: Settings,
    },
    Detalle: {
      screen: Detalle,
    },
    About: {
      screen: About,
      navigationOptions: {
        headerStyle: {
          backgroundColor: '#10253A',
        },
      },
    },
  },
  {
    navigationOptions: () => ({
      headerTintColor: 'white',
      headerStyle: {
        backgroundColor: 'rgb(214, 104, 90)',
      },
    }),
  },
);

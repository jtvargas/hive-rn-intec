import React, { Component } from 'react';
import {
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  StyleSheet,
  RefreshControl,
  Platform,
} from 'react-native';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import SelectInput from 'react-native-select-input-ios';
import Edificios from '../../data/edificios';

import Lista from '../../components/List/Lista';

import { timeConverter } from '../../helpers';

import {
  getInitialList,
  filterEdificio,
  filterTime,
} from '../../actions/cursos';

const debounce = require('lodash.debounce');

import { AdMobBanner } from 'expo';

const BANNER_ID_ANDROID = 'ca-app-pub-8661249338970669/9976830204';
const BANNER_ID_IOS = 'ca-app-pub-8661249338970669/8562965742';

class CursosDisponibles extends Component {
  static propTypes = {
    dispatch: PropTypes.func,
    isLoading: PropTypes.string,
    isFetching: PropTypes.bool,
    cursosDisponibles: PropTypes.array,
    navigation: PropTypes.object,
    building: PropTypes.string,
    time: PropTypes.number,
  };

  constructor(props) {
    super(props);
    this.state = {
      refreshing: false,
    };
    this.debouncedOnpress = debounce(this.onDetails, 1000, { leading: true, trailing: false });
  }

  componentWillMount() {
    this.props.dispatch(getInitialList(new Date().getHours()));
  }
  _onRefresh() {
    this.props.dispatch(getInitialList(new Date().getHours()));
  }

  onDetails = (aula) => {
    this.props.navigation.navigate('Detalle', { curso: aula });
  };

  onSubmitBuilding = (building) => {
    this.props.dispatch(filterEdificio(building));
  };

  onSubmitTime = (time) => {
    this.props.dispatch(filterTime(time));
  };

  getBuildingOptions = () => {
    const buildings = [{ value: '', label: 'Todos' }];
    const list = Object.keys(Edificios);

    for (let i = 0; i < list.length; i += 1) {
      const building = list[i];
      buildings.push({
        value: building,
        label: building,
      });
    }
    return buildings;
  };

  getTimeOptions = () => {
    const options = [];
    for (let i = 0; i <= 23; i += 1) {
      options.push({
        value: i,
        label: timeConverter(i),
      });
    }

    return options;
  };

  render() {
    const timeSelector = (
      <SelectInput
        labelStyle={
          Platform.OS === 'ios'
            ? {
              flex: 1,
              fontSize: 15,
              marginLeft: 8,
              color: '#000',
            }
            : { color: '#000' }
        }
        buttonsBackgroundColor={'#E7E9E7'}
        keyboardBackgroundColor={'#ecf0f1'}
        buttonsTextColor={'rgb(214, 104, 90)'}
        buttonsTextSize={18}
        cancelKeyText={'Cancelar'}
        submitKeyText={'Aceptar'}
        value={this.props.time}
        options={this.getTimeOptions()}
        ref="timePicker"
        onSubmitEditing={val => this.onSubmitTime(val)}
      />
    );

    const buildingSelector = (
      <SelectInput
        labelStyle={
          Platform.OS === 'ios'
            ? {
              flex: 1,
              fontSize: 15,
              marginLeft: 8,
              color: '#000',

            }
            : { color: '#000' }
        }
        buttonsBackgroundColor={'#E7E9E7'}
        buttonsTextColor={'rgb(214, 104, 90)'}
        cancelKeyText={'Cancelar'}
        buttonsTextSize={18}
        submitKeyText={'Aceptar'}
        keyboardBackgroundColor={'#ecf0f1'}
        value={this.props.building}
        options={this.getBuildingOptions()}
        ref="buildingPicker"
        onSubmitEditing={val => this.onSubmitBuilding(val)}
      />
    );

    let timeButton;
    let buildingButton;

    if (Platform.OS === 'ios') {
      timeButton = (
        <TouchableOpacity
          onPress={() => this.refs.timePicker.focus()}
          style={[styles.Pick, styles.PickBorder, { flexDirection: 'row' }]}
        >
          {timeSelector}
          <Text style={{ flex: 1 }}> ▾</Text>
        </TouchableOpacity>
      );
      buildingButton = (
        <TouchableOpacity
          onPress={() => this.refs.buildingPicker.focus()}
          style={[styles.Pick, { flexDirection: 'row' }]}
        >
          {buildingSelector}
          <Text style={{ flex: 1 }}> ▾</Text>
        </TouchableOpacity>
      );
    } else {
      timeButton = (
        <View style={[styles.Pick, styles.PickBorder]}>{timeSelector}</View>
      );
      buildingButton = <View style={styles.Pick}>{buildingSelector}</View>;
    }

    return (
      <View style={{ flex: 1, backgroundColor: '#E7E9E7' }}>
        <StatusBar translucent={false} backgroundColor="#B64233" barStyle="light-content" />
        <View style={{ flex: 1 }}>
          <View style={styles.PickerTab}>
            {buildingButton}
            {timeButton}
          </View>
          {/* <AdMobBanner
            adUnitID={Platform.OS === 'ios' ? BANNER_ID_IOS : BANNER_ID_ANDROID}
            didFailToReceiveAdWithError={this.bannerError}
          /> */}
          {!this.props.cursosDisponibles.length && !this.props.isFetching ? (
            <View style={styles.NoResultContainer}>
              <Text style={styles.NoResult}>
                Lo sentimos, no hay cursos disponibles
              </Text>
            </View>
          ) : (
            <View style={{ flex: 10, marginTop: 2 }}>
              <Lista
                refresh={
                  <RefreshControl
                    refreshing={this.props.isFetching || false}
                    onRefresh={this._onRefresh.bind(this)}
                  />
                }
                refreshing={this.props.isFetching || false}
                data={this.props.cursosDisponibles}
                clickAction={this.debouncedOnpress}
              />
            </View>
          )}
        </View>
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  const cursosDisponibles = state.cursos.cursosDisponibles.listado;
  const isFetching = state.cursos.cursosDisponibles.isFetching;
  const building = state.cursos.cursosDisponibles.building;
  const time = state.cursos.cursosDisponibles.time;
  return {
    cursosDisponibles,
    isFetching,
    building,
    time,
  };
};

const styles = StyleSheet.create({
  PickerTab: {
    flex: 1,
    backgroundColor: '#fff',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  PickBorder: {
    borderLeftWidth: 2,


  },
  NoResultContainer: {
    flex: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },

  Pick: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: Platform.OS === 'ios' ? 15 : 0,
    paddingBottom: Platform.OS === 'ios' ? 10 : 0,
    justifyContent: ('center', 'flex-start'),
    borderColor: 'lightgrey',
  },
  TextPickerIOS: {
    fontSize: 15,
    marginLeft: 8,
    color: '#000',
    paddingBottom: 10,
  },
  TextPickerAndroid: {
    color: '#000',
  },
});

export default connect(mapStateToProps)(CursosDisponibles);

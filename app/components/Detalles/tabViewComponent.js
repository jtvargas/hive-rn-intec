import React, { PureComponent } from "react";
import { View, StyleSheet, Dimensions } from "react-native";
import { TabViewAnimated, TabBar, SceneMap } from "react-native-tab-view";

import ListaHorario from "./listaHorario";

let HorarioLunes = () => <ListaHorario />;

const largo = Dimensions.get("window").width;

export default class TabViewExample extends PureComponent {
  state = {
    index: this.getInitialTab(),
    routes: [
      { key: "1", title: "Lu" },
      { key: "2", title: "Ma" },
      { key: "3", title: "Mi" },
      { key: "4", title: "Ju" },
      { key: "5", title: "Vi" },
      { key: "6", title: "Sa" }
    ]
  };

  _handleIndexChange = index => this.setState({ index });

  getInitialTab() {
    let day = new Date().getDay();

    if (day > 0) {
      day--;
    }

    return day;
  }

  _renderHeader = props => (
    <TabBar
      {...props}
      indicatorStyle={styles.indicator}
      style={styles.tabbar}
      labelStyle={styles.label}
    />
  );

  _renderScene = SceneMap({
    1: () => <ListaHorario data={this.props.detalles.lunes} />,
    2: () => <ListaHorario data={this.props.detalles.martes} />,
    3: () => <ListaHorario data={this.props.detalles.miercoles} />,
    4: () => <ListaHorario data={this.props.detalles.jueves} />,
    5: () => <ListaHorario data={this.props.detalles.viernes} />,
    6: () => <ListaHorario data={this.props.detalles.sabado} />
  });

  render() {
    return (
      <TabViewAnimated
        style={styles.container}
        navigationState={this.state}
        renderScene={this._renderScene}
        renderHeader={this._renderHeader}
        onIndexChange={this._handleIndexChange}
        initialLayout={{
          width: largo,
          height: 0
        }}
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  tabbar: {
    backgroundColor: newFunction()
    //borderBottomLeftRadius: 10,
    //borderBottomRightRadius: 10
  },
  tab: {
    width: 120
  },
  indicator: {
    backgroundColor: "#fff"
    //width: largo / 6 * 0.73,
    //marginLeft: 9
  },
  label: {
    color: "#fff",
    fontWeight: "400",
    fontSize: 13
  }
});
function newFunction() {
  return "rgb(214, 104, 90)";
}

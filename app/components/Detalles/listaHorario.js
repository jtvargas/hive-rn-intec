import React, { PureComponent } from "react";
import { View, Text, FlatList, StyleSheet, Picker } from "react-native";

import { List, ListItem } from "react-native-elements";

import { Horario } from "./HorariosComponent";
import Edificios from "../../data/edificios";

const styles = StyleSheet.create({
  noclasscontainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  noclass: {
    fontSize: 16,
    color: "grey",
    width: 200,
    textAlign: "center"
  },
  flatlist: {
    flex: 1
  }
});

export default class ListaHorario extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      loading: false,
      page: 1,
      seed: 1,
      error: null,
      refreshing: false
    };
  }

  render() {
    if (!this.props.data || this.props.data.length == 0) {
      return (
        <View style={styles.noclasscontainer}>
          <Text style={styles.noclass}>
            No hay clases registradas para este dia.
          </Text>
        </View>
      );
    }

    this.props.data.sort(function(a, b) {
      return parseFloat(a.desde) - parseFloat(b.desde);
    });

    return (
      <FlatList
        data={this.props.data}
        style={styles.flatlist}
        renderItem={({ item }) => (
          <Horario
            Hora1={item.desde}
            Hora2={item.hasta}
            Clase={item.info.name}
            Codigo={item.info.code}
            Profesor={item.info.teacher}
          />
        )}
        keyExtractor={(item, index) => index}
        ListFooterComponent={this.renderFooter}
      />
    );
  }
}

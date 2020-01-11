import React, { PureComponent } from "react";
import { View, Text, FlatList, StyleSheet, Picker } from "react-native";
import PropTypes from "prop-types";

import { Curso } from "./Curso";
import Edificios from "../../data/edificios";

export default class TaskList extends PureComponent {
  static propTypes = {
    clickAction: PropTypes.func,
    refreshing: PropTypes.bool,
    refresh: PropTypes.any,
    data: PropTypes.array
  };

  constructor(props) {
    super(props);

    this.state = {
      loading: false,
      page: 1,
      seed: 1,
      error: null,
      refreshing: this.props.refreshing || false
    };
  }

  render() {
    return (
      <FlatList
        data={this.props.data}
        refreshControl={this.props.refresh}
        refreshing={this.state.refreshing}
        renderItem={({ item, index }) => (
          <Curso
            Aula={item.curso}
            Index={index}
            Edificio={Edificios[item.edificio]}
            clickAction={this.props.clickAction}
            Next={item.proximaHora}
          />
        )}
        keyExtractor={item => item.curso}
        ListFooterComponent={this.renderFooter}
      />
    );
  }
}

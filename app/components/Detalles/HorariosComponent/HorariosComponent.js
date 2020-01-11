import React, { PureComponent } from "react";

import { View, Text, StyleSheet } from "react-native";

import { Icon, Avatar } from "react-native-elements";

import { timeConverter } from "../../../helpers";

import styles from "./styles";

export default class Horario extends PureComponent {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View style={styles.card}>
        <View style={{ margin: 10, flex: 1 }}>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              flex: 1,
              marginBottom: 3
            }}
          >
            <Text style={styles.hora}>
              {timeConverter(this.props.Hora1)} -{" "}
              {timeConverter(this.props.Hora2)}
            </Text>

            <Text style={styles.SecondaryText}>{this.props.Codigo}</Text>
          </View>

          <Text style={styles.ThirdText}>{this.props.Clase}</Text>
          <Text style={styles.SecondaryText}>{this.props.Profesor}</Text>
        </View>
      </View>
    );
  }
}

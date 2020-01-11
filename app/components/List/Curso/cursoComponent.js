import PropTypes from "prop-types";
import React, { PureComponent } from "react";

import { View, Text, TouchableOpacity } from "react-native";

import { Icon } from "react-native-elements";

import { timeConverter } from "../../../helpers";

import styles from "./styles";

const Color = num => {
  if (num % 2 == 0) {
    return "rgb(214, 104, 90)";
  } else {
    return "#B64233";
  }
};

export default class Curso extends PureComponent {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <TouchableOpacity onPress={() => this.props.clickAction(this.props.Aula)}>
        <View style={styles.card}>
          <View style={{ margin: 15 }}>
            <Text style={styles.PrimaryText}>{this.props.Aula}</Text>
            <Text style={styles.SecondaryText}>{this.props.Edificio}</Text>
          </View>
          <View style={{ flexDirection: "column" }}>
            <View
              style={{
                flex: 1,
                alignItems: "flex-end",
                justifyContent: "flex-end"
              }}
            >
              <Icon
                style={{ marginRight: 1, alignSelf: "flex-end" }}
                name="chevron-right"
                color="lightgrey"
                size={30}
              />
            </View>
            {this.props.Next ? (
              <View
                style={{
                  flexDirection: "row",
                  backgroundColor: "rgb(214, 104, 90)",
                  paddingLeft: 5,
                  padding: 2,
                  borderTopLeftRadius: 8,
                  borderBottomLeftRadius: 8
                }}
              >
                <Icon
                  style={{ marginRight: 3 }}
                  name="clock-alert"
                  type="material-community"
                  color="#ecf0f1"
                  size={12}
                />
                <Text
                  style={{
                    fontSize: 10,
                    color: "#fff"
                  }}
                >
                  Libre hasta {timeConverter(this.props.Next)}
                </Text>
              </View>
            ) : (
              <View
                style={{
                  flexDirection: "row",
                  backgroundColor: "#1abc9c",
                  padding: 2,
                  paddingLeft: 5,
                  borderTopLeftRadius: 8,
                  borderBottomLeftRadius: 8
                }}
              >
                <Icon
                  style={{ marginRight: 3 }}
                  name="clock"
                  type="material-community"
                  color="#ecf0f1"
                  size={12}
                />
                <Text
                  style={{
                    marginRight: 11,
                    fontSize: 10,
                    color: "#fff"
                  }}
                >
                  No hay mas clases
                </Text>
              </View>
            )}
          </View>
        </View>
      </TouchableOpacity>
    );
  }
}

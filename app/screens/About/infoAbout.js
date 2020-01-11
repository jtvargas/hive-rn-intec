import React, { Component } from "react";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  Picker,
  Image,
  Linking
} from "react-native";
import { Icon, Grid, Row, Avatar } from "react-native-elements";
import Expo from "expo-constants";

import { Logo } from "../../components/About/Logo";

const Info = () => {
  return (
    <View style={styles.Container}>
      <View style={styles.headContainer}>
        <Logo />
      </View>
      <View style={styles.headContainer2}>
        <View style={styles.info}>
          <View
            style={{
              padding: 20,
              alignItems: "center",
              flex: 2,
              flexDirection: "row"
            }}
          >
            <Text
              style={{
                textAlign: "center",
                color: "#fff",
                fontWeight: "bold"
              }}
            >
              Esta app fue creada por BeyondX con tal de brindar la informacion
              de los cursos disponibles para poder agilizar el proceso de
              busqueda de cursos para estudiar o realizar un proyecto. Si
              encuentra algun fallo en la aplicacion, favor de mandar un mensaje
              presionando el icono de abajo.
            </Text>
          </View>
          <View style={styles.icons}>
            <View style={{ paddingRight: 10, alignItems: "flex-end", flex: 1 }}>
              <Icon
                raised
                name="mail"
                color="#3498db"
                size={50}
                type="MaterialIcons"
                onPress={() =>
                  Linking.openURL(
                    "mailto:beyondspprt@gmail.com?subject=Fallo Hive&body=Version de Hive ~" +
                      Expo.manifest.version +
                      "~"
                  )}
              />
            </View>

            <View
              style={{ paddingLeft: 10, alignItems: "flex-start", flex: 1 }}
            >
              <Icon
                raised
                name="web"
                color="#f39c12"
                size={50}
                type="MaterialIcons"
                onPress={() => {
                  Linking.openURL("http://beyondx.me");
                }}
              />
            </View>
          </View>
          <View style={{ flex: 1, alignItems: "center" }}>
            <Text
              style={{
                color: "#fff",
                fontWeight: "bold",
                marginBottom: 10
              }}
            >
              Hive v{Expo.manifest.version}🐝
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  Container: {
    flex: 10,
    backgroundColor: "#34495e",
    flexDirection: "column"
  },
  img: {
    height: 200,
    width: 200
  },
  headContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#10253A",
    flexDirection: "row",
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40
  },
  info: {
    flex: 1,
    backgroundColor: "#34495e",
    alignItems: "center"
  },
  icons: {
    alignContent: "center",
    flex: 2,
    flexDirection: "row"
  },
  headContainer2: {
    flex: 2,
    backgroundColor: "#ecf0f1",
    flexDirection: "row"
  }
});
export default Info;

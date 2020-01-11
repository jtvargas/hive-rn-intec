import React from "react";
import { Text, View } from "react-native";

const Cubiculos = () => (
  <View style={{ flex: 1 }}>
    <View style={{ flex: 1, backgroundColor: "#8E2315" }}>
      <Text style={{ flex: 1 }}>Reservar Cubiculo</Text>
    </View>
    <View style={{ flex: 1, backgroundColor: "#B64233" }}>
      <Text style={{ flex: 1 }}>Administrar Reservas</Text>
    </View>
  </View>
);

export default Cubiculos;

import { StyleSheet } from "react-native";
import EStyleSheet from "react-native-extended-stylesheet";

export default StyleSheet.create({
  card: {
    paddingTop: 5,
    paddingBottom: 5,
    backgroundColor: "white",
    marginBottom: 1.5,
    borderWidth: 0,
    borderColor: "lightgrey",
    borderRadius: 3,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  PrimaryText: {
    color: "black",
    fontSize: 16,
    marginBottom: 2,
    marginLeft: 10
  },

  SecondaryText: {
    fontSize: 12,
    color: "darkgrey",
    marginLeft: 10
  }
});

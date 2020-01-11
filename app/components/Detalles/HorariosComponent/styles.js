import { StyleSheet } from "react-native";
import EStyleSheet from "react-native-extended-stylesheet";

export default StyleSheet.create({
  card: {
    flex: 1,
    paddingRight: 20,
    padding: 5,
    paddingTop: 3,
    marginBottom: 5,
    marginTop: 5,

    paddingBottom: 3,
    backgroundColor: "white",
    marginLeft: 25,
    marginRight: 25,
    borderLeftWidth: 2,
    borderColor: "#B64233",
    borderRadius: 0,
    flexDirection: "row",
    // justifyContent: "space-between",
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
  },
  ThirdText: {
    alignItems: "flex-end",
    color: "black",
    fontSize: 16,
    marginBottom: 2,
    marginLeft: 10
  },

  hora: {
    marginLeft: 10,
    marginBottom: 3,
    fontSize: 15
  }
});

import React, { PureComponent } from "react";
import { View, Text, StyleSheet, Platform } from "react-native";
import {} from "react-native-elements";

import PropTypes from "prop-types";
import { connect } from "react-redux";
import Edificios from "../../data/edificios";
import { getRoomInfo } from "../../actions/cursos";

import TabViewComponent from "../../components/Detalles/tabViewComponent";

import { AdMobBanner } from "expo";

const BANNER_ID_ANDROID = "ca-app-pub-8661249338970669/9894738025";
const BANNER_ID_IOS = "ca-app-pub-8661249338970669/3161098270";

class Detalle extends PureComponent {
  static propTypes = {
    isFetching: PropTypes.bool,
    detalleCursos: PropTypes.any,
    navigation: PropTypes.object,
    curso: PropTypes.string
  };

  componentWillMount() {
    console.log(this.props.navigation.state.params.curso);
    this.props.dispatch(getRoomInfo(this.props.navigation.state.params.curso));
  }

  render() {
    let classData = this.props.detalleCursos[
      this.props.navigation.state.params.curso
    ];
    let edif = Edificios[this.props.navigation.state.params.curso.substr(0, 2)];

    return (
      <View style={{ flex: 1 }}>
        <View style={styles.subHeader}>
          <View style={styles.Header}>
            <Text style={styles.PrimaryText}>
              {this.props.navigation.state.params.curso}
            </Text>
          </View>
          <Text
            style={[styles.SecondaryText, { alignSelf: "center", padding: 10 }]}
          >
            {edif}
          </Text>
        </View>
        <View style={styles.Table}>
          {!classData ? (
            <View style={styles.loadText}>
              <Text>Cargando horario de curso...</Text>
            </View>
          ) : (
            <TabViewComponent detalles={classData} />
          )}
        </View>
        <AdMobBanner
          adUnitID={Platform.OS === "ios" ? BANNER_ID_IOS : BANNER_ID_ANDROID}
          didFailToReceiveAdWithError={this.bannerError}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  Header: {
    flex: 1,
    marginTop: 10,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#8E2315"
  },
  subHeader: {
    flex: 5,
    flexDirection: "column",
    justifyContent: "center",
    backgroundColor: "#B64233"
  },
  Table: {
    flex: 11
  },
  loadText: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1
  },
  PrimaryText: {
    fontSize: 50,
    color: "white"
  },
  SecondaryText: {
    fontSize: 15,
    color: "white"
  }
});

const mapStateToProps = state => {
  const detalleCursos = state.cursos.detalleCursos.detalles;
  const isFetching = state.cursos.detalleCursos.isFetching;
  const curso = state.cursos.detalleCursos.curso;
  return {
    detalleCursos,
    isFetching,
    curso
  };
};

export default connect(mapStateToProps)(Detalle);

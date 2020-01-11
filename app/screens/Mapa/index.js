import React from "react";
import { View, Text, Image, Dimensions, Platform } from "react-native";
import ImageZoom from "react-native-image-pan-zoom";
import { WebView } from 'react-native-webview';

const imageWidth = Dimensions.get("window").width;


import { AdMobBanner } from 'expo';

const BANNER_ID_ANDROID = 'ca-app-pub-8661249338970669/2640076297';
const BANNER_ID_IOS = 'ca-app-pub-8661249338970669/1518566319';

const Mapa = () => (
  // <View style={{flex: 1}}>
  //   <View
  //     style={{
  //       flex: 1,
  //       backgroundColor: "white",
  //       width: imageWidth,
  //       height: Dimensions.get("window").height - 32,
  //       flexDirection: "row",
  //       alignItems: "center"
  //     }}
  //   >
      
  //     <ImageZoom
  //       style={{ flex: 1, width: imageWidth, height: imageWidth * 0.565 }}
  //       cropWidth={imageWidth}
  //       cropHeight={Dimensions.get("window").height - 32}
  //       imageWidth={imageWidth}
  //       imageHeight={imageWidth * 0.565}
  //     >
  //       <Image
  //         style={{
  //           flex: 1,
  //           width: imageWidth,
  //           height: imageWidth * 0.565
  //         }}
  //         source={require("../../src/_mapa.jpg")}
  //       />
  //     </ImageZoom>
  //   </View>
  //   <AdMobBanner
  //     style={{backgroundColor: 'white'}}
  //     adUnitID={Platform.OS === 'ios' ? BANNER_ID_IOS : BANNER_ID_ANDROID}
  //     didFailToReceiveAdWithError={this.bannerError}
  //   />
  // </View>
  <View style={{ flex: 1,}}>
    <WebView
      source={{ uri: 'https://www.google.com/maps/d/viewer?mid=1rRRMjOxQLt-ZsNLSTLCw7SvBo-M&ll=18.487895208256898%2C-69.96265285532951&z=18' }}
      javaScriptEnabled={true}
      domStorageEnabled={true}
      startInLoadingState={true}
      maxHeight={480}
      maxWidth={640}
      scrollEnabled={false}
    />

  </View>
);

export default Mapa;

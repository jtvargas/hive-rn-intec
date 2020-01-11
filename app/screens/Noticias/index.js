import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  Linking,
  Image,
  FlatList,
  StatusBar, 
  SafeAreaView
} from 'react-native';

import ActivityCard from '../../components/ActivityCard/index';
import Carousel, { Pagination } from 'react-native-snap-carousel';
import { Icon } from 'react-native-elements';
import Axios from 'axios';


const objDimensions = Dimensions.get('window');

const widthRs = objDimensions.width < 340 ? 295 : 345;


class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activityData: [],
      dataCarousel: [],
      activeIndex: 0,
      listVisible: true,
      modeNews: "Todas"
    };
    this._visibleList = this.handleVisibleList.bind(this);
  }
  
  
  static navigationOptions = {
    headerTitle: "Noticias"
  }

  componentDidMount() {
    this.fetchData();
  }

  fetchData = () => {
    Axios.get('https://server-activitiesintec.herokuapp.com/api/activities')
      .then(res => {
        this.setState({
          activityData: res.data,
          dataCarousel: res.data
        })
        
      }).then(() =>{
        const data = this.state.dataCarousel.slice(0,5);
        this.setState({
          dataCarousel: data
        })
      })
  }

  handleVisibleList = () => {
    this.setState({ 
      listVisible: !this.state.listVisible,
      modeNews: this.state.listVisible ? "Mas cercanas": "Todas"
    })

  }

  handleListOrCard = (state) => {
    if (state) {
      return (
        <View style={{ flex: 6 }}>
          <FlatList
            data={this.state.activityData}
            keyExtractor={this._keyExtractor}
            renderItem={this.renderListActivity}
          />
        </View>
      )
    } else {
      return (
        <View style={{ flex: 6 }}>
          <Carousel
            ref={(c) => { this._carousel = c; }}
            data={this.state.dataCarousel}
            renderItem={this.renderActivityCard}
            onSnapToItem={(index) => this.setState({ activeIndex: index })}
            sliderWidth={objDimensions.width}
            itemWidth={widthRs}
          />
            <Pagination
              dotsLength={this.state.dataCarousel.length}
              activeDotIndex={this.state.activeIndex}
              containerStyle={{ paddingTop: 8, }}
              dotStyle={{
                width: 10,
                height: 8,
                borderRadius: 5,
                marginHorizontal: 2,
                backgroundColor: 'rgb(214, 104, 90)'
              }}
              inactiveDotStyle={{
                backgroundColor: '#a4b0be'
              }}
              inactiveDotOpacity={0.4}
              inactiveDotScale={0.6}
            />
        </View>
      )
    }

  }

  _keyExtractor = (item, index) => item._id;


  renderListActivity = (data) => {

    return (
      <ActivityCard
        type='listCards'

        onPress={() => Linking.openURL(data.item.details.ref)}
        title={data.item.title}
        info={data.item.info}
        image={data.item.img}
        month={data.item.details.month}
        day={data.item.details.day}
      />
    )
  }
  renderActivityCard = (data) => {

    return (
      <ActivityCard
        type='cardSlide'
        onPress={() => Linking.openURL(data.item.details.ref)}
        title={data.item.title}
        hour={data.item.details.time}
        info={data.item.info}
        location={data.item.details.place}
        image={data.item.img}
        month={data.item.details.month}
        day={data.item.details.day}
      />
    )
  }




  render() {

    return (
        <View style={styles.container}>
          <View style={{
            flex: 0.6,
            marginLeft: 12,
            marginRight: 12,
            alignItems: 'center',
            flexDirection: 'row',
            justifyContent: 'space-between'
          }}>
            <Text style={{
              color: '#2f3542',
              fontSize: 30,
              fontWeight: 'bold',
            }}>{this.state.modeNews}</Text>
            {/* <Image
              style={{ width: 60, height: 60 }}
              source={{ uri: 'https://shkspr.mobi/svg/calendar.svg' }}
            /> */}
            <Icon
              name={this.state.listVisible ? 'annotate': 'list-thumbnails'}
              type='foundation'
              color='#2f3542'
              onPress={this._visibleList}

            />
          </View>
          {this.handleListOrCard(this.state.listVisible)}
        </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#ffffff',
  },
});

export default Home;

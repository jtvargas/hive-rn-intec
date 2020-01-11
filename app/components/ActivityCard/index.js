//import liraries
import React, { Component } from 'react';
import { 
  View, 
  StyleSheet, 
  Text, 
  Image, 
  TouchableOpacity, 
  Linking, 
  Dimensions,
  LayoutAnimation  } from 'react-native';

import { Icon } from 'react-native-elements';
import Card from './components/card';
import CardSection from './components/cardSection';
import Stylesheet from './stylesheet';

const objDimensions = Dimensions.get('window');
const widthRs = objDimensions.width < 330 ? 290 : 340;
const heightRs = objDimensions.height < 570 ? 430 : 500;

// create a componentß
class ActivityCard extends Component {

  componentDidMount() {
    LayoutAnimation.easeInEaseOut();
  }

  renderTypeCard = (type) => {
  
    if(type == 'cardSlide'){
      return(
        <TouchableOpacity onPress={this.props.onPress}>
          <Card height={ heightRs } width={widthRs} backgroundColor={'rgba(236, 240, 241,1.0)'}>
            <CardSection>
              <View style={Stylesheet.styleSectionCardImage}>
                <Image
                  style={Stylesheet.imgStyle}
                  source={{ uri: this.props.image }}
                />
                <View style={Stylesheet.sectionCardDate}>
                  <Text style={Stylesheet.textStyleDay}>{this.props.day}</Text>
                  <Text style={Stylesheet.textStyleMonth} >{this.props.month}</Text>
                </View>
              </View>
              <View style={Stylesheet.sectionCardInfo}>
                <Text style={Stylesheet.textTitleStyle}>
                  {this.props.title}
                </Text>
                <Text style={Stylesheet.textInfoTextStyle}>
                  {this.props.info}
                </Text>
                <View style={Stylesheet.sectionDetail}>
                  <View style={Stylesheet.sectionRow}>
                    <Text style={Stylesheet.hourTitleStyle}>{this.props.hour}</Text>
                  </View>
                  <View style={Stylesheet.viewLocationTextStyle}>
                    <Text style={Stylesheet.textLocationStyle}>
                      {this.props.location}
                    </Text>
                  </View>
                </View>
              </View>
            </CardSection>
          </Card>
        </TouchableOpacity>
      )
    }else if(type == 'listCards'){
      return (
        <TouchableOpacity onPress={this.props.onPress}>
          <Card  width={objDimensions.width}>
            <View style={Stylesheet.listContainerStyle}>
                <Image
                  style={Stylesheet.imgListStyle}
                  source={{ uri: this.props.image }}
                />
              <View style={Stylesheet.containerInfoList}>
                <Text style={Stylesheet.textDayListStyle}>{this.props.day}</Text>
                <Text style={Stylesheet.textDayListStyle}>{this.props.month}</Text>
                </View>
               <View style={Stylesheet.containerTextInfo}>
                  <Text style={Stylesheet.textInfoTitleStyle}>
                    {this.props.title}
                  </Text>
                  <Text style={Stylesheet.textInfoMoreStyle}>
                    {this.props.info}
                  </Text>
                </View>
            </View>
          </Card>
        </TouchableOpacity>
      )
    }
  }
  render() {
    return (
      <View >
        {this.renderTypeCard(this.props.type)}
      </View>
    );
  }
}

//make this component available to the app
export default ActivityCard;

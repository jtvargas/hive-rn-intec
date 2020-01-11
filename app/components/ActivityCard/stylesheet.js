import { Dimensions } from 'react-native';

const objDimensions = Dimensions.get('window');
const imgResize = objDimensions.height < 570 ? 230 : 300;
const listResize = objDimensions.width < 375? 210 : 240;

module.exports = {
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
   
  },
  styleSectionCardImage: {
    overflow: 'hidden', 
    height: imgResize, 
    borderTopRightRadius: 11, 
    borderTopLeftRadius: 11
  },
  imgStyle: {
    height: imgResize
  },
  sectionCardDate: {
    width: 60, 
    height: 66, 
    borderBottomRightRadius: 3, 
    position: 'absolute',
    alignItems: 'center', 
    justifyContent: 'center', 
    backgroundColor: 'rgba(53, 59, 72,0.8)' 
  },
  textStyleDay: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 2,
    color: 'white'
  },
  textStyleMonth: {
    fontSize: 17,
    fontWeight: 'bold',
    marginBottom: 2,
    color: 'white'
  },
  sectionCardInfo: {
    marginBottom: 10
  },
  textTitleStyle: {
    fontSize: 18,
    color: '#2f3542',
    fontWeight: 'bold',
    margin: 5
  },
  textInfoTextStyle: {
    fontSize: 14,
    fontWeight: '400',
    color: 'grey',
    margin: 5
  },
  sectionDetail: { 
    flexDirection: 'row',
    margin: 3, 
    flex:1,
    justifyContent: 'space-between',
    width: imgResize
   },
   sectionRow: {
     flexDirection: 'column',
     
   },
  hourTitleStyle: { 
    fontSize: 17,
     alignSelf: 'center', 
     fontWeight: '700' 
  },
  iconHourStyle: { 
    fontSize: 21,
    color: 'rgba(0, 168, 255,1.0)',
    alignSelf: 'center',
    margin: 4 
  },
  iconLocationStyle: {
    color: 'rgba(232, 65, 24,1.0)', 
    fontSize: 16,
    alignSelf: 'center'

  },
  textLocationStyle: { 
    fontSize: 7,
     fontWeight: '600', 
     alignSelf:'center',
     color: 'rgba(47, 54, 64,1.0)' 
    },
  viewLocationTextStyle: {
    width: 90,
     
  },
  listContainerStyle: {
    flexDirection: 'row',
     width: objDimensions.width
  },
  imgListStyle: {
    height: 115, 
    width: 105, 
    marginRight: 8
  },
  containerInfoList:{
    width: 38,
    height: 40,
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    borderTopRightRadius: 3,
    backgroundColor: 'rgba(53, 59, 72,0.8)',
    alignSelf: 'flex-end'
  },
  textDayListStyle: {
    fontSize: 15,
     fontWeight: 'bold',
      color: 'white'
  },
  containerTextInfo: {
    width: listResize
  },
  textInfoTitleStyle: {
    fontSize: 15, 
    color: '#2f3542',
    fontWeight: 'bold'
  },
  textInfoMoreStyle: { 
    fontSize: 13, 
    fontWeight: '300',
    marginTop: 5, 
    color: 'grey',
    marginBottom: 5 
  }
};
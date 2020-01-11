//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

// create a component
const Card = (props) => {

    const {containerStyle} = styles

    return (
        /*'{props.children} is use to call or render 
        everything that we have in the parent class */
        <View style={[containerStyle, {
          backgroundColor: props.backgroundColor,
          height: props.height,
          width: props.width
        }]}>
           {props.children}
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    containerStyle: {
        
        
        borderRadius: 11,
        borderColor: "#ddd",
        backgroundColor: 'white',
        borderBottomWidth: 1 ,
        shadowColor: "#000",
        
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.1,
        shadowRadius: 1,
        elevation: 1,
        marginLeft: 3,
        marginRight: 3,
        marginTop: 10

    },
});

//make this component available to the app
export default Card;

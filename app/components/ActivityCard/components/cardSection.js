//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

// create a component
const CardSection = (props) => {

    const { sectionStyle } = styles

    return (
        <View style={sectionStyle}>
            {props.children}
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    sectionStyle: {
       
       padding: 1,
       
       borderRadius:30,
       flexDirection: 'column',
       borderColor: '#768',
       position: 'relative'

    },
});

//make this component available to the app
export default CardSection;

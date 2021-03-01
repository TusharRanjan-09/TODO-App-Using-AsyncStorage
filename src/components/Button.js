import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
export default function Button(props) {
    return (

        <View style={styles.container}>
            <TouchableOpacity style={{marginLeft:5}}
                onPress={props.press}
            >
                <Text style={{color:'#f0373e', fontSize:30, fontWeight:'bold'}}>ADD</Text>
            </TouchableOpacity>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        // backgroundColor: 'lightgrey',
        alignItems: 'center',
        // width: '80%',
        // borderRadius: 30,
        justifyContent: 'center',
        marginTop: 15
    },
});

import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
export default function Input(props) {
    return (

        <View style={styles.container}>
            <TextInput placeholder="Enter The Task"
                onChangeText={props.textt}
                value={props.val}
            />
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: 'lightgrey',
        alignItems: 'center',
        width: '80%',
        borderRadius: 30,
        justifyContent: 'center',
        marginTop: 15
    },
    title: {
        color: 'white',
        fontSize: 27,
        fontWeight: 'bold'
    }
});

import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
export default class Header extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.title}>TODO</Text>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: 'darkviolet',
        alignItems: 'center',
        width: '100%',
        height: '7%',
        justifyContent: 'center'
    },
    title: {
        color: 'white',
        fontSize:27,
        fontWeight:'bold'
    }
});

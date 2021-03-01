import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
export default class Header extends Component {
    render() {
        return (
            <View style={styles.container}>
                <AntDesign name="bars" size={38} color="white" style={{marginLeft:6}}/>
                <Text style={styles.title}>TODO</Text>
                <MaterialCommunityIcons name="dots-vertical" size={38} color="white" />
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
        justifyContent: 'space-between',
        flexDirection: 'row'
    },
    title: {
        color: 'white',
        fontSize:27,
        fontWeight:'bold',
        alignSelf:'center',
        marginLeft:25
    }
});

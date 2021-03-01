import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import LinearGradient from 'react-native-linear-gradient';
export default class Header extends Component {
    render() {
        return (
<LinearGradient start={{x: 0, y: 0}} end={{x: 1, y: 1}} colors={['#9500ca', '#ff0894', '#ff4740']} style={styles.linearGradient}>
            <View style={{flexDirection:'row', justifyContent: 'space-between',width:'100%'}}>
                <TouchableOpacity>
                <AntDesign name="bars" size={38} color="white" style={{marginLeft:6}}/>
                </TouchableOpacity>
                <Text style={styles.title}>TODO</Text>
                <TouchableOpacity>
                <MaterialCommunityIcons name="dots-vertical" size={38} color="white" />
                </TouchableOpacity>    
            </View>                 
</LinearGradient>  
        );
    }
}
const styles = StyleSheet.create({
    title: {
        color: 'white',
        fontSize:27,
        fontWeight:'bold',
        alignSelf:'center',
        marginLeft:25
    },
    linearGradient: {
      
        alignItems: 'center',
        width: '100%',
        height: '7%',
        justifyContent: 'space-between',
        flexDirection: 'row',
        borderRadius: 5
      },
      buttonText: {
        fontSize: 18,
        fontFamily: 'Gill Sans',
        textAlign: 'center',
        margin: 10,
        color: '#ffffff',
        backgroundColor: 'transparent',
      },
});

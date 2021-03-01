import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import Header from './src/components/Header';
import Input from './src/components/TextInput';
import Bttn from './src/components/Button';
export default class App extends Component {
  arr = []
  id = 0
  state = {
    text: '',
    item: [
      { id: 1, data: 'loading' }
    ],
    isLoading: false
  }

  storeData = async () => {
    this.arr.push({ id: this.id, data: this.state.text })
    this.id++;
    await AsyncStorage.setItem('myList', JSON.stringify(this.arr))
    this.setState({
      item: JSON.parse(await AsyncStorage.getItem('myList')),
      text: '',
      isLoading: true
    })
    console.log(this.state)
  }

  render() {
    return (
      <View style={styles.container}>
        <Header />
        <View style={{ flexDirection: 'row' }}>
          <Input textt={text => this.setState({ text })} val={this.state.text} />
          <Bttn press={this.storeData} />
        </View>
        <View style={{marginVertical:20}}>
          {this.state.isLoading ?
            this.state.item.map(item => {
              return <View style={{borderWidth:1,margin:5,flexDirection:'row',justifyContent:'space-between',alignItems:'center',width:330,padding:5,borderRadius:10, backgroundColor:'darkviolet'}} key={item.id}><Text style={{color:'white', fontSize:24}}>{item.data}</Text><TouchableOpacity><MaterialCommunityIcons name="delete-forever" size={38} color="white"/></TouchableOpacity></View>
            })
            : <Text>No Item</Text>
          }
        </View>
        <StatusBar style="auto" />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    paddingTop: 22
  },
});

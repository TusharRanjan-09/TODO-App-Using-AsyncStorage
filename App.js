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
  deleteItem = (index) => {
    var arry = this.state.item;
    arry.splice(index, 1);
    this.setState({ item: arry })
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
        <View style={{ marginVertical: 20 }}>
          {this.state.isLoading ?
            this.state.item.map((item, index) => {
              return <TouchableOpacity key={index} onPress={() => this.deleteItem(index)} style={styles.viw}  >
                <Text style={{ color: 'white', fontSize: 24 }}>{item.data}</Text>
                  <MaterialCommunityIcons name="delete-forever" size={38} color="white" />
                </TouchableOpacity>
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
  viw: {
    borderWidth: 1,
    margin: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: 330,
    padding: 5,
    borderRadius: 10,
    backgroundColor: 'darkviolet'
  },
});

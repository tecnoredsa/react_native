import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Dimensions, Button,ScrollView ,FlatList} from 'react-native';

const { width, height } = Dimensions.get('window');

export default function App() {
  const [text, setText] = useState('Valor default')
  const [cambia, setCambia] = useState('')
  return (   
    <View style={styles.container}>
      <FlatList
      data={[
        {key:'1', name:'Leyi'},
        {key:'2', name:'Diana'},
        {key:'3', name:'Enrique'},
        {key:'4', name:'Luis'},
        {key:'5', name:'Ivan'},
        {key:'6', name:'Alfonso'},
        {key:'7', name:'Edson'},
        {key:'8', name:'Aldo'},
        {key:'9', name:'Victor'},
        {key:'10', name:'Manuel'},
        {key:'11', name:'Francisco'},
        {key:'12', name:'cwervando'},
        {key:'13', name:'Edgar'},
        {key:'14', name:'Luis'},
        {key:'15', name:'esaul'},
        {key:'16', name:'Barajas'},
        {key:'17', name:'Viramontes'},
        {key:'18', name:'Zuñiga'},
        {key:'19', name:'Del Rio'},
        {key:'20', name:'Alejandro'},
        {key:'21', name:'Leyi'},
        {key:'22', name:'Diana'},
        {key:'23', name:'Enrique'},
        {key:'24', name:'Luis'},
        {key:'25', name:'Ivan'},
        {key:'26', name:'Alfonso'},
        {key:'27', name:'Edson'},
        {key:'28', name:'Aldo'},
        {key:'29', name:'Victor'},
        {key:'30', name:'Manuel'},
        {key:'31', name:'Francisco'},
        {key:'32', name:'cwervando'},
        {key:'33', name:'Edgar'},
        {key:'34', name:'Luis'},
        {key:'35', name:'esaul'},
        {key:'36', name:'Barajas'},
        {key:'37', name:'Viramontes'},
        {key:'38', name:'Zuñiga'},
        {key:'39', name:'Del Rio'},
        {key:'40', name:'Alejandro'},
      ]}
      renderItem={({item}) => <Text style={styles.item}>{item.name}</Text>}
      />
      <StatusBar style="auto" />
    </View >  
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  item:{
    padding:20,
    fontSize:22,
    height:40,
    borderBottomColor:'#ccc',
    borderBottomWidth:1,
  color:'red'
  }
});

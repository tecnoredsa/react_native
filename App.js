import { StatusBar } from 'expo-status-bar';
import React, { useEffect } from 'react';
import { Alert,Animated, Button, StyleSheet, Text, View } from 'react-native';
import * as Location from 'expo-location';
import Constant from 'expo-constants'

export default function App() {
  const buscarLocation = async ()=>{
    const {status} = await Location.requestForegroundPermissionsAsync()
    if(status !== 'granted'){
      return Alert.alert('No hay permisos para la geolicalización')
    }
    const location = await Location.getCurrentPositionAsync({})
    console.log(location);
  }

  useEffect(()=>{
    buscarLocation()
  })

  return (
    <View style={styles.container}>
      <Text>Coordenadas</Text>
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  }
});
//  {} []
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';

export default function App() {
  const datos = require('./assets/Lista.json');
  return (
    <View style={styles.container}>
      <Text style={styles.head}>Datos cargados</Text>
      <FlatList
      data={datos}
      keyExtractor={item => String (item.ctrl)}
      renderItem={({item})=> <Text style={styles.item}>Alumno:{item.alumno}</Text>}
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
    padding: 12,
  },
  item: {
    backgroundColor: "#dfdf",
    padding: 20,
    fontSize: 18,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    color: 'black',
  },
  head: {
    fontSize: 22,
    color: 'blue',
  },
});

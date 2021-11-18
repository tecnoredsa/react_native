import { StatusBar } from 'expo-status-bar';
import React, { useState,useEffect } from 'react';
import { ActivityIndicator, FlatList, StyleSheet, Text, View } from 'react-native';

export default function App() {
  const datos = require('./assets/Lista.json');
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data => {
        setUsers(data)
        setLoading(false)
        //console.log(users);
      })
  }, []);


  if (loading) {
    return <View style={styles.carga}><Text>Cargando datos...</Text>
    <ActivityIndicator size="large" color="#0000f"/>
    </View>
  }

  return (
    <View style={styles.container}>
      <Text style={styles.head}>Datos cargados</Text>
      <ActivityIndicator size="large" color="#0000f"/>
      <FlatList
        data={users}
        keyExtractor={item => String(item.id)}
        renderItem={({ item }) => <Text style={styles.item}>Alumno:{item.name}</Text>}
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
  carga: {
    flex: 1,
    backgroundColor: '#dfd',
    alignItems: 'center',
    justifyContent: 'center',
  }
});

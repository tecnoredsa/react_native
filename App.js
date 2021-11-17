import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Dimensions, Button,ScrollView } from 'react-native';

const { width, height } = Dimensions.get('window');

export default function App() {
  const [text, setText] = useState('Valor default')
  const [cambia, setCambia] = useState('')
  return (   
    <View style={styles.container}>
       <ScrollView style={styles.scroll}>
      <Text style={styles.texto}>Texto: {cambia}</Text>
      <Text style={styles.texto}>Texto: {cambia}</Text>
      <Text style={styles.texto}>Texto: {cambia}</Text>
      <Text style={styles.texto}>Texto: {cambia}</Text>
      <Text style={styles.texto}>Texto: {cambia}</Text>
      <Text style={styles.texto}>Texto: {cambia}</Text>
      <Text style={styles.texto}>Texto: {cambia}</Text>
      <Text style={styles.texto}>Texto: {cambia}</Text>
      <Text style={styles.texto}>Texto: {cambia}</Text>
      <Text style={styles.texto}>Texto: {cambia}</Text>
      <Text style={styles.texto}>Texto: {cambia}</Text>
      <Text style={styles.texto}>Texto: {cambia}</Text>
      <Text style={styles.texto}>Texto: {cambia}</Text>
      <Text style={styles.texto}>Texto: {cambia}</Text>
      <Text style={styles.texto}>Texto: {cambia}</Text>
      <Text style={styles.texto}>Texto: {cambia}</Text>
      <Text style={styles.texto}>Texto: {cambia}</Text>
      <TextInput onChangeText={t => setCambia(t)} style={styles.input} defaultValue={text} placeholder="Ingrese el nombre del servicio" />
      <Button onPress={() => {
        setCambia(text)
      }} title="Ingresar Text" />


      <StatusBar style="auto" />
      </ScrollView>
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
  input: {
    height: 40,
    backgroundColor: '#dfdf',
    width: width,

  },
  texto: {
    fontSize: 28,
    color: 'blue',
  },
  scroll:{
    width: Dimensions.get('window').width,

  },
});

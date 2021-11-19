import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, ImageBackground, Modal, Alert, Pressable } from 'react-native';

export default function App() {
  const [modal, setModal] = useState(false)
  return (
    <View style={styles.container}>
      <Modal
        animationType='slide'
        transparent={true}
        visible={modal}
        onRequestClose={() => {
          Alert.alert('Hola desde el Modal');
          setModal(!modal);
        }} >
        <View style={styles.modalCenter}>
          <View style={styles.modalView}>
            <Text style={styles.txtMod}>Hola Estudiantes del ITZ</Text>
            <Pressable style={styles.button}
              onPress={() =>
                setModal(!modal)
              }
            >
              <Text style={styles.textoB1}>Cierra modal</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
      <ImageBackground source={require('./assets/fondo.jpeg')} resizeMode="cover" style={styles.fondo}>
        <View style={styles.column1}>
          <Image
            style={styles.head}
            source={require('./assets/tca.png')}
          />

          <Image
            style={styles.head}
            source={require('./assets/tpu.png')}
          />


          <Image
            style={styles.head}
            source={{ uri: 'https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/216.png' }}
          />
        </View>

        <View style={styles.column2}>
          <Pressable
            style={styles.button}
            onPress={() =>
              setModal(!modal)
            }
          >
            <Text style={styles.textoB1}>Mostrar Modal</Text>
          </Pressable>
        </View >

        <View style={styles.column2}>




          <Image
            style={styles.head}
            source={require('./assets/tch.png')}
          />

          <Image
            style={styles.head}
            source={{ uri: 'https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/225.png' }}
          />

          <Image
            style={styles.head}
            source={{ uri: 'https://a.espncdn.com/i/teamlogos/soccer/500/223.png' }}
          />


        </View>
        <StatusBar style="auto" />
      </ImageBackground>
    </View >
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  head: {
    height: 100,
    width: 100,
    backgroundColor: '#000000cc',
  },
  column1: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  column2: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  fondo: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 20,
    flexDirection: 'row',
  },
  textoB1: {
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  button: {
    backgroundColor: '#0033ff',
    borderRadius: 20,
    padding: 10,
  },
  modalView: {
    margin: 25,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 30,
    alignItems: 'center',
    shadowColor: '#00f',
    shadowOffset: {
      width: 2,
      height: 5
    },
    shadowRadius: 5,
    shadowOpacity: 0.8,
  },
  modalCenter: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    flexDirection: 'row',
  },
  txtMod: {
    color: 'green',
    fontSize: 18,
    padding: 5
  },


});

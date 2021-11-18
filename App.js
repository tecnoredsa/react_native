import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image,ImageBackground } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
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
    backgroundColor:'#000000cc',
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
    flex:1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 20,
    flexDirection: 'row',  },

});

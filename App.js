import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View,SectionList} from 'react-native';

export default function App() {
  return (   
    <View style={styles.container}>
      <SectionList
      sections={[{
        title:'Grupo A',
        data:[
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
        ]
      },{
        title:'Grupo B',
        data:[
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
        ]
      },{
        title:'Grupo C',
        data:[
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
        ]
      },{
        title:'Grupo D',
        data:[
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
        ]
      }]}

  
      
  
      renderItem={({item}) => <Text style={styles.item}>Nombre:{item.name}</Text>}
      renderSectionHeader={({section}) => <Text style={styles.seccion}>{section.title}</Text>}
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
    padding:12,
  },
  item:{
    backgroundColor: "#dfdf",
    padding:20,
    fontSize:18,
    borderBottomWidth:1,
    borderBottomColor:'#ccc',
    color:'black',
  },
  seccion: {
    fontSize: 22,
    color:'blue',
  }
});

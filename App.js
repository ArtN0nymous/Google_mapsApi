import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MapView from 'react-native-maps';
export default function App() {
  return (
    <View style={styles.container}>
      <MapView style={styles.map_container}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  map_container:{
    width:'100%',
    height:'100%'
  }
});

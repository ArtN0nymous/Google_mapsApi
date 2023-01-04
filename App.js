import Reac,{useState,useEffect} from 'react';
import * as Location from 'expo-location';
import MapViewDirections from 'react-native-maps-directions';
import { StyleSheet, Text, View } from 'react-native';
import MapView,{Marker,Polyline} from 'react-native-maps';
import {GOOGLE_MAPS_KEY} from "@env";
export default function App() {
  const [state,setState]=useState({
    region: {
      latitude: 40.574457,
      longitude: -105.070450,
      latitudeDelta: 0.09,
      longitudeDelta: 0.04,
    },
    origen:{latitude:40.574457,longitude:-105.070450},
    destino:{latitude:40.590000,longitude:-105.070450}
  });
  // function onRegionChange(region) {
  //   setState({
  //     region : region
  //   });
  // }
  // useEffect(() => {
  //   //return current location but it not work, isn't change the current map
  //   console.log(state);
  //   (async()=>{
  //     let { status } = await Location.requestForegroundPermissionsAsync();
  //     if (status != 'granted') {
  //       console.log('Permission to access location was denied');
  //       return;
  //     }
  //     let location = await Location.getCurrentPositionAsync({});
  //     let region = {latitude:location.coords.latitude,longitude:location.coords.longitude,latitudeDelta:0.09,longitudeDelta:0.04};
  //     setState({region:region})
  //   })();
  // }, []);
  const setOrigen=async(location)=>{
    setState({...state,origen:location});
  }
  const setDestination=async(location)=>{
    setState({...state,destino:location});
  }
  return (
    <View style={styles.container}>
      <MapView style={styles.map_container} initialRegion={state.region} showsUserLocation={true}>
        <Marker coordinate={state.origen} draggable onDragEnd={(location)=>setOrigen(location.nativeEvent.coordinate)}/>
        <Marker coordinate={state.destino} draggable onDragEnd={(location)=>setDestination(location.nativeEvent.coordinate)}/>
        <MapViewDirections origin={state.origen} destination={state.destino} apikey={GOOGLE_MAPS_KEY}/>
        <Polyline coordinates={[state.origen,state.destino]} strokeColor='red' strokeWidth={5}/>
      </MapView>
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
    height:'90%'
  }
});

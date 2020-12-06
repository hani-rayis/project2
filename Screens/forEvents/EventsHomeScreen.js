import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { TouchableOpacity } from "react-native-gesture-handler";

const EventsHomeScreen = ({navigation}) => (
  <View style={styles.container}>
    <Text style={styles.row}>Upcoming Pet Adoption Drive</Text>
    <Text style={styles.row}>Date:</Text> 
    <TouchableOpacity style= {styles.TouchableOpacity}
          onPress={() => navigation.navigate("Reserve a Spot")}
          title="Reserve a Spot"><Text style={styles.buttonText}>Reserve a Spot</Text></TouchableOpacity>
        <Image source={{uri: 'https://images.unsplash.com/photo-1587642808118-c195255d64d3?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80'}} 
        style={{width: null, height: 400, flex: 1}} />

  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24
  },
  row: {
    padding: 4,
    borderBottomColor: "blue",
    borderBottomWidth: StyleSheet.hairlineWidth,
    fontSize: 24,
  },

  TouchableOpacity: {
    backgroundColor: "pink",
    height:50,  
    marginTop: 10,
    marginBottom:10,
    borderRadius: 20,
    },
  buttonText:{
    fontSize: 35,
    textAlign: "center",
  }
});

export default EventsHomeScreen;
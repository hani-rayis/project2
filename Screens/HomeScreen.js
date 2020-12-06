import React from 'react';
import { StyleSheet, Text, View, Image} from 'react-native';


export default function HomeScreen() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Cat Adoption Finder 🐈 </Text>
        <Image source={{uri: 'https://images.unsplash.com/photo-1601373879820-e12c3204acfd?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80'}} 
        style={{width: 250, height: 300}} />
        <Text style={styles.bodytext}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</Text>
      </View>
    );
  }
  

  const styles = StyleSheet.create({
  
    text:{
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 20,
    },
    
    bodytext:{
    fontSize: 20,
    marginTop:10,
    marginLeft:50,
    marginRight:50,
    textAlign:"justify",
   },

    container:{
    flex: 1, 
    backgroundColor:'blanchedalmond',
    justifyContent: 'center', 
    alignItems: 'center' 
    }
    
  });

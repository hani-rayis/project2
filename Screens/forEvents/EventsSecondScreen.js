import React from "react";
import { StyleSheet, Text, View, TextInput} from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { TouchableOpacity } from "react-native-gesture-handler";

const EventsSecondScreen = ({ navigation }) => (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>

<Text style={styles.text}> Name </Text><TextInput style={styles.input} />

<Text style={styles.text}> Email </Text><TextInput style={styles.input} />

<TouchableOpacity style= {styles.TouchableOpacity}
          onPress={() => navigation.navigate("Form")}
          title="Sign up"><Text style ={styles.buttonText}> Sign up </Text></TouchableOpacity>

      </View>
      );

   const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 22
    },
  
    text: {
    fontWeight: "bold",
    fontSize: 25
    },

    TouchableOpacity: {
      backgroundColor: "salmon",
      marginTop: 5,
      borderRadius: 10,
      },

    buttonText:{
      fontSize: 25,
      textAlign: "center",
      color: "black",
    },

    input: {
      padding: 10,
      marginBottom: 5,
      backgroundColor: "white",
      height: 40, 
      borderColor: 'gray', 
      borderWidth: 1 , 
      width: 200,
    }
  });
  export default EventsSecondScreen;
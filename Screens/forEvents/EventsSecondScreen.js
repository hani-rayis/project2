import React from "react";
import { Text, View, Button } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";

export default function EventsSecondScreen({ navigation }) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>Events Second Page!</Text>
        <Button
          onPress={() => navigation.navigate("Form")}
          title="Sign up"
        ></Button>
      </View>
    );
   }
   
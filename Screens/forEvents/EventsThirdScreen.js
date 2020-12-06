import React from "react";
import { Text, View, Button } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";

export default function EventsThirdScreen({ navigation }) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>Events Third Page!</Text>
        <Button
          onPress={() => navigation.popToTop()}
          title="Back to main"
        ></Button>
      </View>
    );
   }
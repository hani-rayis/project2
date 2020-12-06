import React from "react";
import { Text, View, Button } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";

export default function EventsThirdScreen({ navigation }) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>Thank you! We have reserved a spot for you. </Text>
        <Button
          onPress={() => navigation.popToTop()}
          title="Back to main screen"
        ></Button>
      </View>
    );
   }
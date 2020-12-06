import * as React from "react";
import { Text, View, Button } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import EventsHomeScreen from './forEvents/EventsHomeScreen';
import EventsSecondScreen from './forEvents/EventsSecondScreen';
import EventsThirdScreen from './forEvents/EventsThirdScreen';

const Stack = createStackNavigator();

export default function EventsStack() {
 return (
   <Stack.Navigator>
     <Stack.Screen name="Schedule of Events" component={EventsHomeScreen} />
     <Stack.Screen name="Reserve a Spot" component={EventsSecondScreen} />
     <Stack.Screen name="Form" component={EventsThirdScreen} />
   </Stack.Navigator>
 );
}



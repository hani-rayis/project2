import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";

const EventsHomeScreen = ({navigation}) => (
  <View style={styles.container}>
    <Text style={styles.row}>Upcoming Pet Adoption Drives</Text>
    <Text style={styles.row}>Native</Text>
    <Button
          onPress={() => navigation.navigate("Reserve a Spot")}
          title="Reserve a Spot"></Button>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24
  },
  row: {
    padding: 4,
    borderBottomColor: "red",
    borderBottomWidth: StyleSheet.hairlineWidth
  }
});

export default EventsHomeScreen;